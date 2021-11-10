package com.healthassist.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.dao.BookingAppointmentDao;
import com.healthassist.entities.AvailableSlots;
import com.healthassist.entities.BookingAppointment;

@RestController
@RequestMapping(path = "LIFELINE")
public class BookAppointmentController {

	@Autowired
	BookingAppointmentDao bookAppointmentDao;

	// http://localhost:9090/LIFELINE-api/LIFELINE/bookAppointment
	@PostMapping(path = "bookAppointment")
	public String bookAppointment(@Valid @RequestBody BookingAppointment bookingAppointment) {
		List<BookingAppointment> ba = bookAppointmentDao.findAll();
		bookingAppointment.setBookingStatus(true);

		for (BookingAppointment ba1 : ba) {
			
			if (ba1.getAvailableSlots().equals(bookingAppointment.getAvailableSlots())
					&& ba1.getDateOfConsultation().equals(bookingAppointment.getDateOfConsultation())) {

				bookingAppointment.setBookingStatus(false);
				bookAppointmentDao.save(bookingAppointment);
				return "UNAVAILABLE SLOTS";
			}
					}
		bookAppointmentDao.save(bookingAppointment);
		return "APPOINTMENT BOOKED";
	}

	// http://localhost:9090/LIFELINE-api/LIFELINE/updateAppointment
	@PutMapping(path = "updateAppointment/{bookingId}/{date}/{slot}")

	public String updateAppointment(@PathVariable("bookingId") int bookingId, @PathVariable("date") String date, @PathVariable("slot")AvailableSlots slot) {
		List<BookingAppointment> ba = bookAppointmentDao.findAll();
		BookingAppointment bookingAppointment = bookAppointmentDao.findById(bookingId).get();
		if (bookAppointmentDao.existsById(bookingId)) {

			for (BookingAppointment ba1: ba) {
				if (ba1.getDateOfConsultation().equals(date) && (ba1.getAvailableSlots().equals(slot)) ) {
					bookingAppointment.setBookingStatus(false);
					bookAppointmentDao.save(bookingAppointment);
					return "Unavailable slots";
				} else {
					bookingAppointment.setDateOfConsultation(date);
					bookingAppointment.setBookingStatus(true);
					bookingAppointment.setAvailableSlots(slot);
					bookAppointmentDao.save(bookingAppointment);
					return " Appointment Updated";
				}

			}

		}
		return "No such Appointment found";

	}

}

