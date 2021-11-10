package com.healthassist.entities;


import java.util.List;

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

@Component
@Entity
@Scope(scopeName = "prototype")
@Table(name = "LABORATORIES")
public class Laboratory 
{
	@Id
	@Column(name="LABORATORY_ID")
	@GeneratedValue(strategy =GenerationType.IDENTITY)
	private int laboratoryId;
	@Column(name="LABORATORY_NAME",nullable = false,length = 50)
	private String laboratoryName;

	@Column(name="MEDICAL_TEST_TYPES",nullable = false,length = 30)
	private MedicalTestTypes medicalTestTypes;
	@Column(name="MEDICAL_TEST_REPORT",nullable = false)
    private String medicalTestReport;
	
	@OneToOne(mappedBy = "laboratory", cascade = CascadeType.ALL)
	private Hospital hospital;
	@OneToOne(mappedBy = "laboratory", cascade = CascadeType.ALL)
	private Patient patient;
	
	public int getLaboratoryId() {
		return laboratoryId;
	}
	public void setLaboratoryId(int laboratoryId) {
		this.laboratoryId = laboratoryId;
	}
	public String getLaboratoryName() {
		return laboratoryName;
	}
	public void setLaboratoryName(String laboratoryName) {
		this.laboratoryName = laboratoryName;
	}
	
	public MedicalTestTypes getMedicalTestTypes() {
		return medicalTestTypes;
	}
	public void setMedicalTestTypes(MedicalTestTypes medicalTestTypes) {
		this.medicalTestTypes = medicalTestTypes;
	}
	public String getMedicalTestReport() {
		return medicalTestReport;
	}
	public void setMedicalTestReport(String medicalTestReport) {
		this.medicalTestReport = medicalTestReport;
	}
	
	
	
	public Laboratory(int laboratoryId, String laboratoryName, MedicalTestTypes medicalTestTypes, String medicalTestReport,
			List<Patient> patient, Hospital hospital, List<Doctor> doctor) {
		super();
		this.laboratoryId = laboratoryId;
		this.laboratoryName = laboratoryName;
		this.medicalTestTypes = medicalTestTypes;
		this.medicalTestReport = medicalTestReport;
	}
	public Laboratory() {
		super();
	}
	
	
	
	
    
}