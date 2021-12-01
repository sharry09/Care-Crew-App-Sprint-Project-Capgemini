import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import AmbulanceBookingService from "../service/AmbulanceBookingService";
import cancelledGif from "../../layout/component/cancelledGif.gif"
import Contact from "../../layout/component/Contact";
import { Link } from "react-router-dom";
function DeleteAmbulanceBooking(){
  let backStyle={
    backgroundColor:"#FFCD60",
}  
    const[ambulanceBooking,setAmbulanceBooking] =useState({});
    let service=new AmbulanceBookingService();
    let result='';
   
    let {ambulanceBookingId} =useParams();
    const navigate =useNavigate();
    
    useEffect(()=>{
  service.deleteAppointment(ambulanceBookingId).then(()=>{
  
   alert(`Booking with ${ambulanceBookingId}deleted`);
   navigate('/home');
  }).catch((error) =>{
    result=` Error in deleting  booking  with id ${ambulanceBookingId} `
      
  })

    })
    return(
      <div>
      <div className="container">
      <img className="mt-5" src={cancelledGif}/>  
<div className="alert alert-danger">Booking  with id {ambulanceBookingId} is  cancelled</div>
<Link className="btn btn-lg  mt-3 ml-3" style={backStyle} to={`/viewBooking`}>Back</Link>
     </div>
     <Contact/>
     </div>
    );
}
export default DeleteAmbulanceBooking;