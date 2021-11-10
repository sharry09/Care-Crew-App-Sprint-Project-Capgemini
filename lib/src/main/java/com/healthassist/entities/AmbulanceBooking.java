package com.healthassist.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.sun.istack.NotNull;

@Component
@Entity
@Scope(scopeName = "prototype")
@Table(name = "AMBULANCE_BOOKING_TABLE")
	
public class AmbulanceBooking {
	
	@Id
	@Column(name="AMBULANCE_BOOKINGID")
	@NotNull
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int ambulanceBookingId;
	
	@OneToOne(cascade=CascadeType.MERGE)
	@JoinColumn(name="AMBULANCE_ID")
	private Ambulance ambulance;

	/*@Temporal(TemporalType.DATE)
	@Column(name="AMBULANCE_BOOKINGDATE")
	private Date ambulanceBookingDate;*/

	@OneToOne
	@JoinColumn(name="PATIENT_ID")
	private Patient patient;
	

	@Column(name="AMBULANCE_BOOKINGSTATUS",nullable=false,length = 10)
	private boolean ambulanceStatus;
	@Column(name="SLOTS")
	private Slots slots;

	@Column(name="AMBULANCE_BOOKINGDATE")
	private String ambulanceBookingDate;
	


	public String getAmbulanceBookingDate() {
		return ambulanceBookingDate;
	}


	public void setAmbulanceBookingDate(String ambulanceBookingDate) {
		this.ambulanceBookingDate = ambulanceBookingDate;
	}


	public Slots getSlots() {
		return slots;
	}


	public void setSlots(Slots slots) {
		this.slots = slots;
	}



	public Ambulance getAmbulance() {
		return ambulance;
	}


	public void setAmbulance(Ambulance ambulance) {
		this.ambulance = ambulance;
	}


	public int getAmbulanceBookingId() {
		return ambulanceBookingId;
	}


	public void setAmbulanceBookingId(int ambulanceBookingId) {
		this.ambulanceBookingId = ambulanceBookingId;
	}



	


	public Patient getPatient() {
		return patient;
	}


	public void setPatient(Patient patient) {
		this.patient = patient;
	}


	public boolean isAmbulanceStatus() {
		return ambulanceStatus;
	}


	public void setAmbulanceStatus(boolean ambulanceStatus) {
		this.ambulanceStatus = ambulanceStatus;
	}


	public AmbulanceBooking() {
		super();
	}

	

	public AmbulanceBooking(int amulanceBookingId, Ambulance ambulance,  String ambulanceBookingDate, Patient patient,
			boolean ambulanceStatus) {
		super();
		this.ambulanceBookingId = amulanceBookingId;
		this.ambulance = ambulance;
		this.ambulanceBookingDate = ambulanceBookingDate;
		this.patient = patient;
		this.ambulanceStatus = ambulanceStatus;
	}


	@Override
	public String toString() {
		return "AmbulanceBooking [ambulanceBookingId=" + ambulanceBookingId + ", ambulance=" + ambulance + ", patient="
				+ patient + ", ambulanceStatus=" + ambulanceStatus + ", slots=" + slots + "]";
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((ambulance == null) ? 0 : ambulance.hashCode());
		result = prime * result + ambulanceBookingId;
		result = prime * result + (ambulanceStatus ? 1231 : 1237);
		result = prime * result + ((patient == null) ? 0 : patient.hashCode());
		result = prime * result + ((slots == null) ? 0 : slots.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		AmbulanceBooking other = (AmbulanceBooking) obj;
		if (ambulance == null) {
			if (other.ambulance != null)
				return false;
		} else if (!ambulance.equals(other.ambulance))
			return false;
		if (ambulanceBookingId != other.ambulanceBookingId)
			return false;
		if (ambulanceStatus != other.ambulanceStatus)
			return false;
		if (patient == null) {
			if (other.patient != null)
				return false;
		} else if (!patient.equals(other.patient))
			return false;
		if (slots != other.slots)
			return false;
		return true;
	}


}






/*AmbulanceBooking ambulanceBooking=new AmbulanceBooking();
return ambulanceBooking.eq*/
