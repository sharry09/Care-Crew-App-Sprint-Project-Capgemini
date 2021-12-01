import axios from 'axios';
class AmbulanceService{
addAmbulance(ambulance){
    // alert(JSON.stringify(ambulance));
 return axios.post(`http://localhost:9090/LIFELINE-api/LIFELINE/addAmbulance`, ambulance);
}
viewHistory(){
return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewAmbulance`);
}
delete(ambulanceId){
    return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/deleted/${ambulanceId}`);

}
}
export default AmbulanceService;