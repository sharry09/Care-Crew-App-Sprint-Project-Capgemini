package com.healthassist.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.UserLogin;




@Repository
public interface UserLoginDao extends JpaRepository<UserLogin, String> {
	
}
