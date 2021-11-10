package com.healthassist.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.Patient;

@Repository
public interface PatientDao extends JpaRepository<Patient, Integer>
{

	@Query(value="Select s.treatmentPackages From Hospital s")
	 public String findPackages();
	
}