import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PatientService from "../service/PatientService";
import Contact from "../../layout/component/Contact";
import cancelledGif from "../../layout/component/cancelledGif.gif"
import { Link} from "react-router-dom";
function DeletePatient() {
    const[patient, setState]=useState({});
    let {patientId} = useParams();
    let service = new PatientService();
    const navigate = useNavigate();
    //let result ='';

    //componentDidMount
    //componentDidUpdate
    useEffect(()=>{
        //confirm("Are you sure?");
        //if(sessionStorage.getItem('username')!=null){  
     service.deletePatientById(patientId).then(() => {
        // result=`Student with id = ${studentId} deleted`
         alert(`Patient with id ${patientId} deleted`);
         navigate('/patient/home');
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
     <div className ="alert alert-danger">Patient with id = {patientId} deleted</div>
     <Link className="btn btn-danger mt-3 ml-3" to='/patient/view-patient' >Back</Link>
     </div>
<Contact/>
</div>
 );

}
export default DeletePatient;