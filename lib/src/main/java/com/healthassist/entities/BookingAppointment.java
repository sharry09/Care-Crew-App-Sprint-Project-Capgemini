package com.healthassist.entities;

import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="BOOKING_APPOINTMENTS")
public class BookingAppointment {


	@Id 
    @Column(name="APPOINTMENT_ID")
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int appointmentId;
 
	
	@Column(name="PATIENT_NAME")
	private String patientName;
	
	@Column(name="AVAILABLE_SLOTS")
	private AvailableSlots availableSlots;
	
	@Column(name="DOCTOR_SPECIALTY")
    private  DoctorSpeciality doctorSpecialty;
	
	@Column(name="DATE_OF_CONSULTATION")
    private  String dateOfConsultation;
	
	@Column(name="DOCTOR_NAME")
    private String doctorName;
	
	  
	  @Column(name="BOOKING_STATUS")
	  private boolean bookingStatus;


	public int getAppointmentId() {
		return appointmentId;
	}


	public void setAppointmentId(int appointmentId) {
		this.appointmentId = appointmentId;
	}


	public String getPatientName() {
		return patientName;
	}


	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}


	public AvailableSlots getAvailableSlots() {
		return availableSlots;
	}


	public void setAvailableSlots(AvailableSlots availableSlots) {
		this.availableSlots = availableSlots;
	}


	public DoctorSpeciality getDoctorSpecialty() {
		return doctorSpecialty;
	}


	public void setDoctorSpecialty(DoctorSpeciality doctorSpecialty) {
		this.doctorSpecialty = doctorSpecialty;
	}


	public String getDateOfConsultation() {
		return dateOfConsultation;
	}


	public void setDateOfConsultation(String dateOfConsultation) {
		this.dateOfConsultation = dateOfConsultation;
	}


	public String getDoctorName() {
		return doctorName;
	}


	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}


	public boolean isBookingStatus() {
		return bookingStatus;
	}


	public void setBookingStatus(boolean bookingStatus) {
		this.bookingStatus = bookingStatus;
	}


	public BookingAppointment(int appointmentId, String patientName, AvailableSlots availableSlots,
			DoctorSpeciality doctorSpecialty, String dateOfConsultation, String doctorName, boolean bookingStatus) {
		super();
		this.appointmentId = appointmentId;
		this.patientName = patientName;
		this.availableSlots = availableSlots;
		this.doctorSpecialty = doctorSpecialty;
		this.dateOfConsultation = dateOfConsultation;
		this.doctorName = doctorName;
		this.bookingStatus = bookingStatus;
	}


	public BookingAppointment() {
		super();
		
	}


	@Override
	public String toString() {
		return "BookingAppointment [appointmentId=" + appointmentId + ", patientName=" + patientName
				+ ", availableSlots=" + availableSlots + ", doctorSpecialty=" + doctorSpecialty
				+ ", dateOfConsultation=" + dateOfConsultation + ", doctorName=" + doctorName + ", bookingStatus="
				+ bookingStatus + "]";
	}


	@Override
	public int hashCode() {
		return Objects.hash(appointmentId, availableSlots, bookingStatus, dateOfConsultation, doctorName,
				doctorSpecialty, patientName);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		BookingAppointment bookingAppointment = (BookingAppointment) obj;
		return appointmentId == bookingAppointment.appointmentId && availableSlots == bookingAppointment.availableSlots
				&& bookingStatus == bookingAppointment.bookingStatus && Objects.equals(dateOfConsultation, bookingAppointment.dateOfConsultation)
				&& Objects.equals(doctorName, bookingAppointment.doctorName) && doctorSpecialty == bookingAppointment.doctorSpecialty
				&& Objects.equals(patientName, bookingAppointment.patientName);
	}
	  
	
}
