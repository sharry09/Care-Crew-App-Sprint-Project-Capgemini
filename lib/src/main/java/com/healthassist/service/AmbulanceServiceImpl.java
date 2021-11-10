package com.healthassist.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.AmbulanceDao;
import com.healthassist.entities.Ambulance;

@Service
public class AmbulanceServiceImpl implements AmbulanceService
{
	@Autowired
	private AmbulanceDao dao=null;
	//private AmbulanceBookingDao ambulanceBookingDao=null;

	// http://localhost:9090/LIFELINE-api/LIFELINE/addAmbulance
	@Override
	public Ambulance addAmbulanceInfo(Ambulance ambulance) {
		return dao.save(ambulance);

	}

	// http://localhost:9090/LIFELINE-api/LIFELINE/ambulance/2
	@Override
	public Optional<Ambulance> findAmbulance(int ambulanceId) {
		return dao.findById(ambulanceId);
	}


}