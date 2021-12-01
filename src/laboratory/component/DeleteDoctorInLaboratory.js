import { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import LaboratoryService from "../service/LaboratoryService";
import Contact from "../../layout/component/Contact";
import cancelledGif from "../../layout/component/cancelledGif.gif"


function DeleteDoctorInLaboratory(){
    const[doctor, setDoctor] = useState({});
    let { doctorId } =  useParams();
    //const navigate = useNavigate()
    let service = new LaboratoryService();
    let result ='';
     //componentDidMount
     //componentDidUpdate
    useEffect(()=>{
        //confirm('Are you sure?');
       // if(sessionStorage.getItem('username') != null){
            service.deleteDoctorInLaboratory(doctorId).then(()=>{
             result= `Doctor with id = ${doctorId} is deleted.`
             alert(`Doctor with id : ${doctorId} is deleted`);
            // navigate('/laboratory/doctor/view');
            }).catch((error)=>{
                result= `There is some problem deleting the record.`
            })
    // }else{
    //     alert('Unauthorised access to page');
    //     navigate('/student/login');
    //}
})
    return(
        <div>
        <div className="container"> 
         <img className="mt-5" src={cancelledGif}/> 
        <div className="alert alert-danger">Doctor with id = {doctorId} deleted.</div>
        <Link className="btn btn-danger mt-3 ml-3" to='/laboratory/doctor/view' >Back</Link>
        </div>
<Contact/>
</div>
 
    );

}
export default DeleteDoctorInLaboratory;