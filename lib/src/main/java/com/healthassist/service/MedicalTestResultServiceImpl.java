package com.healthassist.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.MedicalTestResultDao;
import com.healthassist.entities.MedicalTestResult;
import com.healthassist.exception.NoResultAvailableException;


@Service
@Transactional
public class MedicalTestResultServiceImpl implements MedicalTestResultService {
    
	@Autowired
	public MedicalTestResultDao dao = null;
	
	
	@Override
	public MedicalTestResult addNewMedicalTestResult(MedicalTestResult medicalTestResult) {
	return dao.save(medicalTestResult);
	}

	@Override
	public MedicalTestResult getMedicalTestResult(Integer medicalTestResultId) throws  NoResultAvailableException {
		if(dao.existsById( medicalTestResultId)) {
			return dao.findById( medicalTestResultId).get();
			}
			throw new  NoResultAvailableException("No medical test result found");
			
	}
	@Override
	public String updateMedicalTestById(Integer medicalTestResultId, String testCondition) throws NoResultAvailableException {
		MedicalTestResult mt = dao.findById(medicalTestResultId).get();
		if(dao.existsById(medicalTestResultId)){
			mt.setTestCondition(testCondition);
			dao.save(mt);
			return "Test Result  Updated Successfully for ID "+ medicalTestResultId;
		}
		throw new NoResultAvailableException("No such ID is avaliable");
	}

	@Override
	public String deleteMedicalTestById(Integer medicalTestResultId) throws NoResultAvailableException {
	
		if(dao.existsById(medicalTestResultId))
		{
			dao.deleteById(medicalTestResultId);
			return "Medical Test Deleted successfully for ID  "+medicalTestResultId;
		}
	throw new NoResultAvailableException("No such Id found");
	}
	
	
	}