import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import PatientAdminImg from "../../layout/component/PatientAdminImg";
import Patient from "../model/Patient";
import PatientService from "../service/PatientService";



class AddPatient extends Component {
//  const backStyle=styled.button``
//     backgroundColor:#FFCD60;
//     `;
// }
//  UpdateStyle={
//    backgroundColor:"#FF7777"
// }
//  LogoutStyle={
//    backgroundColor:"#54436B",
//    color:"white",
//  }
  service = new PatientService();
  // navigate = useNavigate();
  
  state = {
    patient: new Patient(),
    //departments: [],
    error:{
            idError:"",
            nameError:"",
            ageError:"",
            genderError:"",
            addressError:"",
            diseaseError:"",
            bloodGroupError:"",
            dateOfConsultationError:"",
            numberError:""
    }
      
  };

  // componentDidMount() {
  //   this.service.getAllDepartment()
  //     .then((result) => {
  //       let depts = result.data.map((dept) => {
  //         return { value: dept.departmentId, display: dept.departmentName };
  //       });
  //       this.setState({
  //         departments: [{ value: "-1", display: "Select Department" }].concat(
  //           depts
  //         ),
  //       });
  //     })
  //     .catch((error) => {
  //       alert(JSON.stringify("error: " + error));
  //     });
  // }
  validate=()=>{
    
      let flag=true;
      let error = {};
      if(!this.state.patient.patientId){
        error.idError = "Patient Id is required";
        flag=false;
      }
      if(!this.state.patient.patientName){
        error.nameError = "Patient Name is required";
        flag=false;
      }
      if(!this.state.patient.patientAge){
        error.ageError = "Patient Age is required";
        flag=false;
      }
      if(!this.state.patient.patientAddress){
        error.addressError = "Patient Address is required";
        flag=false;
      }
      if(!this.state.patient.patientGender){
        error.genderError = "Patient Gender is required";
        flag=false;
      }
      if(!this.state.patient.bloodGroup){
        error.bloodGroupError = "Patient Blood Group is required";
        flag=false;
      }
      if(!this.state.patient.disease){
        error.diseaseError = "Patient Disease is required";
        flag=false
      }
      if(!this.state.patient.dateOfConsultation){
        error.dateOfConsultationError = "Date Of consultation is required";
        flag=false;
      }
      if(!this.state.patient.patientContactNumber){
        error.numberError = "Contact NUmber is required";
        flag=false;
      }
      this.setState({error: error})
      return flag;
    
    } ;

  handleSubmit = async (event) => {
    
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
    this.service.addPatient(this.state.patient).then(()=>{
              alert('Patient record is added')
                      this.setState({patient: {}})
                      //navigate('/patient/home');
                  }).catch((error)=>{
                      alert(error);
                  })
                      
                       
               
          
  };

  render() {
    return (
      <div>
      <div className="container">
        <PatientAdminImg/>
      <form onSubmit={this.handleSubmit}>
        <h1 className="mt-5">
            ADD PATIENT
         </h1>
             <div className="form-group mr2">  
       <label >Patient Id</label>
      <input className="form-control"  type="text" id="patientId" placeholder="Enter Patient Id"
        value= {this.state.patient.patientId}
        onChange={ (e) => {
            this.setState({
               patient:{
                    ...this.state.patient,
                    patientId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div>
      <label >Patient Name</label>
      <input className="form-control" type="text" id="patientName" placeholder="Enter Patient Name"
      value={this.state.patient.patientName}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              patientName: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.nameError}</div>
     <div>
      <label >Patient Age</label>
      <input className="form-control" type="text" id="patientAge" placeholder="Enter Patient Age"
      value={this.state.patient.patientAge}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              patientAge: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.ageError}</div>
     </div>
     <div>
      <label >Patient Gender</label>
      <input className="form-control" type="text" id="patientGender" placeholder="Enter Patient Gender"
      value={this.state.patient.patientGender}
      onChange = { (e) =>
      {
         this.setState( { patient:  { 
            ...this.state.patient,
              patientGender: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.genderError}</div>
     <div>
      <label >Contact Number</label>
      <input className="form-control" type="text" id="patientNumber" placeholder="Enter Patient Number"
      value={this.state.patient.patientContactNumber}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              patientContactNumber: e.target.value
          }} )
      } } />
       <div className="alert-danger mt-2">{this.state.error.numberError}</div>
     </div>
     <div>
      <label >Date Of Consultation</label>
      <input className="form-control" type="date" id="date" placeholder="Enter Date of consultation"
      value={this.state.patient.dateOfConsultation}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              dateOfConsultation: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.dateOfConsultationError}</div>
     </div>
     <div>
      <label >Blood Group</label>
      <input className="form-control" type="text" id="bloodGroup" placeholder="Enter Patient BloodGroup"
      value={this.state.patient.bloodGroup}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              bloodGroup: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.bloodGroupError}</div>
     </div>
     <div>
      <label >Patient Address</label>
      <input className="form-control" type="text" id="patientAddress" placeholder="Enter Patient Address"
      value={this.state.patient.patientAddress}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              patientAddress: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.addressError}</div>
     </div>
     <div>
      <label >Patient Disease</label>
      <input className="form-control" type="text" id="disease" placeholder="Enter Patient Disease"
      value={this.state.patient.disease}
      onChange = { (e) =>
      {
          this.setState( { patient:  { 
            ...this.state.patient,
              disease: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.diseaseError}</div>
     </div>

        <button type="submit"  className="btn btn-primary mt-3">
          Add Patient
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-info mt-3 ml-3" s to={`/patient/patientAdmin`}>Back</Link>

       
            <Link className="btn btn-dark  mt-3 ml-3"  to='/user/logout'>Logout</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddPatient;