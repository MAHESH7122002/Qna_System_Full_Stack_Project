package com.maheshnallada.QNA.mapper;

import com.maheshnallada.QNA.Model.Qna;
import com.maheshnallada.QNA.Model.User;
import com.maheshnallada.QNA.dto.QnaDto;
import com.maheshnallada.QNA.dto.UserDto;

public class UserMapper
{
    public static UserDto mapToUserDto(User user)
    {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUserName(user.getUserName());
        userDto.setRole(user.getRole());
        userDto.setPassword(user.getPassword());
        userDto.setEmail(user.getEmail());
        return userDto;
    }

    public static User mapToUser(UserDto userDto)
    {
        User user = new User();
        user.setUserId(userDto.getUserId());
        user.setUserName(userDto.getUserName());
        user.setRole(userDto.getRole());
        user.setEmail(userDto.getEmail());
        user.setPassword(userDto.getPassword());
        return user;
    }
}