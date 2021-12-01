import axios from "axios";

class BookingAppointmentService{

    addAppointment(bookingAppointment){
        return axios.post(`http://localhost:9090/LIFELINE-api/LIFELINE/bookAppointmentForDoctor`,bookingAppointment);
    }

    updateAppointment(bookingAppointment){
        return axios.put(`http://localhost:9090/LIFELINE-api/LIFELINE/updateAppointment`,bookingAppointment);
    }

    viewAppointmentById(appointmentId){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewAppointmentById/${appointmentId}`);
    }

    viewAppointments(){
        return axios.get(`http://localhost:9090/LIFELINE-api/LIFELINE/viewAppointments`);
    }

    cancelAppointment(appointmentId){
        return axios.put(`http://localhost:9090/LIFELINE-api/LIFELINE/removeAppointment/${appointmentId}`);
    }
}
export default BookingAppointmentService;