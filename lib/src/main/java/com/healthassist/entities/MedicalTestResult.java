package com.healthassist.entities;

/*{
    "medicalTestResultId" : 1,
    "medicalTestResultName": "Blood Test",
    "patientName" : "Anand"
    "testCondition" : "Normal"
    "testPerformedBy" : "Dr. RajKumar"

}*/

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope(scopeName="prototype")
@Table(name="MEDICALTESTRESULTS")
public class MedicalTestResult {
	
	 @Id
	 @Column(name = "MEDICALTESTRESULT_ID")
	// @GeneratedValue(strategy=GenerationType.IDENTITY)
	 private Integer medicalTestResultId;
	 @Column(name="MEDICALTEST_NAME",nullable = false,length = 50)
	 private String medicalTestName;
	 @Column(name = "PATIENT_NAME",nullable = false,length = 50)
	 private String patientName;
	 @Column(name = "TESTCONDITION",nullable = false,length = 50)
	 private String testCondition;
	 @Column(name = "TESTPERFORMEDBY",nullable = false,length = 50)
	 private String testPerformedBy;
	
	 
	 

	public Integer getMedicalTestResultId() {
		return medicalTestResultId;
	}
	public void setMedicalTestResultId(Integer medicalTestResultId) {
		this.medicalTestResultId = medicalTestResultId;
	}
	public String getMedicalTestName() {
		return medicalTestName;
	}
	public void setMedicalTestName(String medicalTestName) {
		this.medicalTestName = medicalTestName;
	}
	public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getTestCondition() {
		return testCondition;
	}
	public void setTestCondition(String testCondition) {
		this.testCondition = testCondition;
	}
	public String getTestPerformedBy() {
		return testPerformedBy;
	}
	public void setTestPerformedBy(String testPerformedBy) {
		this.testPerformedBy = testPerformedBy;
	}
	
	public MedicalTestResult() {
		super();
	}
	public MedicalTestResult(Integer medicalTestResultId, String medicalTestName, String patientName,
			String testCondition, String testPerformedBy) {
		super();
		this.medicalTestResultId = medicalTestResultId;
		this.medicalTestName = medicalTestName;
		this.patientName = patientName;
		this.testCondition = testCondition;
		this.testPerformedBy = testPerformedBy;
	}
	@Override
	public String toString() {
		return "MedicalTestResult [medicalTestResultId=" + medicalTestResultId + ", medicalTestName=" + medicalTestName
				+ ", patientName=" + patientName + ", testCondition=" + testCondition + ", testPerformedBy="
				+ testPerformedBy + "]";
	}
	

}