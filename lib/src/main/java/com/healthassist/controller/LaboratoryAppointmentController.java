package com.healthassist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.LaboratoryAppointment;
import com.healthassist.exception.NoLabAppointmentFoundException;
import com.healthassist.service.LaboratoryAppointmentService;

@RestController
@RequestMapping(path="lifeline")
public class LaboratoryAppointmentController {
	@Autowired
    private LaboratoryAppointmentService service=null;
	
	
	//  http://localhost:9090/lifeline-api/lifeline/getLabDoctorAppointment/100/Rama/X-RAY/15
	@GetMapping(path="getLabDoctorAppointment/{patientId}/{patientName}/{typeOfMedicalTest}/{appointmentTime}")
	public String getLabDoctorAppointment(@PathVariable("patientId") int patientId, @PathVariable("patientName")String PatientName,@PathVariable("typeOfMedicalTest") String typeOfMedicalTest,@PathVariable("appointmentTime") int appointmentTime) {
		return service.searchDoctor(patientId,PatientName,typeOfMedicalTest, appointmentTime);
	}
	
//  http://localhost:9090/lifeline-api/lifeline/viewLabBookingHistory	
	@GetMapping(path="viewLabBookingHistory")
	public List<LaboratoryAppointment> getBookingHistory(){
		return service.getBookingHistory();
	}
	
//  http://localhost:9090/lifeline-api/lifeline/deleteLabAppointmentById/1		
	@DeleteMapping(path="deleteLabAppointmentById/{bookingId}")
	public String cancelAppointmentById(@PathVariable("bookingId") int bookingId) throws NoLabAppointmentFoundException{
		return service.cancelAppointment(bookingId);
	}
//  http://localhost:9090/lifeline-api/lifeline/updateLabAppointmentDateById/1/2021-11-09			
	@PutMapping(path="updateLabAppointmentDateById/{bookingId}/{date}")
	public String updateAppointmentById(@PathVariable("bookingId") int bookingId,@PathVariable("date")String date)throws NoLabAppointmentFoundException{
		return service.updateAppointment(bookingId, date);
	}
	
//  http://localhost:9090/lifeline-api/lifeline/getLabAppointmentById/1	
	@GetMapping(path="getLabAppointmentById/{patientId}")
	public LaboratoryAppointment getLabAppointmentById(@PathVariable("patientId") int patientId) throws NoLabAppointmentFoundException{
		return service.getLabAppointmentById(patientId);
	}

}