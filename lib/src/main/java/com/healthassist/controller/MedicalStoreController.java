package com.healthassist.controller;

import java.util.Optional;

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

import com.healthassist.entities.MedicalStore;
import com.healthassist.entities.Medicine;
import com.healthassist.exception.NoMedicineFoundException;

import com.healthassist.service.MedicalStoreService;

//import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
@RequestMapping(path="LIFELINE")
public class MedicalStoreController {
	
	@Autowired
	private MedicalStoreService service = null;

	//Add medicine in medical Store
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/addMedicineInMedicalStore
	@PostMapping(path = "addMedicineInMedicalStore")
	public ResponseEntity<String> getMedicine(@RequestBody Medicine medicine)
	{
		ResponseEntity<String> response = null;
		service.addMedicine(medicine);
		if (medicine.getMedicineId()!= 0) {
			response = new ResponseEntity<String>("MEDICINE WITH ID "+ medicine.getMedicineId() + " is added to LIFELINE MEDICAL STORE",
					HttpStatus.CREATED);
		}
		return response;
		
	}
	
	//Delete medicine from medical Store
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/deleteMedicine/
	@DeleteMapping(path="deleteMedicine/{medicineId}")
	public String deleteMedicine(@PathVariable("medicineId") int medicineId)
	{
		return service.removeMedicine(medicineId);
	}
	
	//Get Medicine In Medical Store ID(Unique medicine Id)
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/medicine/1
	@GetMapping(path="medicine/{medicineId}")
	public Optional<Medicine> getMedicineById(@PathVariable("medicineId") int medicineId) throws NoMedicineFoundException
	{
		return service.findMedicineById(medicineId);
		
	}
	
	//Get Medical store From Medical Store ID(Unique medical store Id)
	
	//http://localhost:9090/LIFELINE-api/LIFELINE/medicalStoreId/1
		@GetMapping(path="medicalStoreId/{medicalStoreId}")
		public Optional<MedicalStore> getMedicalStoreById(@PathVariable("medicalStoreId") int medicalStoreId) throws NoMedicineFoundException
		{
			return service.findMedicalStoreDetails(medicalStoreId);
			
		}
		
		//Update medicine name in medical Store
		
		//http://localhost:9090/LIFELINE-api/LIFELINE/updateMedicineInMedicalStore/  >PUT method
		@PutMapping(path = "updateMedicineInMedicalStore/{medicineId}/{medicineName}")
		public Medicine updateMedicineById(@PathVariable("medicineId")int medicineId,@PathVariable("medicineName")String medicineName) throws NoMedicineFoundException
		{
			return service.updateMedicineById(medicineId, medicineName);
			
		}
		

		//http://localhost:9090/LIFELINE-api/LIFELINE/updateMedicineInMedicalStore/  >PUT method
		//@PutMapping(path = "updateMedicineInMedicalStore/{medicineId}")
		/*
		public ResponseEntity<Medicine> updateMedicineById(@RequestBody Medicine medicine)
		{
			medicine=service.updateMedicineById(medicine);
			ResponseEntity<Medicine> response= new ResponseEntity<Medicine>(medicine,HttpStatus.OK);
			return response;
			}
			*/
	
}