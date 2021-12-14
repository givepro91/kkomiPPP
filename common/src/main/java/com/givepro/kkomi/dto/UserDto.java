package com.givepro.kkomi.dto;

import com.givepro.kkomi.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {

    private Long id;
    private String username;
    private String password;
    private LocalDateTime createdDate;
    private LocalDateTime modifyDate;

    public User toEntity() {
        return User.builder()
                .username(username)
                .password(password)
//                .createdDate(createdDate)
//                .modifyDate(modifyDate)
                .build();
    }

}
