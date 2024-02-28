package com.maheshnallada.QNA.repository;


import com.maheshnallada.QNA.Model.Qna;
import com.maheshnallada.QNA.Model.User;
import com.maheshnallada.QNA.Repository.QnaRepository;
import com.maheshnallada.QNA.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class QnaRepositoryTest
{

    @Autowired
    private QnaRepository qnaRepository;

    @Autowired
    private UserRepository userRepository;



    @Test
    public void saveQna()
    {
        User user = User.builder()
                    .password("abc123")
                    .userName("admin2")
                    .role("Admin")
                .email("admin2@gmail.com")
                    .build();

        Qna qna = Qna.builder()
            .Question("Question1")
                .Answer("Answer1")
                .Level("Low")
                .Topic("Test")
                .user(user)
                .build();

        qnaRepository.save(qna);
    }


}
