package com.healthassist.serviceImpltests;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.entities.MedicalTestResult;
import com.healthassist.exception.NoResultAvailableException;
import com.healthassist.service.MedicalTestResultService;

@SpringBootTest
public class MedicalTestResultServiceImplTest {
	@Autowired
	MedicalTestResultService medicalTestResultService;
	@Test
	void testAddMedicalTestResult() throws NoResultAvailableException{
		MedicalTestResult m=new MedicalTestResult();
		m.setMedicalTestResultId(1);
		m.setMedicalTestName("XRAY");
		m.setPatientName("Rakin");
		m.setTestCondition("Normal");
		m.setTestPerformedBy("Guru");
		MedicalTestResult expected=medicalTestResultService.addNewMedicalTestResult(m);
		MedicalTestResult actual=medicalTestResultService.getMedicalTestResult(expected.getMedicalTestResultId());
		assertEquals(expected.getMedicalTestResultId(), actual.getMedicalTestResultId());
	}

}
