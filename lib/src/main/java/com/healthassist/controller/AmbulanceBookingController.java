package com.healthassist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.AmbulanceBooking;
import com.healthassist.entities.Slots;
import com.healthassist.exception.NoAmbulanceFound;
import com.healthassist.service.AmbulanceBookingService;

@RestController
@RequestMapping(path="LIFELINE")
public class AmbulanceBookingController {


	@Autowired
	private AmbulanceBookingService service = null;

	@GetMapping(path="viewHistory")
	public List<AmbulanceBooking> getAmbulanceTravelHistory()
	{
		return service.viewTravelHistory();
	}


	@GetMapping(path="accept/{ambulanceId}/{ambulanceBookingDate}/{slots}")

	public String getAcceptStatus(@PathVariable("ambulanceId")int ambulanceId,@PathVariable("ambulanceBookingDate") String ambulanceBookingDate,@PathVariable("slots") Slots slots)
			throws NoAmbulanceFound
	{

		return service.acceptAmbulanceBooking(ambulanceId ,ambulanceBookingDate,slots);
	}

	@GetMapping(path="reject/{ambulanceId}/{ambulanceBookingDate}/{slots}")

	public String getRejectStatus(@PathVariable("ambulanceId")int ambulanceId,@PathVariable("ambulanceBookingDate") String ambulanceBookingDate,@PathVariable("slots") Slots slots)
			throws  NoAmbulanceFound
	{

		return service.rejectAmbulanceBooking(ambulanceId ,ambulanceBookingDate,slots);
	}


	@GetMapping(path="viewBooking/{ambulanceBookingId}")
	public AmbulanceBooking viewTravelBooking(@PathVariable("ambulanceBookingId") int  ambulanceBookingId) throws NoAmbulanceFound{

		return service.viewTravelBooking(ambulanceBookingId);
	}


	@DeleteMapping(path="delete/{ambulanceBookingId}")
	public String deleteAmbulanceBooking(@PathVariable("ambulanceBookingId") int  ambulanceBookingId) throws NoAmbulanceFound
	{
		service.cancelAppoinment(ambulanceBookingId);
		return"Appoinment deleted";

	}

	@PostMapping(path="addAmbulanceBooking")
	public ResponseEntity<String> addAmbulanceBookingDetails(@RequestBody AmbulanceBooking ambulanceBooking ) {

		ResponseEntity<String> response = null;
		service.addAmbulanceBookingInfo(ambulanceBooking);
		if (ambulanceBooking.getAmbulanceBookingId()   != 0) {
			response = new ResponseEntity<String>("Ambulance Booking with ID "
					+ambulanceBooking.getAmbulanceBookingId() + " is created successfully  in Life Line  database",
					HttpStatus.CREATED);
		}
		return response;
	}



	@PutMapping(path="updateBooking/{ambulanceBookingId}/{ambulanceBookingDate}")
	public String updateBooking(@PathVariable("ambulanceBookingId")int ambulanceBookingId,@PathVariable("ambulanceBookingDate")String ambulanceBookingDate) throws NoAmbulanceFound {

		return service.updateAppoinment(ambulanceBookingId, ambulanceBookingDate);

	}
}