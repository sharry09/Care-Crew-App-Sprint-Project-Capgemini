import {useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router";
import AmbulanceService from "../service/AmbulanceService";
import Contact from "../../layout/component/Contact";
import cancelledGif from "../../layout/component/cancelledGif.gif"
import { Link } from "react-router-dom";
function DeleteAmbulance(){
  let backStyle={
    backgroundColor:"#FFCD60",
}    
    const[ambulance,setAmbulance] =useState({});
    let service=new AmbulanceService();
    let result='';
   
    let {ambulanceId} =useParams();
    const navigate =useNavigate();
    
    useEffect(()=>{
  service.delete(ambulanceId).then(()=>{
  
   alert(`Ambulance with ${ambulanceId}deleted`);
   navigate('/home');
  }).catch((error) =>{
    result=` Error in deleting  id ${ambulanceId} `
      
  })

    })
    return(
      <div>
      <div className="container"> 
       <img className="mt-5" src={cancelledGif}/>    
<div className="alert alert-danger">Ambulance with id {ambulanceId} deleted</div>
<Link className="btn btn-lg  mt-3 ml-3" style={backStyle} to='/viewAmbulance' >Back</Link>
</div>
<Contact/>
</div>
    );
}
export default DeleteAmbulance;