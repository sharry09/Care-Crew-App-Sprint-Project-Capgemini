package com.healthassist.service;

import java.util.Optional;

import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Medicine;
import com.healthassist.exception.NoMedicineFoundException;

public interface MedicalStoreService {

	 public Medicine addMedicine(Medicine medicine);
	 public String removeMedicine(int medicineId);
	 public Medicine updateMedicineById(int medicineId,String medicineName) throws NoMedicineFoundException;
	 public Optional<Medicine> findMedicineById(int medicineId) throws  NoMedicineFoundException;
	 public Optional<MedicalStore> findMedicalStoreDetails(int medicalStoreId) throws  NoMedicineFoundException;

}