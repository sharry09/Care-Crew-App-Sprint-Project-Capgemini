import PatientService from "../patient/service/PatientService";

test('Dummy Test', () => {
    expect(true).toBeTruthy();
})
 
test('Testing find Patient by id function.', async () => {
    let service = new PatientService();
    await service.findPatientById(1).then((result) => {
        let patient = result.data;
        expect(patient.patientName).toBe('Sharon');
    });
})