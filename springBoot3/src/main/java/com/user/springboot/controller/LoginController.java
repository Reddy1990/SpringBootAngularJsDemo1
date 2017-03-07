package com.user.springboot.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/SpringBootLogin")
public class LoginController {

	@RequestMapping(value = "/user/{loginname}/{password}", method = RequestMethod.GET,consumes=MediaType.APPLICATION_JSON_VALUE)
    public String checkUserLogin(@PathVariable("loginname") String  loginname,@PathVariable("password") String  password) {
		if(loginname.equals("admin")&& password.equals("password"))
		{
			return "success";
		}
		return "failure";
			
       
    }
}
