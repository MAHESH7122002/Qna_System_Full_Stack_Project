package com.maheshnallada.QNA.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRegisteredDTO
{
    private String userNname;

    private String email;

    private String password;

    String role;
}
