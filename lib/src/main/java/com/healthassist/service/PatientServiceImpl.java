package com.healthassist.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.MedicalStoreDao;
import com.healthassist.dao.PatientDao;
import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoMedicalStoreFoundException;
import com.healthassist.exception.NoSuchPatientException;

@Service
@Transactional
public class PatientServiceImpl implements PatientService
{

	@Autowired
	private PatientDao patientDao=null;

	@Autowired
	private MedicalStoreDao medicalStoreDao=null; 

	@Override
	public Patient registerPatientInfo(Patient patient) {
		return patientDao.save(patient);

	}

	@Override
	public List<Patient> findPatient() {
		return patientDao.findAll();
	}

	@Override
	public Patient viewPatientById(int patientId) throws NoSuchPatientException {
		if(patientDao.existsById(patientId)) {
			return patientDao.findById(patientId).get();
		}
		throw new NoSuchPatientException(patientId+" Not found in our Database");
	}



	@Override
	public MedicalStore searchMedicalStore(int medicalStoreId)throws NoMedicalStoreFoundException {
		if(medicalStoreDao.existsById(medicalStoreId)) {
			return medicalStoreDao.findById(medicalStoreId).get();
		}
		throw new NoMedicalStoreFoundException  ("No Medical Store with ID "+medicalStoreId+" is found");


	}

	@Override
	public String placeOrders(int medicalStoreId, String medicineName) {

		return medicalStoreDao.placeOrders(medicalStoreId,medicineName);
	}

	@Override
	public String viewTreatmentPackages() {	
		
		
		return patientDao.findPackages();
		
	}
}





