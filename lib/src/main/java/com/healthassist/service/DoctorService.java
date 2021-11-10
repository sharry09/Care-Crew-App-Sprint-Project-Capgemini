package com.healthassist.service;

import java.util.List;
import java.util.Optional;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoDoctorDataFoundException;



public interface DoctorService 
{
	
	 public Doctor registerDoctorInfo(Doctor doctor);
	 public Optional<Doctor> findDoctorById(int doctorId) throws NoDoctorDataFoundException;
	 public List<Doctor> findDoctorDetails();
	 public List<Doctor> viewAllDoctorsinLaboratory(String doctorName);
	 public Doctor updateDoctorById(int doctorId, String contactNumber) throws NoDoctorDataFoundException;
	 public String deleteDoctor(int doctorId) throws NoDoctorDataFoundException;
	 public Patient addPatient(Patient patient);
	 public Optional<Patient> findPatientsMedicalHistoryById(int patientId) throws NoDoctorDataFoundException ;
	 public Optional<Hospital> findHospitalById(int hospitalId) throws NoDoctorDataFoundException;
}