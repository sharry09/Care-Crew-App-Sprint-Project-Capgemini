package com.healthassist.serviceImpltests;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.exception.NoAmbulanceFound;

import com.healthassist.service.AmbulanceBookingService;

@SpringBootTest
public class AmbulanceBookingServiceImplTest {
@Autowired
AmbulanceBookingService ambulanceBookingService;

@Test
void testCancelAppointment() {
	assertThrows(NoAmbulanceFound.class, () -> {
		 ambulanceBookingService.cancelAppoinment(-1);
	} );
}
	
	
}
