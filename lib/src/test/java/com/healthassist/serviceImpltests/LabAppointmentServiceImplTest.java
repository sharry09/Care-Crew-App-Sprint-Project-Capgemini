package com.healthassist.serviceImpltests;

import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.exception.NoAmbulanceFound;
import com.healthassist.exception.NoLabAppointmentFoundException;
import com.healthassist.service.LaboratoryAppointmentService;

@SpringBootTest
public class LabAppointmentServiceImplTest {
	
	@Autowired
	LaboratoryAppointmentService labAppointmentService;
	@Test
	void testCancelAppointment() {
		assertThrows(NoLabAppointmentFoundException.class, () -> {
			 labAppointmentService.cancelAppointment(-1);
		} );	
	}

}
