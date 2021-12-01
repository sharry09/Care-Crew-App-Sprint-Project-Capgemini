import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import DoctorService from "../service/DoctorService";
import cancelledGif from "../../layout/component/cancelledGif.gif"
import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
function DeleteDoctor1(){
  let backStyle={
    backgroundColor:"#FFCD60",
}
    const[Doctor,setDoctor] =useState({});
    let service=new DoctorService();
    let result='';
   
    let {doctorId} =useParams();
    const navigate =useNavigate();
    
    useEffect(()=>{
  service.deleteDoctor(doctorId).then(()=>{
  
   alert(`Doctor with id ${doctorId}deleted`);
   navigate('/readDoctorDetails');
  }).catch((error) =>{
    result=` Error in deleting doctor with id ${doctorId} `
      
  })

    })
    return(
      <div>
   <div className="container"> 
    <img className="mt-5" src={cancelledGif}/> 
<div className="alert alert-danger">Doctor at Care Crew with id {doctorId} deleted</div>
<Link className="btn btn-lg  mt-3 ml-3" style={backStyle} to='/readDoctorDetails' >Back</Link>
</div>
<Contact/>
</div>
    );
}
export default DeleteDoctor1;