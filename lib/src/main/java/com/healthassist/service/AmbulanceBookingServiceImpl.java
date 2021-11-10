package com.healthassist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.healthassist.dao.AmbulanceBookingDao;
import com.healthassist.entities.AmbulanceBooking;
import com.healthassist.entities.Slots;
import com.healthassist.exception.NoAmbulanceFound;


@Service
public class AmbulanceBookingServiceImpl implements AmbulanceBookingService{
	
	 @Autowired
	private AmbulanceBookingDao dao=null;


	@Override              //http://localhost:9090/LIFELINE-api/LIFELINE/accept/1/06-11-2021/EMERGENCY
	public String acceptAmbulanceBooking(int ambulanceId, String ambulanceBookingDate,Slots slots)throws NoAmbulanceFound {
	AmbulanceBooking ambulanceBooking = dao.findById(ambulanceId).get();
	if(dao.existsById(ambulanceId)) {
	
		if (ambulanceBooking.getSlots().EMERGENCY.equals(slots )) {
			if(ambulanceBookingDate.equals(ambulanceBooking.getAmbulanceBookingDate())) {	
					ambulanceBooking.setSlots(slots);
					ambulanceBooking.setAmbulanceStatus(true);
					dao.save(ambulanceBooking);

				return "Ambulance "+ambulanceId+" is Available";
			}
			} 
			}
			//return "Ambulance Not Available";
		return dao.acceptBooking(ambulanceId,ambulanceBookingDate,slots);
			
	}

	
	
	@Override
	public AmbulanceBooking viewTravelBooking(int ambulanceId) throws NoAmbulanceFound {
		if(dao.existsById(ambulanceId))
			return dao.findById(ambulanceId).get();
		
		throw new NoAmbulanceFound("No Such Data Found");
	}


	@Override
	public List<AmbulanceBooking> viewTravelHistory()  {
		return dao.findAll();
	}
	
	@Override  //http://localhost:9090/LIFELINE-api/LIFELINE/update/2/06-11-2021
	public String updateAppoinment(int ambulanceBookingId,String ambulanceBookingDate) throws NoAmbulanceFound {
		
		List<AmbulanceBooking> booking=dao.findAll();
		AmbulanceBooking ambulanceBooking=dao.findById(ambulanceBookingId).get();
		if(dao.existsById(ambulanceBookingId)) {
			for(AmbulanceBooking book:booking) {
				if(book.getAmbulanceBookingDate().equals(ambulanceBookingDate)){
					ambulanceBooking.setAmbulanceBookingDate(ambulanceBookingDate);
					ambulanceBooking.setAmbulanceStatus(false);
				}
					dao.save(ambulanceBooking);
					return "Date Updated";
						
				}
			}
		return dao.updateAppoinmentInfo(ambulanceBookingId, ambulanceBookingDate);
		}	
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/reject/0/06-11-2021
	@Override
	public String rejectAmbulanceBooking(int ambulanceId, String ambulanceBookingDate, Slots slots) throws  NoAmbulanceFound {
		
		List<AmbulanceBooking> booking=dao.findAll();
		AmbulanceBooking ambulanceBooking=dao.findById(ambulanceId).get();
		if(dao.existsById(ambulanceId)) {
			for(AmbulanceBooking book:booking) {
				if(book.getAmbulanceBookingDate().equals(ambulanceBookingDate)){
					ambulanceBooking.setAmbulanceStatus(false);
					ambulanceBooking.setSlots(null);
					dao.save(ambulanceBooking);
					return "Ambulance is rejected";
				}
			}
		}
		//return"Invalid Ambulance Id";
		return dao.rejectBooking(ambulanceId,ambulanceBookingDate,slots);
	}


	@Override
	public void cancelAppoinment(int ambulanceBookingId) throws NoAmbulanceFound {
		
		if(dao.existsById(ambulanceBookingId)) {
		dao.deleteById(ambulanceBookingId);
		}	
		throw new NoAmbulanceFound("Appointment for ID  "+ambulanceBookingId+" is cancelled");
	}


@Override
public void addAmbulanceBookingInfo(AmbulanceBooking ambulanceBooking) {
	dao.save(ambulanceBooking);
	
}
}


