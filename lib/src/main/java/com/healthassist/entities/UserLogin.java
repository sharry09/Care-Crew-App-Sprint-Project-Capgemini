package com.healthassist.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="USER_LOGIN")
public class UserLogin {
	@Id 
	@Column(name="USERNAME")
	@NotBlank(message="Invalid Username")
	@Pattern(regexp="^[a-zA-Z]{4,}(?: [a-zA-Z]+)?$",message="Invalid Name")
	private String username;
	@NotBlank
	@Column(name="PASSWORD")
	private String password;
	@NotBlank(message="Invalid Usertype")
	@Column(name="USERTYPE")
	private String userType;
	@Column(name="LOGIN_STATUS")
	private boolean loggedIn;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public boolean isLoggedIn() {
		return loggedIn;
	}
	public void setLoggedIn(boolean loggedIn) {
		this.loggedIn = loggedIn;
	}
	public UserLogin() {
		super();
		
	}
	public UserLogin(String username, String password, String userType, boolean loggedIn) {
		super();
		this.username = username;
		this.password = password;
		this.userType = userType;
		this.loggedIn = loggedIn;
	}
	@Override
	public String toString() {
		return "Admin [username=" + username + ", password=" + password + ", userType=" + userType + ", loggedIn="
				+ loggedIn + "]";
	}
	@Override
	public int hashCode() {
		return Objects.hash(loggedIn, password, userType, username);
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		UserLogin userLogin = (UserLogin) obj;
		return Objects.equals(password, userLogin.password)
				&&Objects.equals(userType, userLogin.userType)
				 && Objects.equals(username, userLogin.username);
	}
	
	
}

