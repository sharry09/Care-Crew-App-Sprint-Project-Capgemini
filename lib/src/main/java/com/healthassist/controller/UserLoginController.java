package com.healthassist.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.healthassist.dao.UserLoginDao;
import com.healthassist.entities.UserLogin;
import com.healthassist.entities.LoginStatus;

@RestController
@RequestMapping(path="LIFELINE")
public class UserLoginController {
	@Autowired
	UserLoginDao userLoginDao;
	
	// http://localhost:9090/LIFELINE-api/LIFELINE/registerUser
	@PostMapping(path="registerUser")
	public String registerAdmin(@Valid @RequestBody UserLogin userLogin) {
		List<UserLogin> userLogins = userLoginDao.findAll();
		for (UserLogin admin1 : userLogins) {
			if(admin1.equals(userLogin)) {
				return "User with Username "+userLogin.getUsername()+"  "+ LoginStatus.ALREADY_EXISTS;
			}
		}
		userLoginDao.save(userLogin);
		return LoginStatus.REGISTRATION_SUCCESS+ " "+"for "+userLogin.getUserType()+" with username "+userLogin.getUsername();
	}
	
	
	//	http://localhost:9090/LIFELINE-api/LIFELINE/user/login
	@PostMapping("/user/login")
	public LoginStatus loginUser(@Valid @RequestBody UserLogin admin1) {
		List<UserLogin> users = userLoginDao.findAll();
		for (UserLogin admin2 : users) {
			if (admin2.equals(admin1)) {
				admin1.setLoggedIn(true);
				userLoginDao.save(admin1);
				return LoginStatus.LOGIN_SUCCESS;
			}
		}
		return LoginStatus.LOGIN_FAILED;
	}
	//	http://localhost:9090/LIFELINE-api/LIFELINE/user/logout
	@PostMapping("/user/logout")
	public LoginStatus logoutUser(@Valid @RequestBody UserLogin admin1) {
		List<UserLogin> users = userLoginDao.findAll();
		for (UserLogin admin2 : users) {
			if (admin2.equals(admin1)) {
				admin1.setLoggedIn(false);
				userLoginDao.save(admin1);
				return LoginStatus.LOGOUT_SUCCESS;
			}
		}
		return LoginStatus.LOGOUT_FAILED;
	}

	@ResponseStatus(HttpStatus.BAD_REQUEST)
	@ExceptionHandler(MethodArgumentNotValidException.class)
	public Map<String, String> handleValidationExceptions(MethodArgumentNotValidException ex) {
		Map<String, String> errors = new HashMap<>();
		ex.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError)error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});
		return errors;
	}

}
