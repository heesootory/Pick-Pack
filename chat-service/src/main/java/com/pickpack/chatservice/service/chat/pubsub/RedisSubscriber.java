package com.pickpack.chatservice.service.chat.pubsub;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.pickpack.chatservice.entity.redis.RedisChatMessage;
import com.pickpack.chatservice.service.chat.ChatMessageService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Service;

@Slf4j
@RequiredArgsConstructor
@Service
public class RedisSubscriber{

    private final ObjectMapper objectMapper;
    private final ChatMessageService chatMessageService;
    private final SimpMessageSendingOperations messagingTemplate;
    public void sendMessage(String publishMessage) {
        try {
            RedisChatMessage roomMessage = objectMapper.readValue(publishMessage, RedisChatMessage.class);
            chatMessageService.createMessage(roomMessage);

            // Websocket 구독자에게 채팅 메시지 Send
            messagingTemplate.convertAndSend("/sub/chat/room/" + roomMessage.getRoomId(), roomMessage);
        } catch (Exception e) {
            log.error(e.getMessage());
        }
    }
}