package com.healthassist.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.Ambulance;

@Repository
public interface AmbulanceDao extends JpaRepository<Ambulance, Integer>
{

}
