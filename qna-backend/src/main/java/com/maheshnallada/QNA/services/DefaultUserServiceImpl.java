package com.maheshnallada.QNA.services;
import java.util.Collection;
import java.util.Collections;
import java.util.Set;
import java.util.stream.Collectors;

import com.maheshnallada.QNA.Model.User;
import com.maheshnallada.QNA.Repository.UserRepository;
import com.maheshnallada.QNA.dto.UserRegisteredDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
@Service
public class DefaultUserServiceImpl implements DefaultUserService{
    @Autowired
    private UserRepository userRepo;


    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        User user = userRepo.findByEmail(email);
        if(user == null)
        {
            throw new UsernameNotFoundException("Invalid username or password.");
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), mapRolesToAuthorities(user.getRole()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(String role)
    {
        return Collections.singleton(new SimpleGrantedAuthority(role));
    }

    @Override
    public User save(UserRegisteredDTO userRegisteredDTO) {

        User user = new User();
        user.setEmail(userRegisteredDTO.getEmail());
        user.setUserName(userRegisteredDTO.getUserNname());
        user.setPassword(passwordEncoder.encode(userRegisteredDTO.getPassword()));
        user.setRole("Admin");
        return userRepo.save(user);
    }
}
