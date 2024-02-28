package com.maheshnallada.QNA.services;

import com.maheshnallada.QNA.dto.UserDto;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;

public interface UserService {

    void createUserFromOAuth(DefaultOAuth2User userDetails);

    UserDto save(UserDto userDto);

    UserDetails loadUserByUsername(String email);

}