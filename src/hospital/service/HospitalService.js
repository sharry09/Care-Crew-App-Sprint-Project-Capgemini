import axios from 'axios';
class HospitalService{
addDoctor(doctor){
 return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/addDoctorInHospital', doctor);
}
getDoctor(){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/getDoctorFromHospital');
}
deleteDoctor(doctorId){
    return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteDoctorInHospital/${doctorId}`);
}
updateDoctor(doctor){
    return axios.put('http://localhost:9090/LIFELINE-api/LIFELINE/updateDoctorInHospital',doctor);
}
findDoctorById(doctorId){
    return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/getDoctorById//${doctorId}`);
}
addHospital(hospital){
    return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/addHospital', hospital);
}
getHospital(){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/getHospital');
}
viewNoOfBeds(hospital){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/viewNoOfBeds', hospital);
}
addTreatmentHistory(treatmentHistory){
    return axios.post('http://localhost:9090/LIFELINE-api/LIFELINE/addTreatmentHistory', treatmentHistory);
}
getTreatmentHistory(){
    return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/getTeatmentHistory`);
}
findDoctorBySpeciality(doctor){
    return axios.get('http://localhost:9090/LIFELINE-api/LIFELINE/findDoctorbySpeciality', doctor);
}
findHospitalByid(hospitalId){
    return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/getHospitalById/${hospitalId}`);
}
updateNoOfBeds(hospital){
    return axios.put('http://localhost:9090/LIFELINE-api/LIFELINE/updateNoOfBedsInHospital', hospital);
}
deleteHospital(hospitalId){
    return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteHospital/${hospitalId}`);
}
}
export default HospitalService;