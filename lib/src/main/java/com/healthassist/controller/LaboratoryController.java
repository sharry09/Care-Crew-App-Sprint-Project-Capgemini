package com.healthassist.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Laboratory;
import com.healthassist.entities.LaboratoryAppointment;
import com.healthassist.entities.MedicalTestResult;
import com.healthassist.exception.NoDoctorDataFoundException;
import com.healthassist.exception.NoLabAppointmentFoundException;
import com.healthassist.exception.NoResultAvailableException;

import com.healthassist.service.DoctorService;
import com.healthassist.service.LaboratoryAppointmentService;
import com.healthassist.service.LaboratoryService;
import com.healthassist.service.MedicalTestResultService;


@RestController
@RequestMapping(path="LIFELINE")
public class LaboratoryController {
	@Autowired
	private LaboratoryService service = null;
	
	@Autowired
	private DoctorService service1 = null;
	
	@Autowired
	private MedicalTestResultService service2 = null;
	
	@Autowired
    private LaboratoryAppointmentService service3=null;

	@PostMapping(path="addlaboratory")
	public ResponseEntity<String> addLaboratoryDetails(@RequestBody Laboratory laboratory ) {

		ResponseEntity<String> response = null;
		service.addLaboratoryInfo(laboratory);
		if (laboratory.getLaboratoryId()!= 0) {
			response = new ResponseEntity<String>("LABORATORY WITH ID "+laboratory.getLaboratoryId() + " is created in LIFE LINE database",
					HttpStatus.CREATED);
		}
		return response;
	}

	@GetMapping(path="getlaboratory")
	public List<Laboratory> getLaboratoryDetails() {
		return service.findLaboratory();
	}
	
	
	@PostMapping(path="addDoctorInLaboratory")
	public ResponseEntity<String> addDoctor(@RequestBody Doctor doctor)
	  {
		
		  ResponseEntity<String> response=null; 
		  service1.registerDoctorInfo(doctor);
			if(doctor.getDoctorId()!=0)
			{
				response=new ResponseEntity<String>("DOCTOR WITH ID "+doctor.getDoctorId()+" is created in LIFE LINE  database", HttpStatus.CREATED);
			}
			return response;
	  }
	
	@GetMapping(path = "getDoctorFromLaboratory")
	public List<Doctor> getDoctor(Doctor doctor){
		return service1.findDoctorDetails();
	}
	
	@PutMapping(path = "updateDoctorInLaboratory/{doctorId}/{contactNumber}")
	public Doctor editDoctor(@PathVariable("doctorId") int doctorId,@PathVariable("contactNumber") String contactNumber) throws NoDoctorDataFoundException{
		return service1.updateDoctorById(doctorId, contactNumber);
	}
	 
	@DeleteMapping(path = "deleteDoctorInLaboratory/{doctorId}")
	public String removeDoctor(@PathVariable("doctorId") int doctorId) throws NoDoctorDataFoundException{
		return service1.deleteDoctor(doctorId);
	}	
	

	@GetMapping(path = "getAllDoctorFromLaboratory")
	public List<Doctor> viewAllDoctors(String doctorName){
		return service1.viewAllDoctorsinLaboratory(doctorName);
	}
	
	@GetMapping(path = "viewDoctorCategories")
	public List<DoctorSpeciality> viewDoctoryCategories(String doctorSpeciality) {
		return service.viewDoctoryByCategory(doctorSpeciality);
	}
	
	@PostMapping(path = "addMedicalTestResult")
	public ResponseEntity<String> addMedicalTestResult(@RequestBody MedicalTestResult medicalTestResult) {
		 ResponseEntity<String> response=null; 
		 service2.addNewMedicalTestResult(medicalTestResult);
			if(medicalTestResult.getMedicalTestResultId() !=0)
			{
				response=new ResponseEntity<String>("MEDICAL TEST RESULT WITH ID "+medicalTestResult.getMedicalTestResultId()+" is created in LIFE LINE database", HttpStatus.CREATED);
			}
			return response; 
	}
	@GetMapping(path = "getMedicalTestResult/{medicalTestResultId}")
	public MedicalTestResult getMedicalTestResult(@PathVariable("medicalTestResultId") Integer medicalTestResultId) throws NoResultAvailableException{
		return service2.getMedicalTestResult(medicalTestResultId);
		
	}
	@DeleteMapping(path ="deleteMedicalTestresult/{medicalTestResultId}")
	public String removeMedicalTestById(@PathVariable("medicalTestResultId") Integer medicalTestResultId) throws NoResultAvailableException {
		return service2.deleteMedicalTestById(medicalTestResultId);
		
	}
	@GetMapping(path="viewAppointmentForMedicalTest/{patientId}")
	public LaboratoryAppointment viewAppointmentForMedicalTest(int patientId) throws NoLabAppointmentFoundException {
		return service3.getLabAppointmentById(patientId);
}
	@PutMapping(path ="updateMedicalTestresult/{medicalTestResultId}/{testCondition}")
	public String editMedicalTestById(@PathVariable("medicalTestResultId") Integer medicalTestResultId,@PathVariable("testCondition") String testCondition) throws NoResultAvailableException {
		return service2.updateMedicalTestById(medicalTestResultId, testCondition);
		
	}
}