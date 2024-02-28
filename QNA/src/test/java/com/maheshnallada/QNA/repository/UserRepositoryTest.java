package com.maheshnallada.QNA.repository;


import com.maheshnallada.QNA.Model.User;
import com.maheshnallada.QNA.Repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class UserRepositoryTest
{

    @Autowired
    private UserRepository userRepository;

    @Test
    public void saveUser()
    {
        User user = User.builder()
                .userName("Admin")
                .email("admin@gmail.com")
                .password("abc123")
                .role("admin")
                .build();
        userRepository.save(user);
    }


}
