package com.healthassist.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.healthassist.dao.DoctorDao;
import com.healthassist.dao.HospitalDao;
import com.healthassist.dao.PatientDao;
import com.healthassist.entities.Doctor;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoDoctorDataFoundException;



@Service
@Scope(scopeName="singleton")
public class DoctorServiceImpl implements DoctorService
{
	
	@Autowired
	private DoctorDao doctorDao=null; 
	
	@Autowired
	private PatientDao patientDao=null;
	
	@Autowired
	private HospitalDao hospitalDao=null; 

	@Override
	@Transactional
	public Doctor registerDoctorInfo(Doctor doctor) 
	{
		return doctorDao.save(doctor);
		
	}
	
	@Override
	public Optional<Doctor> findDoctorById(int doctorId) throws  NoDoctorDataFoundException
	{
		if(doctorDao.existsById(doctorId))
		{
		return doctorDao.findById(doctorId);
      	}
	throw new  NoDoctorDataFoundException("Doctor with "+doctorId+"  Id is not found");
	}
	
	

	@Override
	public List<Doctor> findDoctorDetails() 
	{
		return doctorDao.findAll();
		
	}
	
	@Override
	public Optional<Patient> findPatientsMedicalHistoryById(int patientId) throws NoDoctorDataFoundException
	{
		if(patientDao.existsById(patientId))
		{
		return patientDao.findById(patientId);
		}
		throw new  NoDoctorDataFoundException("Patient with patient Id "+patientId+" does not exist !");
		
	}
	
	@Override
	public Optional<Hospital> findHospitalById(int hospitalId) throws  NoDoctorDataFoundException
	{
      if(hospitalDao.existsById(hospitalId))
      {
		return hospitalDao.findById(hospitalId);
	  }
	throw new  NoDoctorDataFoundException(hospitalId+" hospital ID does not exist in Life Line Application");
	}

	@Override
	public Patient addPatient(Patient patient)
	{
		return patientDao.save(patient);
	}
	
	@Override
	public Doctor updateDoctorById(int doctorId, String contactNumber) throws NoDoctorDataFoundException {
		Doctor doc = doctorDao.findById(doctorId).get();
		if(doctorDao.existsById(doctorId)){
			doc.setContactNumber(contactNumber);
						return doctorDao.save(doc);
			}
			throw new NoDoctorDataFoundException("No Doctor found");
			
	}
	@Override
	public String deleteDoctor(int doctorId) throws NoDoctorDataFoundException {
		if(doctorDao.existsById(doctorId)) {
			 doctorDao.deleteById(doctorId);
			 return "Doctor with ID "+ doctorId+ " is deleted successfully from Life Line Application";
		}
		throw new NoDoctorDataFoundException("No Doctor found");
	}
	@Override
	public List<Doctor> viewAllDoctorsinLaboratory( String doctorName) {
		return doctorDao.findAll();
			
	}
	
	
	
	
}