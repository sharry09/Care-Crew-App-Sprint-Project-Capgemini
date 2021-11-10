package com.healthassist.serviceImpltests;


import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.entities.Ambulance;
import com.healthassist.service.AmbulanceService;

@SpringBootTest
public class AmbulanceServiceImplTest {
	
	@Autowired
	AmbulanceService ambulanceService;
	@Test
	void testfindAmbulance() {
		Optional<Ambulance> expected=ambulanceService.findAmbulance(1);
		Optional<Ambulance> actual=ambulanceService.findAmbulance(1);
		assertEquals(expected, actual);
	
	}
}
