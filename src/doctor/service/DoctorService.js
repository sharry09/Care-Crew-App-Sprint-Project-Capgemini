import axios from "axios";

class DoctorService{
    findDoctorById(doctorId){
    return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/doctor/${doctorId}`);
    }
    readDoctor(){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/readDoctorDetails`);
    }
    deleteDoctor(doctorId){
        return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleteDoc/${doctorId}`);   
    }
    updateDoctor(doctor){
        // alert(JSON.stringify(ambulanceBooking));
        return axios.put(`http://localhost:9090/LIFELINE-api/LIFELINE/updateDoc`,doctor);
    }
    addDoctor(doctor){
        // alert(JSON.stringify(doctor));
        return axios.post(`http://localhost:9090/LIFELINE-api/LIFELINE/addDoctorDetail`,doctor);
    }
}
export default DoctorService;