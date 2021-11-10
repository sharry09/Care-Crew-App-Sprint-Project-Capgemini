package com.healthassist.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.LaboratoryAppointmentDao;
import com.healthassist.entities.LaboratoryAppointment;
import com.healthassist.exception.NoLabAppointmentFoundException;


@Service
public class LaboratoryAppointmentServiceImpl implements LaboratoryAppointmentService {
	
	@Autowired
    private LaboratoryAppointmentDao dao=null;

	@Override
	public String searchDoctor(int patientId, String PatientName, String typeOfMedicalTest, int appointmentTime) {
		String str="";
		if(typeOfMedicalTest.equals("BLOOD TEST") || typeOfMedicalTest.equals("X-RAY") || typeOfMedicalTest.equals("CT-SCAN")) {
		if(appointmentTime>=9 && appointmentTime<=18 )	{
			str="Appointment Booked";
			dao.save(new LaboratoryAppointment(patientId,PatientName,typeOfMedicalTest,appointmentTime,LocalDate.now(),true));
			
		}
		else {
			str="Doctor is unavailable at this appointment time";
			dao.save(new LaboratoryAppointment(patientId,PatientName,typeOfMedicalTest,appointmentTime,LocalDate.now(),false));
		}
		}
		else {
			str="This Doctor Specialty is unavailable in our hospital";
			dao.save(new LaboratoryAppointment(patientId,PatientName,typeOfMedicalTest,appointmentTime,LocalDate.now(),false));
		}
		return str;
		
	}

	@Override
	public String cancelAppointment(int patientId) throws NoLabAppointmentFoundException{
		if(dao.existsById(patientId))
		{
			dao.deleteById(patientId);
			return "Apointment Cancelled Succesfully";
		}
	 throw new NoLabAppointmentFoundException("No such Lab Appointment found");

		
	}

	@Override
	public String updateAppointment(int bookingId, String date) throws NoLabAppointmentFoundException {
		LaboratoryAppointment ba= dao.findById(bookingId).get();
		if(dao.existsById(bookingId)){
		ba.setDateOfConsultation(LocalDate.parse(date));
		dao.save(ba);
		return "Appointment Updated Successfully";
		}
		throw new NoLabAppointmentFoundException("No such Lab Appointment found");
		
		
		
	}

	@Override
	public List<LaboratoryAppointment> getBookingHistory() {
		
		return dao.findAll();
	}

	@Override
	public LaboratoryAppointment getLabAppointmentById(int patientId) throws NoLabAppointmentFoundException {
		if(dao.existsById(patientId)){
			return dao.findById(patientId).get();
		}
	throw new NoLabAppointmentFoundException("No such patient found");
	
	}
    
	


}