package com.healthassist.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.healthassist.dao.MedicalStoreDao;
import com.healthassist.dao.MedicineDao;
import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Medicine;
import com.healthassist.exception.NoMedicineFoundException;


@Service
@Scope(scopeName="singleton")
public class MedicalStoreServiceImpl implements MedicalStoreService
{
	 @Autowired
		private MedicalStoreDao medicalStoreDao=null;
	 
	 @Autowired
		private MedicineDao medicineDao=null;

	@Override
	public Medicine addMedicine(Medicine medicine)
	{
		 return medicineDao.save(medicine);
		
	}
	
	@Override
	public String removeMedicine(int medicineId)
	{
		 medicineDao.deleteById(medicineId);
		return "Medicine with medicineId "+medicineId+" is deleted succesfully";
	}
	
	@Override
	public Optional<Medicine> findMedicineById(int medicineId) throws NoMedicineFoundException
	{
		if(medicineDao.existsById(medicineId))
		{
		return medicineDao.findById(medicineId);
	    }
	//	return null;
		throw new NoMedicineFoundException("Medicine Id "+medicineId+" is not correct !  provide relevant Medicine Id");
		
	}
	
	@Override
	public Optional<MedicalStore> findMedicalStoreDetails(int medicalStoreId) throws NoMedicineFoundException
	{
		if(medicalStoreDao.existsById(medicalStoreId))
		{
		return medicalStoreDao.findById(medicalStoreId);
	    }
		throw new NoMedicineFoundException("Please enter correct MedicalStore ID: ");
	}
	
	@Override
	public Medicine updateMedicineById(int medicineId,String medicineName) throws NoMedicineFoundException
	{
		Medicine med=medicineDao.findById(medicineId).get();
		if(medicineDao.existsById(medicineId))
		{
			med.setMedicineName(medicineName);
			return medicineDao.save(med);
		}
		throw new NoMedicineFoundException("No such Medicine ID is found");
	}
	
	 
}