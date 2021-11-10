package com.healthassist.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Hospital;
import com.healthassist.entities.TreatmentHistory;

@Repository
public interface HospitalDao extends JpaRepository<Hospital, Integer>
{
	@Query(value= "Select h.noOfBeds from Hospital h")
	public Integer findNumberOfBeds();
	//@Query(value= "select t from MedicalTestTypes t")
	//public MedicalTestTypes save(MedicalTestTypes medicalTestTypes);

    @Query(value= "Select a.doctorSpeciality from Doctor a")
	public List<DoctorSpeciality> findBySpeciality(String doctorSpeciality);

    @Query(value= "Select t from TreatmentHistory t")
	public TreatmentHistory save(TreatmentHistory treatmentHistory);
    
    @Query(value = "Select d from Doctor d")
	public  Doctor save(Doctor doctor);
}
