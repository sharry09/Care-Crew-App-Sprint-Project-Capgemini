import axios from "axios";
class MedicalStoreService{

    // // point where we connect to thhe backend app
    addMedicalStore(medicalStore){
        //alert(JSON.stringify(student));
        return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/medicalStore/addmedicalStore' , medicalStore);
        //this axios method will return some promise to Homw.js (at onClick)-->It contains "then" method
    }


    findMedicalStoreById(medicalStoreId)
    {
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/medicalStoreId/${medicalStoreId}`);

    }

    deleteMedicalStoreById(medicalStoreId){
        return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deletemedicalStoreById/${medicalStoreId}`);
    }

    findMedicalStore(){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewAllMedicalStores`)
      }
      updateMedicalStore(medicalStore){
      //  alert(JSON.stringify(student))
       return axios.put('http://localhost:9090/LIFELINE-api/LIFELINE/updateMedicalStore',medicalStore);
      }

      addMedicine(medicine){
          return axios.post(`http://localhost:9090/LIFELINE-api/LIFELINE/addMedicineInMedicalStore`,medicine);
      }

      getMedicineById(medicineId){
          return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/medicine/${medicineId}`);
      }

      getAllMedicines(){
          return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/findMedicines`);
      }

      updateMedicine(medicine){
          return axios.put(`http://localhost:9090/LIFELINE-api/LIFELINE/updateMedicine`,medicine);
      }

      deleteMedicine(medicineId){
          return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteMedicine/${medicineId}`)
      }




}
export default MedicalStoreService;