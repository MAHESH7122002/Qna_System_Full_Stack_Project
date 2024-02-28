package com.maheshnallada.QNA.Repository;

import com.maheshnallada.QNA.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User,Long>
{
    User findByEmail(String emailId);

}
