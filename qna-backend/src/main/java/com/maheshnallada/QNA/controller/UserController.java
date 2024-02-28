package com.maheshnallada.QNA.controller;

import com.maheshnallada.QNA.Repository.UserRepository;
import com.maheshnallada.QNA.dto.UserDto;
import com.maheshnallada.QNA.dto.UserLoginDto;
import com.maheshnallada.QNA.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/api/v1")
public class UserController
{

    //Register
    private UserService userService;

    public UserController(UserService userService)
    {
        super();
        this.userService = userService;
    }

    @ModelAttribute("user")
    public UserDto userRegistrationDto() {
        return new UserDto();
    }

    @GetMapping("/register")
    public String showRegistrationForm()
    {
        return "register";
    }

    @PostMapping("register")
    public String registerUserAccount(@ModelAttribute("user")
                                      UserDto registrationDto) {
        userService.save(registrationDto);
        return "redirect:/login";
    }



    //..............................Login...................................



    @Autowired
    UserRepository userRepo;

    @ModelAttribute("user")
    public UserLoginDto userLoginDTO()
    {
        return new UserLoginDto();
    }

    @GetMapping("login")
    public String login()
    {
        return "login";
    }

    @PostMapping("login")
    public void loginUser(@ModelAttribute("user") UserLoginDto userLoginDTO)
    {
        System.out.println("UserDTO"+userLoginDTO);
        userService.loadUserByUsername(userLoginDTO.getUserName());
    }


}
