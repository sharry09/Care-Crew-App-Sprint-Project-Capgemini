package com.healthassist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.DoctorDao;
import com.healthassist.dao.HospitalDao;
import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.TreatmentHistory;
import com.healthassist.exception.NoBedsFoundException;


@Service
public class HospitalServiceImpl implements HospitalService
{
	 @Autowired
		private HospitalDao dao=null;
	 
	 @Autowired
	 private DoctorDao dao1=null;
	 
	 

	@Override
	public void addHospitalInfo(Hospital hospital) {
		
		dao.save(hospital);
	}

	@Override
	public List<Hospital> findHospital() {
		
		return dao.findAll();
	}

	@Override
	public Doctor addDoctor(Doctor doctor) {
	     return dao1.save(doctor);
	}

	@Override
	public List<Doctor> getDoctor(Doctor doctor) {
		return dao1.findAll();
	}

	@Override
	public Optional<Hospital> updateDoctor(int doctorId) {
		return dao.findById(doctorId);
	}

	@Override
	public void deleteDoctor(int doctorId) {
		 dao1.deleteById(doctorId);
	}
	

	@Override
	public Integer viewNoOfBeds() {
		return dao.findNumberOfBeds();
		
	}

	@Override
	public Hospital modifyNoOfBeds(int noOfBeds, int hospitalId) throws NoBedsFoundException {
		Hospital hospital = dao.findById(hospitalId).get();
		if(dao.existsById(hospitalId)) {
			hospital.setNoOfBeds(noOfBeds);
			return dao.save(hospital);
		}
		throw new NoBedsFoundException("No beds");
		
	}

	

	@Override
	public List<DoctorSpeciality> viewDoctoryBySpeciality(String doctorSpeciality) {
		return dao.findBySpeciality(doctorSpeciality);
	}

	@Override
	public void addTreatmentHistory(TreatmentHistory treatmentHistory) {
		 dao.save(treatmentHistory);
		
	}

	@Override
	public TreatmentHistory updateTraetmentHistory(TreatmentHistory treatmenthistory) {
		return dao.save(treatmenthistory);
	}

	

	

	
		
	}