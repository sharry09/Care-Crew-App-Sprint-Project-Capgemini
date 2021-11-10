package com.healthassist.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

/*
{
	 {
"hospitalId":1,
"hospitalName":"AVS",
"hospitalLocation": "Delhi",
"hospitalContact":9988776655,
"noOfBeds":25,
"treatmentPackages":1
} 
 
	}*/


@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="HOSPITALS")
public class Hospital 
{
	@Id
	@Column(name="HOSPITAL_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hospitalId;
	@Column(name="HOSPITAL_NAME",nullable = false,length = 50)
	private String hospitalName;
	@Column(name="HOSPITAL_LOCATION",nullable = false,length = 50)
	private String hospitalLocation;
	@Column(name="HOSPITAL_CONTACT",nullable = false,length = 10)
	private long hospitalContact;
	@Column(name="NO_OF_BEDS",nullable = false)
	private Integer noOfBeds;
	@Column(name="TREATMENT_PACKAGES",nullable = false,length = 50)
	private TreatmentPackages treatmentPackages;
	
	
	@OneToMany(mappedBy ="hospital", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Patient> patient;
	
	@OneToMany(mappedBy = "hospital",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Doctor> doctor;
	
	@OneToOne
	@JoinColumn(name = "LABORATORY_ID")
	private Laboratory laboratory;
	
	
	public int getHospitalId() {
		return hospitalId;
	}
	public void setHospitalId(int hospitalId) {
		this.hospitalId = hospitalId;
	}
	public String getHospitalName() {
		return hospitalName;
	}
	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}
	public String getHospitalLocation() {
		return hospitalLocation;
	}
	public void setHospitalLocation(String hospitalLocation) {
		this.hospitalLocation = hospitalLocation;
	}
	public long getHospitalContact() {
		return hospitalContact;
	}
	public void setHospitalContact(long hospitalContact) {
		this.hospitalContact = hospitalContact;
	}
	
	
	public Integer getNoOfBeds() {
		return noOfBeds;
	}
	public void setNoOfBeds(Integer noOfBeds) {
		this.noOfBeds = noOfBeds;
	}
	public List<Patient> getPatient() {
		return patient;
	}
	public void setPatient(List<Patient> patient) {
		this.patient = patient;
	}
	
	public TreatmentPackages getTreatmentPackages() {
		return treatmentPackages;
	}
	public void setTreatmentPackages(TreatmentPackages treatmentPackages) {
		this.treatmentPackages = treatmentPackages;
	}
	public List<Doctor> getDoctor() {
		return doctor;
	}
	public void setDoctor(List<Doctor> doctor) {
		this.doctor = doctor;
	}
	
	
	public Hospital(int hospitalId, String hospitalName, String hospitalLocation, long hospitalContact, int noOfBeds,
			TreatmentPackages treatmentPackages, List<Patient> patient, List<Doctor> doctor) {
		super();
		this.hospitalId = hospitalId;
		this.hospitalName = hospitalName;
		this.hospitalLocation = hospitalLocation;
		this.hospitalContact = hospitalContact;
		this.noOfBeds = noOfBeds;
		this.treatmentPackages = treatmentPackages;
		this.patient = patient;
		this.doctor = doctor;
	}
	public Hospital() {
		super();
	}
	@Override
	public String toString() {
		return "Hospital [hospitalId=" + hospitalId + ", hospitalName=" + hospitalName + ", hospitalLocation="
				+ hospitalLocation + ", hospitalContact=" + hospitalContact + ", noOfBeds=" + noOfBeds
				+ ", treatmentPackages=" + treatmentPackages + ", patient=" + patient + ", doctor=" + doctor + "]";
	}
	
	
	
	
	
	
	
	

}