import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import HospitalService from "../service/HospitalService";


function DeleteHospital(){
    const[hospital, setHospital] = useState({});
    let { hospitalId } =  useParams();
    //const navigate = useNavigate()
    let service = new HospitalService();
    let result ='';
     //componentDidMount
     //componentDidUpdate
    useEffect(()=>{
        //confirm('Are you sure?');
       // if(sessionStorage.getItem('username') != null){
            service.deleteHospital(hospitalId).then(()=>{
             result= `Hospital with id = ${hospitalId} is deleted.`
             alert(`Hospital with id : ${hospitalId} is deleted`);
            // navigate('/doctor/home');
            }).catch((error)=>{
                result= `There is some problem deleting the record.`
            })
    // }else{
    //     alert('Unauthorised access to page');
    //     navigate('/student/login');
    //}
})
    return(
        <div className="alert alert-danger">Hospital with id = {hospitalId} is deleted.</div>
    );
}
export default DeleteHospital;