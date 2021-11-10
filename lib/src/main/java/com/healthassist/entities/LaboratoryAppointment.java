package com.healthassist.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


/*
{
 "bookingId":"1",
"patientName":"Roja",
"typeOfMedicalTest":"X-RAY",
"appointmentTime":12,
}*/


@Component
@Entity
@Scope(scopeName = "prototype")
@Table(name = "Laboratory_Appointments")

public class LaboratoryAppointment {
	
	@Id
	@Column(name="BOOKING_ID")
	//@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	
	@Column(name="PATIENT_NAME")
	private String patientName;
	
	
	@Column(name="Type_Of_Medical_Test")
    private String typeOfMedicalTest;
	
	@Column(name="APPOINTMENT_TIME")
	private int appointmentTime;
	
	@Column(name="DATE_OF_CONSULTATION")
    private  LocalDate dateOfConsultation;
		  
	@Column(name="BOOKING_STATUS")
	private boolean bookingStatus;

	public int getBookingId() {
		return bookingId;
	}

	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getTypeOfMedicalTest() {
		return typeOfMedicalTest;
	}

	public void setTypeOfMedicalTest(String typeOfMedicalTest) {
		this.typeOfMedicalTest = typeOfMedicalTest;
	}

	public int getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(int appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public LocalDate getDateOfConsultation() {
		return dateOfConsultation;
	}

	public void setDateOfConsultation(LocalDate dateOfConsultation) {
		this.dateOfConsultation = dateOfConsultation;
	}

	public boolean isBookingStatus() {
		return bookingStatus;
	}

	public void setBookingStatus(boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}
	
	

	public LaboratoryAppointment() {
		super();
		
	}

	public LaboratoryAppointment(int bookingId, String patientName, String typeOfMedicalTest, int appointmentTime,
			LocalDate dateOfConsultation, boolean bookingStatus) {
		super();
		this.bookingId = bookingId;
		this.patientName = patientName;
		this.typeOfMedicalTest = typeOfMedicalTest;
		this.appointmentTime = appointmentTime;
		this.dateOfConsultation = dateOfConsultation;
		this.bookingStatus = bookingStatus;
	}

	@Override
	public String toString() {
		return "laboratoryAppointment [bookingId=" + bookingId + ", patientName=" + patientName + ", typeOfMedicalTest="
				+ typeOfMedicalTest + ", appointmentTime=" + appointmentTime + ", dateOfConsultation="
				+ dateOfConsultation + ", bookingStatus=" + bookingStatus + "]";
	}
	
	
	
	


}