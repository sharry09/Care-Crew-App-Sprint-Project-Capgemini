import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import HospAdminImg from "../../layout/component/HospAdminImg";
import MedicalTestResult from "../model/MedicalTestResult";
import LaboratoryService from "../service/LaboratoryService";
import Contact from "../../layout/component/Contact";

function UpdateMedicalTestResult(){
    let UpdateStyle={
        backgroundColor:"#B42B51",
        color:"white",
    }
    let backStyle={
        backgroundColor:"#DBD0C0",
    }
    const[state,setState] = useState({medicalTestResult: new MedicalTestResult()});
    let service = new LaboratoryService();
    const {medicalTestResultId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        //if(sessionStorage.getItem('username') != null){
        // alert('Calling useEffect');
         service.findMedicalTestResultById(medicalTestResultId).then((result)=>{
            setState({medicalTestResult: result.data})
        //navigate('/student/home');
           }).catch((error)=>{
               alert(error);
           })
    // }else{
    //     alert('Unauthorized access to page');
    //     navigate('/student/login');
    // }
}, [])
    return(
        <div>
        <div className="container">
   <HospAdminImg/>
        <form>
        <h1 className="mt-5">UPDATE MEDICAL TEST RESULT</h1>    
        <div>
            <label for="medicalTestResultId">MedicalTestResult Id</label>
            <input className="form-control"  type="text" id="medicalTestResultId" placeholder="Enter MedicalTestResult Id"
            value={state.medicalTestResult.medicalTestResultId}
            readOnly={true}
            ></input>
        </div>
        <div>
            <label for="medicalTestName">MedicalTest Name</label>
            <input className="form-control"  type="text" id="medicalTestName" placeholder="Enter MedicalTest Name"
            value={state.medicalTestResult.medicalTestName}
            onChange = {(e)=>{
                setState({ medicalTestResult:{
                   ...state.medicalTestResult, medicalTestName: e.target.value
                }
                })
            }}
            ></input>
        </div>
        <div>
            <label for="patientName">Patient Name</label>
            <input className="form-control"  type="text" id="patientName" placeholder="Enter Patient Name"
            value={state.medicalTestResult.patientName}
            onChange = {(e)=>{
               setState({medicalTestResult:{
                   ...state.medicalTestResult,patientName: e.target.value
               }
               })
           }}
            ></input>
        </div>
        <div>
            <label for="testCondition">Test Condition</label>
            <input className="form-control"  type="text" id="testCondition" placeholder="Enter  TestCondition"
            value={state.medicalTestResult.testCondition}
            onChange = {(e)=>{
               setState({medicalTestResult:{
                   ...state.medicalTestResult,testCondition: e.target.value
               }
               })
           }}
            ></input>
        </div>
        <div>
            <label for="testPerformedBy">Test PerformedBy</label>
            <input className="form-control"  type="text" id="testPerformedBy" placeholder="Enter Test PerformedBy"
            value={state.medicalTestResult.testPerformedBy}
            onChange = {(e)=>{
               setState({medicalTestResult:{
                   ...state.medicalTestResult,testPerformedBy: e.target.value
               }
               })
           }}
            ></input>
        </div>
        <button className="btn btn-lg mt-3" style={UpdateStyle} onClick={
            (e) => {
                e.preventDefault();
               service.updateMedicalTestResult(state.medicalTestResult).then(()=>{
                  alert('MedicalTestResult record is updated in the database.')
                  setState({medicalTestResult: {} })
                 navigate('/laboratory/medicalTestResult/view');
               }).catch((error)=>{
                alert(error);
            })
            }
        }>Update MedicalTest Result</button>
        <Link className="btn btn-lg mt-3 ml-3" style={backStyle} to='/laboratory/medicalTestResult/view'>Back</Link>
    </form>
    </div>
    <Contact/>
    </div>
    );
}
export default UpdateMedicalTestResult;