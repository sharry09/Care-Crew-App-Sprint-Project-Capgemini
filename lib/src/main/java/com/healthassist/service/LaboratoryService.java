package com.healthassist.service;

import java.util.List;
import java.util.Optional;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Laboratory;

public interface LaboratoryService {
	public void addLaboratoryInfo(Laboratory laboratory);
	 public List<Laboratory> findLaboratory();
	 public List<Doctor> viewAllDoctors(String doctorName);
	 public Doctor addDoctor(Doctor doctor);
	// public List<Doctor> getDoctor(Doctor doctor);
	 public Optional<Doctor> updateDoctor(int doctorId);
	 public void deleteDoctor(int doctorId);
	 public List<DoctorSpeciality> viewDoctoryByCategory(String doctorSpeciality);
}