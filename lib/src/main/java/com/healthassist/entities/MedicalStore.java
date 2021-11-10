package com.healthassist.entities;


import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Component("medicalStore")
@Entity
@Scope(scopeName = "prototype")
@Table(name = "MEDICAL_STORES")
public class MedicalStore {
	@Id
	@Column(name = "MEDICAL_STORE_ID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int medicalStoreId;
	
	@Column(name = "MEDICAL_STORE_NAME",nullable = false,length = 50)
	@NotBlank
	private String medicalStoreName;
	
	/*
	@Column(name = "MEDICINE_NAME",nullable = false,length = 50)
	private Medicine medicineName;
		
	@OneToMany(mappedBy = "medicalStore", cascade = CascadeType.ALL)
	@Column(name="MEDICAL_ORDERS_NAME")
	private List<MedicalOrders> medicalOrders ;
	
	@Temporal(TemporalType.DATE)
	@Column(name = "ORDER_DATE")
	private Date orderDate;
	
	
	@OneToMany(mappedBy = "medicalStore", cascade = CascadeType.ALL)
	@JsonIgnore
	@Column(name="PATIENT_NAME")
	private List<Patient> patient;

	@OneToOne
	@JoinColumn(name="MEDICAL_STORE_ID")
	private Hospital hospital;
	
	*/
	/*
	@OneToMany(mappedBy = "medicalStore",cascade =CascadeType.ALL)
	//@JsonIgnore
	private List<Medicine>  medicine;
	*/
	/*
	@ManyToOne
	@JoinColumn(name = "MEDICINE_ID")
	private Medicine medicine;
	*/
	
	@OneToMany(mappedBy = "medicalStore",cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Medicine> medicine;
	
	public int getMedicalStoreId() {
		return medicalStoreId;
	}
	public void setMedicalStoreId(int medicalStoreId) {
		this.medicalStoreId = medicalStoreId;
	}
	public String getMedicalStoreName() {
		return medicalStoreName;
	}
	public void setMedicalStoreName(String medicalStoreName) {
		this.medicalStoreName = medicalStoreName;
	}
	/*
	public Medicine getMedicineName() {
		return medicineName;
	}
	
	public void setMedicineName(Medicine medicineName) {
		this.medicineName = medicineName;
	}
	*/
	
	public List<Medicine> getMedicine() {
		return medicine;
	}
	public void setMedicine(List<Medicine> medicine) {
		this.medicine = medicine;
	}
	
	public MedicalStore() {
		super();
	}
	
	public MedicalStore(int medicalStoreId, String medicalStoreName, List<Medicine> medicine) {
		super();
		this.medicalStoreId = medicalStoreId;
		this.medicalStoreName = medicalStoreName;
		this.medicine = medicine;
	}
	@Override
	public String toString() {
		return "MedicalStore [medicalStoreId=" + medicalStoreId + ", medicalStoreName=" + medicalStoreName
				+ ", medicine=" + medicine + "]";
	}
	
		
}