import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link} from "react-router-dom";
import HospitalService from "../service/HospitalService";
import Contact from "../../layout/component/Contact";
import cancelledGif from "../../layout/component/cancelledGif.gif"
function DeleteDoctor(){
    const[doctor, setDoctor] = useState({});
    let { doctorId } =  useParams();
    const navigate = useNavigate()
    let service = new HospitalService();
    let result ='';
     //componentDidMount
     //componentDidUpdate
    useEffect(()=>{
        //confirm('Are you sure?');
       if(sessionStorage.getItem('username') != null){
            service.deleteDoctor(doctorId).then(()=>{
             result= `Doctor with id = ${doctorId} is deleted.`
             alert(`Doctor with id : ${doctorId} is deleted`);
            // navigate('/doctor/home');
            }).catch((error)=>{
                result= `There is some problem deleting the record.`
            })
    }else{
        alert('REGISTER OR LOGIN TO PERFORM OPERATIONS');
        navigate('/user/login');
    }
})
    return(
        <div>
        <div className="container"> 
         <img className="mt-5" src={cancelledGif}/> 
        <div className="alert alert-danger">Doctor at Care Crew with id  {doctorId} deleted.
        <Link className="btn btn-danger mt-3 ml-3" to='/hospital/hospitalAdmin' >Back</Link></div>
        </div>
<Contact/>
</div>
    );
}
export default DeleteDoctor;