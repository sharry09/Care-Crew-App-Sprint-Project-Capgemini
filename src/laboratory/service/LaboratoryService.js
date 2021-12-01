import axios from 'axios';
class LaboratoryService{
addMedicalTestResult(medicalTestResult){
    return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/addMedicalTestResult',medicalTestResult);
}
getMedicalTestResult(){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/getMedicalTestResult');
}
deleteMedicalTestResult(medicalTestResultId){
    return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteMedicalTestresult/${medicalTestResultId}`);
}
findMedicalTestResultById(medicalTestResultId){
    return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/getMedicalTestResultById/${medicalTestResultId}`);
}
updateMedicalTestResult(medicalTestResult){
    return axios.put('http://localhost:9090/LIFELINE-api/LIFELINE/updateMedicalTestResult',medicalTestResult);
}
viewDoctorInLaboratory(){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/getDoctorFromLaboratory');
}
viewDoctorCategories(doctorSpeciality){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/viewDoctorCategories', doctorSpeciality);
}
addDoctorInLaboratory(doctor){
    return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/addDoctorInLaboratory', doctor);
}
deleteDoctorInLaboratory(doctorId){
    return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteDoctorInLaboratory/${doctorId}`);
}
findDoctorByIdInLaboratory(doctorId){
 
    return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/getDoctorByIdInLaboratory/${doctorId}`);
}
updateDoctorInLaboratory(doctor){
    return axios.put('http://localhost:9090/LIFELINE-api/LIFELINE/updateDoctorInLaboratory', doctor);
}
}
export default LaboratoryService;