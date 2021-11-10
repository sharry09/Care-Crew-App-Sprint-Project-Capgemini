package com.healthassist.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.Patient;
import com.healthassist.service.DoctorService;
import com.healthassist.service.PatientService;

@RestController
@RequestMapping(path="LIFELINE")
public class AdminController {

	@Autowired
	PatientService patientService;
	@Autowired
	DoctorService doctorService;



	//  http://localhost:9090/LIFELINE-api/LIFELINE 
	@PostMapping
	public ResponseEntity<String> savePatient(@RequestBody Patient patient) {
		ResponseEntity<String> response=null;
		patientService.registerPatientInfo(patient);
		if(patient.getPatientId() !=0) {
			response=new ResponseEntity<String>("PATIENT WITH ID "+patient.getPatientId()+" is created in LIFE LINE database", 
					HttpStatus.CREATED);
		}
		return response;
	}




	//http://localhost:9090/LIFELINE-api/LIFELINE/addDoctorDetail --> Use Post method
	@PostMapping(path = "addDoctorDetail")
	public ResponseEntity<String> addDoctorDetails(@Valid @RequestBody Doctor doctor)
	{

		ResponseEntity<String> response=null; 
		doctorService.registerDoctorInfo(doctor);
		if(doctor.getDoctorId()!=0)
		{
			response=new ResponseEntity<String>("DOCTOR WITH ID  "+doctor.getDoctorId()+"  is created in  Life Line database", HttpStatus.CREATED);
		}
		return response;
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
