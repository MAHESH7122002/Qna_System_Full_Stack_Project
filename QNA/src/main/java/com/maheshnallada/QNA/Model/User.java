package com.maheshnallada.QNA.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name="User")
public class User
{
    @Id
    @SequenceGenerator(
            name="User_Sequence",
            sequenceName = "User_Sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "User_Sequence")
    @Column(name="userId")
    private long userId;

    @Column(name="userName")
    private String userName;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name = "role")
    private String role;

    // One-to-many relationship with Qna entity
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(
            name="userId",
            referencedColumnName = "userId"
    )
    private List<Qna> Qna;


}
