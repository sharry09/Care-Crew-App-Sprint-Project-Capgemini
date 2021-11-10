package com.healthassist.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.TreatmentHistory;
@Repository
public interface TreatmentHistoryDao extends JpaRepository<TreatmentHistory, Integer>{

}
