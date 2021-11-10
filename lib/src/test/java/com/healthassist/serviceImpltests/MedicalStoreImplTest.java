package com.healthassist.serviceImpltests;


import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.exception.NoMedicineFoundException;
import com.healthassist.service.MedicalStoreService;

@SpringBootTest
public class MedicalStoreImplTest 

{
 @Autowired
 private MedicalStoreService medicalStoreService;

	@Test
	void testFindMedicineById() 
	{
		assertThrows(NoMedicineFoundException.class, () -> {
			medicalStoreService.findMedicineById(-1);
			} );
		
	}
	
	@Test
	void testRemoveMedicine() {
		assertThrows(NoMedicineFoundException.class, () -> {
			medicalStoreService.findMedicineById(-1);
			} );
	}

}