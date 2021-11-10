package com.healthassist.service;

import java.util.List;

import com.healthassist.entities.LaboratoryAppointment;
import com.healthassist.exception.NoLabAppointmentFoundException;

public interface LaboratoryAppointmentService {
	public String searchDoctor(int patientId,String PatientName, String typeOfMedicalTest, int appointmentTime);
	public String cancelAppointment(int patientId) throws NoLabAppointmentFoundException;
	public String updateAppointment(int bookingId,String date) throws NoLabAppointmentFoundException;
	public List<LaboratoryAppointment> getBookingHistory();
	public LaboratoryAppointment getLabAppointmentById(int patientId) throws NoLabAppointmentFoundException;
}

