package com.healthassist.service;

import java.util.List;

import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoMedicalStoreFoundException;
import com.healthassist.exception.NoSuchPatientException;

public interface PatientService 
{
	 public Patient registerPatientInfo(Patient patient);
	 public List<Patient> findPatient();
	 public Patient viewPatientById(int patientId) throws NoSuchPatientException;
	 public MedicalStore searchMedicalStore(int medicalStoreId)throws NoMedicalStoreFoundException;
	 public String placeOrders(int medicalStoreId,String medicineName);
	 public String viewTreatmentPackages();
	
	
	 
	 
}
