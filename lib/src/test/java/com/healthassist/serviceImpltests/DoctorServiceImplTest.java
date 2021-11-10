package com.healthassist.serviceImpltests;

import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.healthassist.exception.NoDoctorDataFoundException;
import com.healthassist.service.DoctorService;

@SpringBootTest
public class DoctorServiceImplTest {
	@Autowired
	private DoctorService doctorService;
//	@Test
//	void testRegisterDoctorInfo() throws  NoDoctorDataFoundException{
//		Doctor doctor =new Doctor();
//		doctor.setDoctorId(1);
//		doctor.setDoctorName("Nishanth");
//		doctor.setContactNumber("8877665544");
//		doctor.setDoctorShiftTime(DoctorShiftTime.MORNING);
//		doctor.setDoctorSpeciality(DoctorSpeciality.ALLERGIST);
//		Doctor expected = doctorService.registerDoctorInfo(doctor);
//		//Doctor actual = doctorService.registerDoctorInfo(doctor);
//		Optional<Doctor> actual=  doctorService.findDoctorById(expected.getDoctorId());
//		assertEquals(expected, actual);
//		assertEquals(expected, actual);
//	}
//	
	@Test
	void testViewDoctorById() {
		assertThrows(NoDoctorDataFoundException.class, () -> {
			 doctorService.findDoctorById(-1);
		} );
	}

	
//	@Test
//	void testUpdateDoctorById() throws NoDoctorDataFoundException {
//		assertThrows(NoDoctorDataFoundException.class, () -> {
//			 doctorService.updateDoctorById(-1,"");
//		} );
//	}
	
	@Test
	void testDeleteDoctor() throws NoDoctorDataFoundException{
		assertThrows(NoDoctorDataFoundException.class, () -> {
			 doctorService.findDoctorById(-1);
		} );
	}
	
}
