package com.healthassist.service;

import java.util.Optional;

import com.healthassist.entities.Ambulance;

public interface AmbulanceService {
	
	public Ambulance addAmbulanceInfo(Ambulance ambulance);
	public Optional<Ambulance> findAmbulance(int ambulanceId);
	//public AmbulanceBooking addAmbulanceBookingInfo(AmbulanceBooking ambulanceBooking);

	
}