package com.healthassist.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.MedicalTestResult;

@Repository
public interface MedicalTestResultDao extends JpaRepository<MedicalTestResult, Integer>{

}
