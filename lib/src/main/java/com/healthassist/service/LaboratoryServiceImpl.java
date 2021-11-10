package com.healthassist.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.DoctorDao;
import com.healthassist.dao.LaboratoryDao;
import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Laboratory;

@Service
public class LaboratoryServiceImpl implements LaboratoryService
{
	 @Autowired
		private LaboratoryDao dao=null;
	 @Autowired
		private DoctorDao dao1=null;
	 

	@Override
	public void addLaboratoryInfo(Laboratory laboratory) {
		dao.save(laboratory);
		
	}

	@Override
	public List<Laboratory> findLaboratory() {
		
		return dao.findAll();
	}

	@Override
	public Doctor addDoctor(Doctor doctor) {
	     return dao1.save(doctor);
	}

	//@Override
	//public List<Doctor> getDoctor(Doctor doctor) {
		//return dao1.findAll();
	//}

	@Override
	public Optional<Doctor> updateDoctor(int doctorId) {
		return dao1.findById(doctorId);
	}

	@Override
	public void deleteDoctor(int doctorId) {
		 dao1.deleteById(doctorId);
	}

	@Override
	public List<Doctor> viewAllDoctors(String doctorName) {
		return dao1.findAll();
	}
	@Override
	public List<DoctorSpeciality> viewDoctoryByCategory(String doctorSpeciality) {
		return dao.findByCategory(doctorSpeciality);
	}
	
	
}