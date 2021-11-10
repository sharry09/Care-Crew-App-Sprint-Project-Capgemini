package com.healthassist.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.Ambulance;
import com.healthassist.service.AmbulanceService;


@RestController
@RequestMapping(path="LIFELINE")
public class AmbulanceController {
	@Autowired
	private AmbulanceService service = null;

	@PostMapping(path="addAmbulance")
	public ResponseEntity<String> addAmbulanceDetails(@RequestBody Ambulance ambulance ) {

		ResponseEntity<String> response = null;
		service.addAmbulanceInfo(ambulance);
		if (ambulance.getAmbulanceId()!= 0) {
			response = new ResponseEntity<String>("Ambulance with ID "
					+ambulance.getAmbulanceId() + " is created in Life Line database",
					HttpStatus.CREATED);
		}
		return response;
	}
	
	@GetMapping(path="ambulance/{ambulanceId}")
	public Optional<Ambulance> getAmbulanceById(@PathVariable("ambulanceId") int ambulanceId) {
		return service.findAmbulance(ambulanceId);
	}
}
	
