package com.healthassist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Patient;
import com.healthassist.exception.NoMedicalStoreFoundException;
import com.healthassist.exception.NoSuchPatientException;
import com.healthassist.service.PatientService;

@RestController
@RequestMapping(path = "LIFELINE")
public class PatientController {
	@Autowired
	private PatientService service = null;

	@GetMapping(path = "placeOrders/{medicalStoreId}/{medicineName}")
	public String placeOrders(@PathVariable("medicalStoreId") int medicalStoreId,
			@PathVariable("medicineName") String medicineName) {
		return service.placeOrders(medicalStoreId, medicineName);
	}

	//  http://localhost:9090/LIFELINE-api/LIFELINE/viewAllPatients
	@GetMapping(path = "viewAllPatients")
	public List<Patient> getAllPatients() {
		return service.findPatient();
	}

	// http://localhost:9090/LIFELINE-api/LIFELINE/searchMedicalStore/1
	@GetMapping(path = "searchMedicalStore/{medicalStoreId}")
	public MedicalStore getMedicalStore(@PathVariable("medicalStoreId") int medicalStoreId)
			throws NoMedicalStoreFoundException {
		return service.searchMedicalStore(medicalStoreId);
	}

	// http://localhost:9090/LIFELINE-api/LIFELINE/6
	@GetMapping(path = "{patientId}")
	public Patient getPatientById(@PathVariable("patientId") int patientId) throws NoSuchPatientException {
		return service.viewPatientById(patientId);
	}

	// http://localhost:9090/LIFELINE-api/LIFELINE/View_all_packages
	@GetMapping(path = "ViewAllPackages")
	public String getAllAvailablePackages() {
		return service.viewTreatmentPackages();
	}

}
