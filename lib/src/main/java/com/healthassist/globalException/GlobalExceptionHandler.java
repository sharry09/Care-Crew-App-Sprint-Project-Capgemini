package com.healthassist.globalException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.healthassist.exception.NoAmbulanceFound;
import com.healthassist.exception.NoDoctorDataFoundException;
import com.healthassist.exception.NoLabAppointmentFoundException;
import com.healthassist.exception.NoMedicalStoreFoundException;
import com.healthassist.exception.NoMedicineFoundException;
import com.healthassist.exception.NoSuchPatientException;
import com.healthassist.exception.OrderHistoryUnavailableException;

@ControllerAdvice
public class GlobalExceptionHandler {

	//When Patient Not Found
	@ExceptionHandler(NoSuchPatientException.class)
	@ResponseStatus(code=HttpStatus.INTERNAL_SERVER_ERROR, reason="Patient Not Found")
	public void handlException2() {

	}

	//Medical Store Not Found
	@ExceptionHandler(NoMedicalStoreFoundException .class)
	@ResponseStatus(code=HttpStatus.INTERNAL_SERVER_ERROR, reason="Medical Store Not Found")
	public void handlException1() {

	}

	//When Order History is unavailable
	@ExceptionHandler(OrderHistoryUnavailableException.class)
	@ResponseStatus(code=HttpStatus.INTERNAL_SERVER_ERROR, reason="Order History Unavailable")
	public void handlException3() {

	}
	
	//When No ambulance is found
	@ExceptionHandler(NoAmbulanceFound.class)
	@ResponseStatus(code=HttpStatus.INTERNAL_SERVER_ERROR, reason="Ambulance Unavailable")
	public void handlException4() {

	}
	//When No medical Store is found
	@ExceptionHandler(NoMedicineFoundException.class)
	public ResponseEntity<String> handleException(NoMedicineFoundException i)
	{
		return new ResponseEntity<String>("Entered data is incorrect , please provide valid data ",HttpStatus.BAD_REQUEST);
	}
	
	//When no doctor is found
	@ExceptionHandler(NoDoctorDataFoundException.class)
	public ResponseEntity<String> handleException(NoDoctorDataFoundException i)
	{
		return new ResponseEntity<String>("Entered data is incorrect , please provide valid data ",HttpStatus.BAD_REQUEST);
	}
	
	//When Lab appointment is unavailable is unavailable
		@ExceptionHandler(NoLabAppointmentFoundException.class)
		@ResponseStatus(code=HttpStatus.INTERNAL_SERVER_ERROR, reason="Lab appointment Unavailable")
		public void handlException5() {

		}
}
