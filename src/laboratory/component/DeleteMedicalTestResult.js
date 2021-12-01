import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import LaboratoryService from "../service/LaboratoryService";

function DeleteMedicalTestResult(){
    const[medicalTestResult, setMedicalTestResult] = useState({});
    let { medicalTestResultId } =  useParams();
    //const navigate = useNavigate()
    let service = new LaboratoryService();
    let result ='';
     //componentDidMount
     //componentDidUpdate
    useEffect(()=>{
        //confirm('Are you sure?');
        //if(sessionStorage.getItem('username') != null){
            service.deleteMedicalTestResult(medicalTestResultId).then(()=>{
             result= `MedicalTestResult with id = ${medicalTestResultId} is deleted.`
             alert(`MedicalTestResult with id : ${medicalTestResultId} is deleted`);
             //navigate('/student/home');
            }).catch((error)=>{
                result= `There is some problem deleting the record.`
            })
    // }else{
    //     alert('Unauthorised access to page');
    //     navigate('/student/login');
    // }
})
    return(
        <div className="alert alert-danger">MedicalTestResult with id = {medicalTestResultId} deleted.</div>
    );
}
export default DeleteMedicalTestResult;