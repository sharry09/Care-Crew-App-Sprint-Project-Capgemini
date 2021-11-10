package com.healthassist.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.Patient;

@Repository
public interface DoctorDao extends JpaRepository<Doctor, Integer>
{
	
	 @Query(value="Select s.doctorId From Doctor s")
		public Optional<Doctor> findByDoctorId(int doctorId);
	
	  @Query(value="Select p.patientId From Patient p")
		 public List<Patient> findPatientById(int patientId);

	  @Query(value = "Select p from Patient p")
		public  Patient save(Patient patient);
}