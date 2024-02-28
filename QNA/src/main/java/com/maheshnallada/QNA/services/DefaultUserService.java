package com.maheshnallada.QNA.services;

import com.maheshnallada.QNA.Model.User;
import com.maheshnallada.QNA.dto.UserRegisteredDTO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface DefaultUserService
{
    UserDetails loadUserByUsername(String email) throws UsernameNotFoundException;

    User save(UserRegisteredDTO userRegisteredDTO);

}
