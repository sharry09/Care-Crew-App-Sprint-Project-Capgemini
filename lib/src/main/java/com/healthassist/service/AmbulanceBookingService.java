package com.healthassist.service;

import java.util.List;

import com.healthassist.entities.AmbulanceBooking;
import com.healthassist.entities.Slots;
import com.healthassist.exception.NoAmbulanceFound;


public interface AmbulanceBookingService {

	public  String rejectAmbulanceBooking(int ambulanceId,String ambulanceBookingDate, Slots slots) throws NoAmbulanceFound;
	public String acceptAmbulanceBooking(int ambulanceId, String ambulanceBookingDate, Slots slots) throws NoAmbulanceFound;

	public AmbulanceBooking viewTravelBooking(int ambulanceBookingId) throws NoAmbulanceFound;
		//view all travel bookings made by giving Id
	public List<AmbulanceBooking> viewTravelHistory();
	
	
	
	public void cancelAppoinment(int ambulanceBookingId) throws NoAmbulanceFound;
	public String updateAppoinment(int ambulanceBookingId, String ambulanceBookingDate) throws NoAmbulanceFound;
	public void addAmbulanceBookingInfo(AmbulanceBooking ambulanceBooking);
	
}
