package com.pickpack.chatservice.repo.redis;

import com.pickpack.chatservice.dto.IsNewDTO;
import com.pickpack.chatservice.entity.redis.RedisChatMessage;
import com.pickpack.chatservice.repo.ChatMessageRepository;
import com.pickpack.chatservice.repo.ChatRoomRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.HashOperations;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ParameterizedPreparedStatementSetter;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.Serializable;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.format.DateTimeFormatter;
import java.util.*;

@RequiredArgsConstructor
@Service
@Slf4j
public class RedisChatMessageRepository implements Serializable {
    private final String CHAT_MESSAGES = "CHAT_MESSAGES";
    private final RedisTemplate<String, Object> redisTemplate;
    private final JdbcTemplate jdbcTemplate;
    private final ChatRoomRepository chatRoomRepository;
    private final ChatMessageRepository chatMessageRepository;
    private HashOperations<String, String, List<RedisChatMessage>> opsHashChatMessage;
    private final RedisChatRoomRepository RedisChatRoomRepository;

    @PostConstruct
    private void init() {
        opsHashChatMessage = redisTemplate.opsForHash();
    }

    public boolean isHasKeyOnChatMessage(String roomId){
        return opsHashChatMessage.hasKey(CHAT_MESSAGES,roomId);
    }

    public List<RedisChatMessage> findMessagesByRoomId(String roomId){
        return opsHashChatMessage.get(CHAT_MESSAGES,roomId);
    }
    public void saveMessageList(String roomId, List<RedisChatMessage> redisChatMessageList){
        opsHashChatMessage.put(CHAT_MESSAGES, roomId, redisChatMessageList);
    }

    public void saveMessagesMap(Map<String,List<RedisChatMessage>> redisChatMessageMap){
        opsHashChatMessage.putAll(CHAT_MESSAGES,redisChatMessageMap);
    }

    public Map<String,List<RedisChatMessage>> findAllMessagesByKey(){
        return opsHashChatMessage.entries(CHAT_MESSAGES);
    }

    public void deleteAllMessage(){
        redisTemplate.delete(CHAT_MESSAGES);
    }

    //마지막 메시지 주기
    public IsNewDTO findSizeAndLastMessage(String roomId){
        if(isHasKeyOnChatMessage(roomId)){
            return IsNewDTO.create(findMessagesByRoomId(roomId));
        }else{
            return null;
        }
    }


    public int[][] writeMessageFromRedisToDB(List<RedisChatMessage> allMessageList){
        return jdbcTemplate.batchUpdate
                ("INSERT IGNORE INTO chat_message(chat_id,room_id,type,sender,message,time) VALUES (?,?,?,?,?,?);",
                        allMessageList,
                        allMessageList.size(),
                        new ParameterizedPreparedStatementSetter<RedisChatMessage>() {
                            @Override
                            public void setValues(PreparedStatement ps, RedisChatMessage chatMessage) throws SQLException {
                                //?
                                ps.setString(1, chatMessage.getTime().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss.SSS"))+
                                                chatMessage.getSender());
                                ps.setString(2,chatMessage.getRoomId());
                                ps.setString(3,chatMessage.getType().name());
                                ps.setString(4, chatMessage.getSender());
                                ps.setString(5,chatMessage.getMessage());
                                ps.setTimestamp(6, Timestamp.valueOf(chatMessage.getTime()));
                            }
                        }
                );
    }
}