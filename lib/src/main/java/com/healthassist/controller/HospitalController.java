package com.healthassist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.TreatmentHistory;
import com.healthassist.exception.NoBedsFoundException;
import com.healthassist.exception.NoDoctorDataFoundException;
import com.healthassist.service.DoctorService;
import com.healthassist.service.HospitalService;



@RestController
@RequestMapping(path="LIFELINE")
public class HospitalController {
	@Autowired
	  private HospitalService service=null;
	
	@Autowired
	private DoctorService service1 = null;
	
	
	@PostMapping(path="addHospital")
	public ResponseEntity<String> getHospitalDetail(@RequestBody Hospital hospital)
	  {
		
		  ResponseEntity<String> response=null; 
			service.addHospitalInfo(hospital);
			if(hospital.getHospitalId()!=0)
			{
				response=new ResponseEntity<String>("HOSPITAL WITH ID "+ hospital.getHospitalId()+" is created in Life Line database", HttpStatus.CREATED);
			}
			return response;
	  }
	
	@GetMapping(path="getHospital")
	public List<Hospital> getHospital()
	{
		return service.findHospital();
	}
	
	@PostMapping(path="addDoctorInHospital")
	
	public ResponseEntity<String> addDoctor(@RequestBody Doctor doctor)
	  {
		
		  ResponseEntity<String> response=null; 
		  service1.registerDoctorInfo(doctor);
			//service.addDoctor(doctor);
			if(doctor.getDoctorId()!=0)
			{
				response=new ResponseEntity<String>("DOCTOR WITH ID "+doctor.getDoctorId()+" is created in LifeLine database", HttpStatus.CREATED);
			}
			return response;
	  }
	
	@GetMapping(path = "getDoctorFromHospital")
	public List<Doctor> getDoctor(Doctor doctor){
		return service1.findDoctorDetails();
	}
	
	@PutMapping(path = "updateDoctorInHospital/{doctorId}/{contactNumber}")
	public Doctor editDoctor(@PathVariable("doctorId") int doctorId,@PathVariable("contactNumber") String contactNumber) throws NoDoctorDataFoundException{
		return service1.updateDoctorById(doctorId, contactNumber);
	}
	 
	@DeleteMapping(path = "deleteDoctorInHospital/{doctorId}")
	public String removeDoctor(@PathVariable("doctorId") int doctorId) throws NoDoctorDataFoundException{
		return service1.deleteDoctor(doctorId);
	}

	@GetMapping(path = "viewNoOfBeds")
	public Integer viewNoOfBeds() {
		return service.viewNoOfBeds();
	}
	
	@PutMapping(path = "updateNoOfBeds/{hospitalId}/{noOfBeds}")
	public Hospital updateNoOfBeds(@PathVariable("noOfBeds") int noOfBeds,@PathVariable("hospitalId") int hospitalId)  throws NoBedsFoundException {
		return service.modifyNoOfBeds(noOfBeds, hospitalId);
	}
		
	
	@GetMapping(path = "findDoctorbySpeciality")
	public List<DoctorSpeciality> viewDoctoryBySpeciality(String doctorSpeciality) {
		return service.viewDoctoryBySpeciality(doctorSpeciality);
	}
	
	@PostMapping(path="addTreatmentHistory")
	public ResponseEntity<String> getTreatmentHistory(@RequestBody TreatmentHistory treatmentHistory)
	  {
		
		  ResponseEntity<String> response=null; 
			service.addTreatmentHistory(treatmentHistory);
			if(treatmentHistory.getPatientId()!=0)
			{
				response=new ResponseEntity<String>("PATIENT TRAETMENT HISTORY FOR PATIENT WITH ID "+treatmentHistory.getPatientId()+" is created in the database", HttpStatus.CREATED);
			}
			return response;
	  }
	
	
	@PutMapping(path = "updateTeatmentHistory")
	public void updateTrearmentHistory(TreatmentHistory treatmentHistory) {
		service.updateTraetmentHistory(treatmentHistory);
	}
	
	}