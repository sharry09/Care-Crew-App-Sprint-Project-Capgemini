package com.healthassist.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;


@Component
@Entity
@Scope(scopeName = "prototype")
@Table(name = "AMBULANCES")
public class Ambulance {
	
	@Id
	@NotNull
	@Column(name="AMBULANCE_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int ambulanceId;
	
	@Column(name="AMBULANCE_CONTACT_NUMBER",nullable = false,length = 10)
	private long ambulanceContactNumber;
	
	
	
	
/*	@OneToOne(mappedBy = "ambulance", cascade = CascadeType.ALL)
	private Patient patient;
	*/
	/*@OneToOne
	@JoinColumn(name="AMBULANCE_ID")
	private Hospital hospital;
*/
	
	@OneToOne(mappedBy="ambulance", cascade = CascadeType.MERGE)
	@JsonIgnore
	private AmbulanceBooking ambulanceBooking;

	public int getAmbulanceId() {
		return ambulanceId;
	}

	public void setAmbulanceId(int ambulanceId) {
		this.ambulanceId = ambulanceId;
	}

	public long getAmbulanceContactNumber() {
		return ambulanceContactNumber;
	}

	public void setAmbulanceContactNumber(long ambulanceContactNumber) {
		this.ambulanceContactNumber = ambulanceContactNumber;
	}

	


	public AmbulanceBooking getAmbulanceBooking() {
		return ambulanceBooking;
	}

	public void setAmbulanceBooking(AmbulanceBooking ambulanceBooking) {
		this.ambulanceBooking = ambulanceBooking;
	}

	public Ambulance() {
		super();
	}

	public Ambulance(int ambulanceId,long ambulanceContactNumber, 
			AmbulanceBooking ambulanceBooking) {
		super();
		this.ambulanceId = ambulanceId;
		this.ambulanceContactNumber = ambulanceContactNumber;
		//this.ambulanceStatus = ambulanceStatus;
		this.ambulanceBooking = ambulanceBooking;
	}

	@Override
	public String toString() {
		return "Ambulance [ambulanceId=" + ambulanceId + ", ambulanceContactNumber=" + ambulanceContactNumber
				+ ", ambulanceBooking=" + ambulanceBooking + "]";
	}
	
}