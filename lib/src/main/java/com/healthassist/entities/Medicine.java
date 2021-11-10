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

@Component
@Entity
@Scope(scopeName = "prototype")
@Table(name = "MEDICINES")
public class Medicine 
{
	@Id
	@Column(name = "MEDICINE_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int medicineId;
	
	@Column(name = "MEDICINE_NAME",nullable = false)
	@NotBlank(message="medicine name cannot be blank")
	private String medicineName;
	
	/*
	//@ManyToOne
	//@JoinColumn(name="MEDICINE_STORE_ID")
    @OneToMany(mappedBy = "medicine",cascade = CascadeType.ALL)
	private List<MedicalStore> medicalStore;
	*/
	@ManyToOne
	@JoinColumn(name="MEDICAL_STORE_ID")
	private MedicalStore medicalStore;
	
	
	public int getMedicineId() {
		return medicineId;
	}
	public void setMedicineId(int medicineId) {
		this.medicineId = medicineId;
	}
	public String getMedicineName() {
		return medicineName;
	}
	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}
	
	public MedicalStore getMedicalStore() {
		return medicalStore;
	}
	public void setMedicalStore(MedicalStore medicalStore) {
		this.medicalStore = medicalStore;
	}
	
	public Medicine()
	{
		super();
	}
	
	public Medicine(int medicineId, String medicineName, MedicalStore medicalStore) {
		super();
		this.medicineId = medicineId;
		this.medicineName = medicineName;
		this.medicalStore = medicalStore;
	}
	@Override
	public String toString() {
		return "Medicine [medicineId=" + medicineId + ", medicineName=" + medicineName + ", medicalStore="
				+ medicalStore + "]";
	}
	
	
}
