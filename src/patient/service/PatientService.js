import axios from "axios";
class PatientService{

    // // point where we connect to thhe backend app
    addPatient(patient){
        //alert(JSON.stringify(student));
        return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/patient/addPatient' ,patient);
        //this axios method will return some promise to Homw.js (at onClick)-->It contains "then" method
    }

    findAllPatients(){
        return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/viewAllPatients');

    }

    findMedicalStore(){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewMedicalStores`);

    }

    deletePatientById(patientId){
        return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteById/${patientId}`);
    }

    findPatientById(patientId){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/getPatientById/${patientId}`)
      }
      updatePatient(patient){
      //  alert(JSON.stringify(student))
       return axios.put('http://localhost:9090/LIFELINE-api/LIFELINE/',patient);
      }

      placeOrder(medicalStoreId,medicineName){
          return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/placeOrders/${medicalStoreId}/${medicineName}`);
      }

      getAvailablePackages(){
          return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/View_all_packages`);
      }



}
export default PatientService;