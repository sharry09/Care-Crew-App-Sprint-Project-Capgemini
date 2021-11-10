package com.healthassist.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

/*
{
 "doctorName":"Dr.Sameer",
"contactNumber":30,
"doctorSpeciality":"Female",
"doctorShiftTime":9988776655,
"prescription":"A+ve",
"patientAddress":"Delhi",
"hospital":{
				"hospitalId":1
}

}*/

@Component("doctor")
@Entity
@Scope(scopeName="prototype")
@Table(name="DOCTORS")
public class Doctor 
{
	@Id
	@Column(name="DOCTOR_ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
    private int doctorId;
	
   @Column(name="DOCTOR_NAME",nullable = false,length = 50)
   @NotBlank(message="Doctor's Name is mandatory")
   private String doctorName;
   
   @Column(name="CONTACT_NUMBER",nullable = false,length = 10)
   private String contactNumber;
   
	@Column(name="DOCTOR_SPECIALITY",nullable = false,length = 50)
   private DoctorSpeciality doctorSpeciality;
	
	@Column(name="DOCTOR_SHIFT_TIME")
   private DoctorShiftTime doctorShiftTime;
	
	@Column(name="PRESCRIPTION",nullable = false)
   private String prescription;
	
	
	@ManyToOne 
	@JoinColumn(name="PATIENT_ID")
	//@JsonIgnore
	private Patient patient;
	
	@ManyToOne
	@JoinColumn(name="HOSPITAL_ID")
	private Hospital hospital;

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getDoctorName() {
		return doctorName;
	}

	public void setDoctorName(String doctorName) {
		this.doctorName = doctorName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	public DoctorSpeciality getDoctorSpeciality() {
		return doctorSpeciality;
	}

	public void setDoctorSpeciality(DoctorSpeciality doctorSpeciality) {
		this.doctorSpeciality = doctorSpeciality;
	}

	
	public DoctorShiftTime getDoctorShiftTime() {
		return doctorShiftTime;
	}

	public void setDoctorShiftTime(DoctorShiftTime doctorShiftTime) {
		this.doctorShiftTime = doctorShiftTime;
	}

	public String getPrescription() {
		return prescription;
	}

	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}
/*
	public List<Patient> getPatient() {
		return patient;
	}

	public void setPatient(List<Patient> patient) {
		this.patient = patient;
	}
*/
	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor() 
	{
		super();
	}
/*
	public Doctor(int doctorId, String doctorName, long contactNumber, DoctorSpeciality doctorSpeciality,
			DoctorShiftTime doctorShiftTime, String prescription, List<Patient> patient, Hospital hospital) {
		super();
		this.doctorId = doctorId;
		this.doctorName = doctorName;
		this.contactNumber = contactNumber;
		this.doctorSpeciality = doctorSpeciality;
		this.doctorShiftTime = doctorShiftTime;
		this.prescription = prescription;
		this.patient = patient;
		this.hospital = hospital;
	}
	*/
	

	@Override
	public String toString() {
		return "Doctor [doctorId=" + doctorId + ", doctorName=" + doctorName + ", contactNumber=" + contactNumber
				+ ", doctorSpeciality=" + doctorSpeciality + ", doctorShiftTime=" + doctorShiftTime + ", prescription="
				+ prescription + ", patient=" + patient + ", hospital=" + hospital + "]";
	}

	public Doctor(int doctorId, String doctorName, String contactNumber, DoctorSpeciality doctorSpeciality,
			DoctorShiftTime doctorShiftTime, String prescription, Patient patient, Hospital hospital) {
		super();
		this.doctorId = doctorId;
		this.doctorName = doctorName;
		this.contactNumber = contactNumber;
		this.doctorSpeciality = doctorSpeciality;
		this.doctorShiftTime = doctorShiftTime;
		this.prescription = prescription;
		this.patient = patient;
		this.hospital = hospital;
	}


}