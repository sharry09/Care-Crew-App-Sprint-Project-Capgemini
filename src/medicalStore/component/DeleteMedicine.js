import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import MedicalStoreService from "../service/MedicalStoreService";
import Contact from "../../layout/component/Contact";
import cancelledGif from "../../layout/component/cancelledGif.gif"
import { Link } from "react-router-dom";

function DeleteMedicine() {
    const[medicine, setState]=useState({});
    let {medicineId} = useParams();
    let service = new MedicalStoreService();
    const navigate = useNavigate();
    //let result ='';

    //componentDidMount
    //componentDidUpdate
    useEffect(()=>{
        //confirm("Are you sure?");
        //if(sessionStorage.getItem('username')!=null){  
     service.deleteMedicine(medicineId).then(() => {
        // result=`Student with id = ${studentId} deleted`
         alert(`Medicine with id ${medicineId} deleted`);
         // navigate('/medicalStore/medicine/get-medicine');
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
     <div className ="alert alert-danger">Medicine with id = {medicineId} deleted</div>
     <Link className="btn btn-danger mt-3 ml-3" to='/medicalStore/medicine/get-medicine' >Back</Link>
     
     </div>
     <Contact/>
     </div>
 );

}
export default DeleteMedicine;