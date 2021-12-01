import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import MedicalStoreService from "../service/MedicalStoreService";
import Contact from "../../layout/component/Contact";
import cancelledGif from "../../layout/component/cancelledGif.gif"


function DeleteMedicalStore() {
    const[medicalStore, setState]=useState({});
    let {medicalStoreId} = useParams();
    let service = new MedicalStoreService();
    const navigate = useNavigate();
    //let result ='';

    //componentDidMount
    //componentDidUpdate
    useEffect(()=>{
        //confirm("Are you sure?");
        //if(sessionStorage.getItem('username')!=null){  
     service.deleteMedicalStoreById(medicalStoreId).then(() => {
        // result=`Student with id = ${studentId} deleted`
         alert(`MedicalStore with id ${medicalStoreId} deleted`);
        //  navigate('/medicalStore/home');
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
     <div className ="alert alert-danger">Medical Store with id = {medicalStoreId} deleted</div>
     <Link className="btn btn-danger mt-3 ml-3" to='/medicalStore/get-medicalStore' >Back</Link>
        </div>
        <Contact/>
</div>
 );

}
export default DeleteMedicalStore;