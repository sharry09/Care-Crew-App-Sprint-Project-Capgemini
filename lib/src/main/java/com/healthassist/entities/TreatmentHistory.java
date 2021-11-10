package com.healthassist.entities;

/*{    
    "patientId" : 1,
    "patientName":"Roja",
    "patientAge":30,
    "patientGender":"Female",
    "treatedBy": "Dr.Raj",
    "disease":"Fever",
    "prescriptedMedicine":"Delhi"
}*/

import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Entity
@Scope(scopeName = "prototype")
@Table(name = "TREATMENT_HISTORY")
public class TreatmentHistory {
	
	 @Id
	  @Column(name="PATIENT_ID")
	  private int patientId;
	  @Column(name="PATIENT_NAME",nullable = false,length = 50)
	  private String patientName;
	  @Column(name="PATIENT_GENDER",nullable = false,length = 10)
	  private String patientGender;
	  @Column(name = "TREATEDBY", nullable = false, length = 40)
	  private String treatedBy;
	  @Column(name="DISEASE",nullable = false,length = 100)
	  private String disease;
	  @Column(name ="PRESCRIPTED_MEDICINE", length = 50)
	  private String prescriptedMedicine;
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
	public String getPatientGender() {
		return patientGender;
	}
	public void setPatientGender(String patientGender) {
		this.patientGender = patientGender;
	}
	public String getTreatedBy() {
		return treatedBy;
	}
	public void setTreatedBy(String treatedBy) {
		this.treatedBy = treatedBy;
	}
	public String getDisease() {
		return disease;
	}
	public void setDisease(String disease) {
		this.disease = disease;
	}
	public String getPrescriptedMedicine() {
		return prescriptedMedicine;
	}
	public void setPrescriptedMedicine(String prescriptedMedicine) {
		this.prescriptedMedicine = prescriptedMedicine;
	}
	public TreatmentHistory(int patientId, String patientName, String patientGender, String treatedBy, String disease,
			String prescriptedMedicine) {
		super();
		this.patientId = patientId;
		this.patientName = patientName;
		this.patientGender = patientGender;
		this.treatedBy = treatedBy;
		this.disease = disease;
		this.prescriptedMedicine = prescriptedMedicine;
	}
	public TreatmentHistory() {
		super();
	}
	@Override
	public String toString() {
		return "TreatmentHistory [patientId=" + patientId + ", patientName=" + patientName + ", patientGender="
				+ patientGender + ", treatedBy=" + treatedBy + ", disease=" + disease + ", prescriptedMedicine="
				+ prescriptedMedicine + "]";
	}
	  
	
	  
	  

}