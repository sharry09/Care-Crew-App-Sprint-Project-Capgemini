import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import BookingAppointmentService from "../service/BookingAppService";
import cancelledGif from "../../layout/component/cancelledGif.gif"
import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
function DeleteAppointment() {
    let backStyle={
        backgroundColor:"#FFCD60",
    }
    const[patient, setState]=useState({});
    let {appointmentId} = useParams();
    let service = new BookingAppointmentService;
    const navigate = useNavigate();
    //let result ='';

    //componentDidMount
    //componentDidUpdate
    useEffect(()=>{
        //confirm("Are you sure?");
        //if(sessionStorage.getItem('username')!=null){  
     service.cancelAppointment(appointmentId).then(() => {
        // result=`Student with id = ${studentId} deleted`
        //  alert(`Patient with id ${appointmentId} cancelled`);
         navigate('/bookappointment/delete/:appointmentId');
     }).catch((error)=>{
        // result =`There is some problem while deleting record.`
        
     })
    //  })}
    //  else{
    //     navigate('/student/login');
    //      alert('Unauthorised Accesss to page');
    //  }
       

    })
 return(
     <div>
    <div className="container">
        <img className="mt-5" src={cancelledGif}/>
     <div className ="mt-5 alert alert-danger">Patient appointment with id {appointmentId} cancelled </div>
     <Link className="btn btn-lg  mt-3 ml-3" style={backStyle} to={`/bookappointment/view-appointment`}>Back</Link>
     </div>
     <Contact/>
     </div> 
 );

}
export default DeleteAppointment;