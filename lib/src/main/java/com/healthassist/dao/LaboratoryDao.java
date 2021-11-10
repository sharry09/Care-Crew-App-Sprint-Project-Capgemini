package com.healthassist.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.Doctor;
import com.healthassist.entities.DoctorSpeciality;
import com.healthassist.entities.Laboratory;
import com.healthassist.entities.MedicalTestTypes;

@Repository
public interface LaboratoryDao extends JpaRepository<Laboratory, Integer>
{
	@Query(value = "Select m.medicalTestTypes from Laboratory m" )
	public MedicalTestTypes saveAll(MedicalTestTypes medicalTestTypes);

    @Query(value= "Select a.doctorSpeciality from Doctor a")
	public Optional<Doctor> findBySpeciality(String doctorSpeciality);
    
    @Query(value= "Select a.doctorSpeciality from Doctor a")
	public List<DoctorSpeciality> findByCategory(String doctorSpeciality);
}
