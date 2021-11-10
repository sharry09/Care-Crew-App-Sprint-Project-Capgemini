package com.healthassist.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.healthassist.entities.AmbulanceBooking;
import com.healthassist.entities.Slots;

@Repository
public interface AmbulanceBookingDao extends JpaRepository<AmbulanceBooking, Integer> {

	 @Query(value="Select s.ambulanceBookingId,s.ambulanceBookingDate From AmbulanceBooking s")
	public String updateAppoinmentInfo(int ambulanceBookingId, String ambulanceBookingDate);

	 @Query(value="Select s.ambulanceBookingId,s.ambulanceBookingDate,s.slots From AmbulanceBooking s")
	 public String rejectBooking(int ambulanceId, String ambulanceBookingDate, Slots slots);
	 
	 @Query(value="Select s.ambulanceBookingId,s.ambulanceBookingDate,s.slots From AmbulanceBooking s")
	public String acceptBooking(int ambulanceId, String ambulanceBookingDate, Slots slots);


}
	






