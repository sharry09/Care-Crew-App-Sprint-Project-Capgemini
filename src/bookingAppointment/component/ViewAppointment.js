import { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import BookingAppointmentService from "../service/BookingAppService";
import Contact from "../../layout/component/Contact";
import BookAppointmentImg from "../../layout/component/BookAppointmentImg";

function ViewAppointment() {
    let DeleteStyle={
        backgroundColor:"#22577A",
        color:"white",
    }
    let UpdateStyle={
        backgroundColor:"#B42B51",
        color:"white",
    }
    let BackStyle={
        backgroundColor:"#003638",
        color:"white",
    }
    let service = new BookingAppointmentService();
    const[state, setState] = useState({appointments:[]});
    const navigate = useNavigate();
    
    useEffect(()=>{ 
        if(sessionStorage.getItem('username')!=null){  
       service.viewAppointments().then((result)=>{
          setState({appointments: result.data})
       }).catch((error)=>{
            alert(error);
       })
    }else{
        
        alert('Register or Login to get access to page');
    navigate('/user/login');
    //     //redirect to login Page
    }
    },[]);  
    return(
        <div>
                 
                 <div className="container">
                 <BookAppointmentImg/>
                     <h1 className="mt-5">VIEW APPOINTMENT</h1>
    
                          

        <div className="mt-5">
            {
               state.appointments.length > 0 ?
            (
            <table className="table  table-bordered" >
                <thead>
                    <tr>
                        <th>Appointment Id</th>
                        <th>Patient Name</th>
                        <th>Booking Slot</th>
                        <th>DOctor Speciality</th>
                        <th>Date Of Consultation</th>
                        <th>Doctor Name</th>
                        <th>Booking Status</th>
                        <th>UpdateAppointment</th>
                        <th>CancelAppointment</th>
                    </tr>
                </thead>
                <tbody>                          
                        {
                           state.appointments.map((stu)=>
                                ( //start
                                    <tr>
                                        <td>
                                            {stu.appointmentId}                                            
                                        </td>
                                        <td>{stu.patientName}</td>
                                        <td>{stu.availableSlots}</td>
                                        <td>{stu.doctorSpeciality}</td>
                                        <td>{stu.dateOfConsultation}</td>                                        
                                        <td>{stu.doctorName}</td>
                                        <td>{stu.bookingStatus ? (<span>Confirm</span>) : (<span> Unavailable slots</span>)} </td>
                                        {/* {alert (stu.bookingStatus)} */}
                                        <td >
                                            <Link className="btn  mr-3" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" style={DeleteStyle} to={{pathname: `/bookappointment/update/${stu.appointmentId}`}}>Update</Link>
                                            </td>
                                            <td>
                                            <Link  className="btn  ml-3" style={UpdateStyle} to={{pathname: `/bookappointment/delete/${stu.appointmentId}`}}>Cancel</Link>
                                            </td>


                                    </tr>

                                )//end
                            ) //closing map
                        }
                        

                   
                </tbody>
            </table>
            ):<span className="alert alert-danger mt-5">No Appointment present</span>
        }
        </div>
        <Link className="btn mt-5 mr-3" style={BackStyle} to={`/patient/patientLogin`}>Back</Link>
        </div>
                 <Contact/>
    </div>
    );
    
}
export default ViewAppointment;