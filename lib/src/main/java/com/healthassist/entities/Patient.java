package com.healthassist.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="PATIENTS")
public class Patient 
{
	@Id
	@Column(name = "PATIENT_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int patientId;
	@Column(name = "PATIENT_NAME", nullable = false, length = 50)
	//@NotBlank
	private String patientName;
	@Column(name = "PATIENT_AGE", nullable = false)
	private int patientAge;
	@Column(name = "PATIENT_GENDER", nullable = false, length = 10)
	private String patientGender;
	@Column(name = "PATIENT_CONTACT_NUMBER", nullable = false, length = 10)
	private String patientContactNumber;
	@Column(name = "DATE_OF_CONSULTATION")
	private String dateOfConsultation;
	@Column(name = "BLOOD_GROUP", nullable = false, length = 15)
	private String bloodGroup;
	@Column(name = "PATIENT_ADDRESS")
	private String patientAddress;
	@Column(name = "DISEASE",  length = 100)
	private String disease;


	@ManyToOne
	@JoinColumn(name="HOSPITAL_ID")
	private Hospital hospital;



	@OneToMany(mappedBy = "patient",cascade = CascadeType.ALL)
	 private List<Doctor> doctor;

	@OneToOne(mappedBy = "patient")
 	private AmbulanceBooking ambulanceBooking;
	
	@ManyToOne
	@JoinColumn(name="MEDICAL_STORE_ID")
	private MedicalStore medicalStore;

	 @OneToOne
	 @JoinColumn(name = "LABORATORY_ID")
	  private Laboratory laboratory;
	 
	public Patient() {
		super();

	}

	public int getPatientId() {
		return patientId;
	}



	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}



	public String getPatientName() {
		return patientName;
	}



	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}



	public int getPatientAge() {
		return patientAge;
	}



	public void setPatientAge(int patientAge) {
		this.patientAge = patientAge;
	}



	public String getPatientGender() {
		return patientGender;
	}



	public void setPatientGender(String patientGender) {
		this.patientGender = patientGender;
	}



	public String getPatientContactNumber() {
		return patientContactNumber;
	}



	public void setPatientContactNumber(String patientContactNumber) {
		this.patientContactNumber = patientContactNumber;
	}



	public String getDateOfConsultation() {
		return dateOfConsultation;
	}



	public void setDateOfConsultation(String dateOfConsultation) {
		this.dateOfConsultation = dateOfConsultation;
	}



	public String getBloodGroup() {
		return bloodGroup;
	}



	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}



	public String getPatientAddress() {
		return patientAddress;
	}



	public void setPatientAddress(String patientAddress) {
		this.patientAddress = patientAddress;
	}



	public String getDisease() {
		return disease;
	}



	public void setDisease(String disease) {
		this.disease = disease;
	}



	public Hospital getHospital() {
		return hospital;
	}



	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}



	



	public MedicalStore getMedicalStore() {
		return medicalStore;
	}

	public void setMedicalStore(MedicalStore medicalStore) {
		this.medicalStore = medicalStore;
	}



	

	@Override
	public String toString() {
		return "Patient [patientId=" + patientId + ", patientName=" + patientName + ", patientAge=" + patientAge
				+ ", patientGender=" + patientGender + ", patientContactNumber=" + patientContactNumber
				+ ", dateOfConsultation=" + dateOfConsultation + ", bloodGroup=" + bloodGroup + ", patientAddress="
				+ patientAddress + ", disease=" + disease + ", hospital=" + hospital + ", doctor=" + doctor
				+ ", medicalStore=" + medicalStore + "]";
	}

	public void setDoctor(List<Doctor> doctor) {
		this.doctor = doctor;
	}

	public Patient(int patientId, String patientName, int patientAge, String patientGender, String patientContactNumber,
			String dateOfConsultation, String bloodGroup, String patientAddress, String disease, Hospital hospital,
			List<Doctor> doctor, MedicalStore medicalStore) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.patientAge = patientAge;
		this.patientGender = patientGender;
		this.patientContactNumber = patientContactNumber;
		this.dateOfConsultation = dateOfConsultation;
		this.bloodGroup = bloodGroup;
		this.patientAddress = patientAddress;
		this.disease = disease;
		this.hospital = hospital;
		this.doctor = doctor;
		this.medicalStore = medicalStore;
	}


	//INSERT INTO DOCTORS(doctor_id,contact_number,doctor_name,doctor_shift_time,doctor_speciality,prescription,hospital_id)
	//values(4,1234567890,'Raj',2,3,'Exercise',1)


}
