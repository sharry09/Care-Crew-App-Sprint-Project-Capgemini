package com.healthassist.serviceImpltests;


import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoMedicalStoreFoundException;
import com.healthassist.exception.NoSuchPatientException;
import com.healthassist.service.PatientService;

@SpringBootTest
public class PatientServiceImplTest {
	@Autowired
	private PatientService patientService;
	
	@Test
	void testRegisterPatientInfo() throws NoSuchPatientException {
		Patient patient=new Patient();
		patient.setPatientId(1);
		patient.setPatientName("Sash");
		patient.setPatientAge(43);
		patient.setPatientGender("female");
		patient.setPatientContactNumber("9988776655");
		patient.setDateOfConsultation("9-7-2020");
		patient.setBloodGroup("B+ve");
		patient.setPatientAddress("Anna nagar-Chennai");
		patient.setDisease("Vitamin deficiency");
		
		Patient expected = patientService.registerPatientInfo(patient);
		Patient actual= patientService.viewPatientById(expected.getPatientId());
		assertEquals(expected.getPatientId(), actual.getPatientId());
		assertEquals(expected.getPatientName(), actual.getPatientName());
		
	}
	
	@Test
	void testViewPatientById() {
		assertThrows(NoSuchPatientException.class, () -> {
			 patientService.viewPatientById(-1);
		} );
	}
	
	@Test
	void testSearchMedicalStore() throws NoMedicalStoreFoundException {
		assertThrows(NoMedicalStoreFoundException.class, () -> {
			 patientService.searchMedicalStore(-1);
		} );
	}
	
//	@Test
//	void testFindPatient() {
//		List<Patient> expected=service.findPatient();
//		List<Patient> actual=service.findPatient();
//		assertEquals(expected,actual);
//	}
	
	@Test
	void testPlaceOrders() {
		MedicalStore medicalStore=new MedicalStore();
		medicalStore.setMedicalStoreId(1);
		medicalStore.setMedicalStoreName("LifeLine MedicalStore");
		
		String expected = patientService.placeOrders(medicalStore.getMedicalStoreId(),medicalStore.getMedicalStoreName());
		String actual  = patientService.placeOrders(medicalStore.getMedicalStoreId(),medicalStore.getMedicalStoreName());
		
		assertEquals(expected, actual);
		
	}
	
	
	
	
	}


