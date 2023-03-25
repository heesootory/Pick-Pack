package com.pickpack.memberservice.dto;

import com.pickpack.memberservice.entity.Member;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Setter
@Getter
public class JoinReqDto {

    private String mid;
    private String pwd;
    private String nickname;
    private String img_url;

    public Member toEntity(BCryptPasswordEncoder bCryptPasswordEncoder){
        return Member.builder()
                .mid(mid)
                .nickname(nickname)
                .pwd(bCryptPasswordEncoder.encode(pwd))
                .img_url(img_url)
                .build();
    }

    public Member toTestEntity(){
        return Member.builder()
                .mid(mid)
                .nickname(nickname)
                .pwd(pwd)
                .img_url(img_url)
                .build();
    }
}
