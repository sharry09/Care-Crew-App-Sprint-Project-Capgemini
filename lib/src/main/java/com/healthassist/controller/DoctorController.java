package com.healthassist.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoDoctorDataFoundException;
import com.healthassist.service.DoctorService;


@RestController
@RequestMapping(path="LIFELINE")
public class DoctorController
{
	
	@Autowired
	  private DoctorService doctorService=null;
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/readDoctorDetails --> Use Get method
	@GetMapping(path="readDoctorDetails")
	public List<Doctor> getDoctorDetails()
	{
		return doctorService.findDoctorDetails();
	}
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/doctor--DOCTORid  --> Use Get method
	@GetMapping(path="doctor/{doctorId}")
	public Optional<Doctor> getDoctorById(@PathVariable("doctorId") int doctorId) throws NoDoctorDataFoundException
	{
		return doctorService.findDoctorById(doctorId);
	}
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/hospital/1
	@GetMapping(path="hospital/{hospitalId}")
	public Optional<Hospital> getHospitalById(@PathVariable("hospitalId") int hospitalId) throws NoDoctorDataFoundException
	{
		return doctorService.findHospitalById(hospitalId);
	}

	//http://localhost:9090/LIFELINE-api/LIFELINE/patient/1
	@GetMapping(path="patient/{patientId}")
	public Optional<Patient> getPatientById(@PathVariable("patientId") int patientId) throws  NoDoctorDataFoundException
	{
		return doctorService.findPatientsMedicalHistoryById(patientId);
	}
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/addPatient
@PostMapping(path="addPatient")
		public ResponseEntity<String> addDoctor(@RequestBody Patient patient)
	  {
		
		  ResponseEntity<String> response=null; 
			doctorService.addPatient(patient);
			if(patient.getPatientId()!=0)
			{
				response=new ResponseEntity<String>("PATIENT WITH ID "+patient.getPatientId()+"  is created in Life Line database", HttpStatus.CREATED);
			}
			return response;
	  }
	
}