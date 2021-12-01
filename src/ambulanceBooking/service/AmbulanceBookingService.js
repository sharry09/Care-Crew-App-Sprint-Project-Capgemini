import axios from "axios";

class AmbulanceBookingService{
    addAmbulanceBookingInfo(ambulanceBooking){
    //  alert(JSON.stringify(ambulanceBooking));
    return axios.post(`http://localhost:9090/LIFELINE-api/LIFELINE/addAmbulanceBooking`,ambulanceBooking);
    }

    viewTravelHistory(){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewHistory`);

    }
    updateBooking(ambulanceBooking){
        // alert(JSON.stringify(ambulanceBooking));
        return axios.put(`http://localhost:9090/LIFELINE-api/LIFELINE/update`,ambulanceBooking);
    }
    findBookingById(ambulanceBookingId){
        // alert(JSON.stringify(ambulanceBookingId));
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewBooking/${ambulanceBookingId}`);
    }
    deleteAppointment(ambulanceBookingId){
        return axios.delete(`http://localhost:9090/LIFELINE-api/LIFELINE/delete/${ambulanceBookingId}`);
    }
    // acceptBooking(ambulanceId,ambulanceBookingDate,slots){
    //     return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/accept/${ambulanceId}/${ambulanceBookingDate}/${slots}`);
    // }
}
export default AmbulanceBookingService;