package com.healthassist.service;

import com.healthassist.entities.MedicalTestResult;
import com.healthassist.exception.NoResultAvailableException;

public interface MedicalTestResultService {
	public MedicalTestResult addNewMedicalTestResult(MedicalTestResult medicalTestResult);
	public MedicalTestResult getMedicalTestResult(Integer medicalTestResultId) throws NoResultAvailableException;
	public String updateMedicalTestById(Integer medicalTestResultId,String testCondition) throws NoResultAvailableException ;
	public String deleteMedicalTestById(Integer medicalTestResultId) throws NoResultAvailableException;

}
