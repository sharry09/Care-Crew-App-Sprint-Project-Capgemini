package com.healthassist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Medicine;

@Repository
public interface MedicalStoreDao extends JpaRepository<MedicalStore, Integer>
{
	@Query(value = "Select m from Medicine m")
  	 public  Medicine save(Medicine medicine);

@Query(value="Select m.medicineId From Medicine m")
    public List<Medicine> findMedicineById(int medicineId);

@Query(value="Select m.medicalStoreId From MedicalStore m")
    public List<MedicalStore> findMedicalStoreById(int medicalId);


	public default String placeOrders(int medicalStoreId, String medicineName) {
		String str="";
		if(medicalStoreId !=0) {
			if(medicineName.equals("DOLO") || medicineName.equals("Acyclovir") || medicineName.equals("Amikacin") || medicineName.equals("Amoxicillin") 
					 || medicineName.equals("Calcium") || medicineName.equals("Dapsone") || medicineName.equals("Enalapril")) {
				str="Order placed Successfully";
			}
			else {
				str="Medicine unavailable";
			}
		}
		else {
			str="Medical Store  ID invalid";
		}
		return str;
	}
			
		
	}


