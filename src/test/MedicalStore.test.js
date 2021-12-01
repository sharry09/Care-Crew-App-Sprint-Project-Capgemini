import MedicalStoreService from "../medicalStore/service/MedicalStoreService";


test('Dummy Test', () => {
    expect(true).toBeTruthy();
})
 
test('Testing find medicalStore by id function.', async () => {
    let service = new MedicalStoreService();
    await service.findMedicalStoreById(51).then((result) => {
        let medicalStore = result.data;
       
        expect(medicalStore.medicalStoreName).toBe('Sanjeevi Medicos');
    });
})


test('Testing find medicine by id function.', async () => {
    let service = new MedicalStoreService();
    await service.getMedicineById(1).then((result) => {
        let medicine = result.data;

        expect(medicine.medicineName).toBe('Paracetamol');
    });
})
