package com.healthassist.service;

import java.util.List;
import java.util.Optional;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.TreatmentHistory;
import com.healthassist.exception.NoBedsFoundException;


public interface HospitalService {
	 public void addHospitalInfo(Hospital hospital);
	 public List<Hospital> findHospital();
	 public Doctor addDoctor(Doctor doctor);
	 public List<Doctor> getDoctor(Doctor doctor);
	 public Optional<Hospital> updateDoctor(int doctorId);
	 public void deleteDoctor(int doctorId);
	 public Integer viewNoOfBeds();
	 public Hospital modifyNoOfBeds(int noOfBeds, int hospitalId)  throws NoBedsFoundException;
	 public List<DoctorSpeciality> viewDoctoryBySpeciality(String doctorSpeciality);
	 public void addTreatmentHistory(TreatmentHistory treatmentHistory);
	 public TreatmentHistory updateTraetmentHistory(TreatmentHistory treatmenthistory);
	 
}