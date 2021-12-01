import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import PatientAdminImg from "../../layout/component/PatientAdminImg";
import Patient from "../model/Patient";
import PatientService from "../service/PatientService";



function UpdatePatient(){
  const[state, setState] = useState({patient: new Patient()});
  let service = new PatientService();
  let {patientId} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{   
    //if(sessionStorage.getItem('username')!=null){
   service.findPatientById(patientId).then((result)=>{
      setState({patient: result.data})
   }).catch((error)=>{
        alert(error);
   })
//   }else{
//     navigate('/student/login');
//     alert('Unauthorised Access to page.');
//   }
},[]);  
  return(
    <div>
    <div className="container">
      <PatientAdminImg/>
      <h1 className="mt-5">UPDATE PATIENTS OF CARE CREW</h1>
    <form>
     <div>
      <label >Patient Id</label>
      <input className="form-control"  type="text" id="patientId" placeholder="Enter Patient Id"
        value= {state.patient.patientId}
        readOnly={true}
        />
      </div>
      <div>
      <label >Patient Name</label>
      <input className="form-control" type="text" id="patientName" placeholder="Enter Patient Name"
      value={state.patient.patientName}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              patientName: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Patient Age</label>
      <input className="form-control" type="text" id="patientAge" placeholder="Enter Patient Age"
      value={state.patient.patientAge}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              patientAge: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Patient Gender</label>
      <input className="form-control" type="text" id="patientGender" placeholder="Enter Patient Gender"
      value={state.patient.patientGender}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              patientGender: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Contact Number</label>
      <input className="form-control" type="text" id="patientNumber" placeholder="Enter Patient Number"
      value={state.patient.patientContactNumber}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              patientContactNumber: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Date Of Consultation</label>
      <input className="form-control" type="date" id="date" placeholder="Enter Date of consultation"
      value={state.patient.dateOfConsultation}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              dateOfConsultation: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Blood Group</label>
      <input className="form-control" type="text" id="bloodGroup" placeholder="Enter Patient BloodGroup"
      value={state.patient.bloodGroup}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              bloodGroup: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Patient Address</label>
      <input className="form-control" type="text" id="patientAddress" placeholder="Enter Patient Address"
      value={state.patient.patientAddress}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              patientAddress: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Patient Disease</label>
      <input className="form-control" type="text" id="disease" placeholder="Enter Patient Disease"
      value={state.patient.disease}
      onChange = { (e) =>
      {
          setState( { patient:  { 
            ...state.patient,
              disease: e.target.value
          }} )
      } } />
     </div>
    <button className="btn  btn-lg btn-info mt-3" onClick={
        (e) => {
            e.preventDefault();
            service.updatePatient(state.patient).then(()=>{
                alert('Patient record is updated')
                setState({ patient: {}})
                navigate('/patient/view-patient');
                          }).catch((error)=>{
                alert(error);
            })
                
                 
         }
    }>Update Patient</button>
    <Link className="btn  btn-lg btn-dark mt-3 ml-3" to={`/patient/view-patient`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
}
export default UpdatePatient;