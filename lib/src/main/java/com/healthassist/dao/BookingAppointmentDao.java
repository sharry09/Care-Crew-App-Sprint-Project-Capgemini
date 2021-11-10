package com.healthassist.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.BookingAppointment;
@Repository
public interface BookingAppointmentDao extends JpaRepository<BookingAppointment,Integer> {
	
	
	//find a doctor and book appointment
	public default String findDoctor(String doctorSpeciality,int appointmentTime) {
		String str="";
		BookingAppointment bookAppointment=new BookingAppointment();
		if(doctorSpeciality.equals("DENTIST") || doctorSpeciality.equals("CARDIOLOGIST") || doctorSpeciality.equals("ALLERGIST")) {
		if(appointmentTime>=9 && appointmentTime<=18 )	{
			str="Appointment Booked";
			bookAppointment.setBookingStatus(true);
		}
		else {
			str="Doctor is unavailable at this appointment time";
			bookAppointment.setBookingStatus(false);
		}
		}
		else {
			str="This Doctor Specialty is unavailable in our hospital";
			bookAppointment.setBookingStatus(false);
		}
		return str;
	}
	
	//viewing patient medical history
//      public default BookingAppointment getPatientMedicalHistory(int appointmentId) {
//	  BookingAppointment bookAppointment=new BookingAppointment();
//	  if(appointmentId != 0) {
//	  return bookAppointment;
//	  }
//	 else
//	  return null;
//  }
	
	@Query(value="Select s.appointmentId From BookingAppointment s")
	public Optional<BookingAppointment> getPatientMedicalHistory(int appointmentId);



}