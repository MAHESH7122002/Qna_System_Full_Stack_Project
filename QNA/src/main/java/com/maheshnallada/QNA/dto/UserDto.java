package com.maheshnallada.QNA.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto
{
    private long UserId;

    private String userName;

    private String email;

    private String password;

    String role;
}