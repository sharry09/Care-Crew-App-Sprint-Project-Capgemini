import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import MedicalTestResult from "../model/MedicalTestResult";
import LaboratoryService from "../service/LaboratoryService";
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";



class AddMedicalTestResult extends Component {
  service = new LaboratoryService();
  // navigate = useNavigate();
  
  state = {
    medicalTestResult: new MedicalTestResult(),
    //departments: [],
    error:{
            idError:"",
            medicalTestNameError:"",
            patientNameError:"",
            testConditionError:"",
            testPerformedByError:""
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
      if(!this.state.medicalTestResult.medicalTestResultId){
        error.idError = "MedicalTestResult Id is required";
        flag=false;
      }
      if(!this.state.medicalTestResult.medicalTestName){
        error.medicalTestNameError = "MedicalTest Name is required";
        flag=false;
      }
      if(!this.state.medicalTestResult.patientName){
        error.patientNameError = "Patient Name is required";
        flag=false;
      }
      if(!this.state.medicalTestResult.testCondition){
        error.testConditionError = "Test Condition is required";
        flag=false;
      }
      if(!this.state.medicalTestResult.testPerformedBy){
        error.testPerformedByError = "Test PerformedBy is required";
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
    this.service.addMedicalTestResult(this.state.medicalTestResult).then(()=>{
              alert('MedicalTestResult record is added')
                      this.setState({medicalTestResult: {}})
                      //navigate('/patient/home');
                  }).catch((error)=>{
                      alert(error);
                  })
                      
                       
               
          
  };

  render() {
    return (
      <div>
        <div className="container">
          <ViewCareCrewImg/>
      <form onSubmit={this.handleSubmit}>
        <h1>
            <span className="badge badge-dark mt-5">Add MedicalTestResult</span>
         </h1>
             <div className="form-group mr2">  
       <label >Doctor Id</label>
      <input className="form-control"  type="text" id="medicalTestResultId" placeholder="Enter MedicalTestResult Id"
        value= {this.state.medicalTestResult.medicalTestResultId}
        onChange={ (e) => {
            this.setState({
                medicalTestResult:{
                    ...this.state.medicalTestResult,
                    medicalTestResultId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div>
      <label >MedicalTest Name</label>
      <input className="form-control" type="text" id="medicalTestName" placeholder="Enter MedicalTest Name"
      value={this.state.medicalTestResult.medicalTestName}
      onChange = { (e) =>
      {
          this.setState( { medicalTestResult:  { 
            ...this.state.medicalTestResult,
            medicalTestName: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.medicalTestNameError}</div>
     <div>
      <label >Patient Name</label>
      <input className="form-control" type="text" id="patientName" placeholder="Enter Patient Name"
      value={this.state.medicalTestResult.patientName}
      onChange = { (e) =>
      {
          this.setState( { medicalTestResult:  { 
            ...this.state.medicalTestResult,
            patientName: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.patientNameError}</div>
     </div>
     <div>
      <label >Test Condition</label>
      <input className="form-control" type="text" id="testCondition" placeholder="Enter Test Condition"
      value={this.state.medicalTestResult.testCondition}
      onChange = { (e) =>
      {
          this.setState( { medicalTestResult:  { 
            ...this.state.medicalTestResult,
            testCondition: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.testConditionError}</div>
     </div>
     <div>
      <label >Test PerformedBy</label>
      <input className="form-control" type="text" id="performedBy" placeholder="Enter Doctor's Name"
      value={this.state.medicalTestResult.testPerformedBy}
      onChange = { (e) =>
      {
          this.setState( { medicalTestResult:  { 
            ...this.state.medicalTestResult,
            testPerformedBy: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.testPerformedByError}</div>
     </div>
     

        <button type="submit" className="btn btn-lg  btn-info mt-3">
          Add MedicalTestResult
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-dark btn-lg mt-3 ml-3" to={`/lab/labAdmin`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddMedicalTestResult;
// import  { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import MedicalTestResult from "../model/MedicalTestResult";
// import LaboratoryService from "../service/LaboratoryService";



//  function AddMedicalTestResult(){
//     const[state,setState] = useState({medicalTestResult: new MedicalTestResult()});

//     let service = new LaboratoryService();
//     //const navigate = useNavigate();
    
//     // useEffect(()=>{
//     //     if(sessionStorage.getItem('username') != null){
//         //   navigate('/doctor/home');
//     //     }else{
//     //         alert('Unauthorized access to page');
//     //         navigate('/student/login');
//     //     }
//     // })
    
//         return(
//             <form>
//             <div>
//                 <label for="medicalTestResultId">MedicalTestResult Id</label>
//                 <input className="form-control"  type="text" id="medicalTestResultId" placeholder="Enter MedicalTestResult Id"
//                 value={state.medicalTestResult.medicalTestResultId}
//                 onChange= {(e)=>{
//                 setState({medicalTestResult :{
//                    ...state.medicalTestResult,medicalTestResultId: e.target.value
//                 }
//                })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="medicalTestName">MedicalTest Name</label>
//                 <input className="form-control"  type="text" id="medicalTestName" placeholder="Enter MedicalTest Name "
//                 value={state.medicalTestResult.medicalTestName}
//                 onChange = {(e)=>{
//                     setState({ medicalTestResult:{
//                        ...state.medicalTestResult, medicalTestName: e.target.value
//                     }
//                     })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="patientName">Patient Name</label>
//                 <input className="form-control"  type="text" id="patientName" placeholder="Enter Patient Name"
//                 value={state.medicalTestResult.patientName}
//                 onChange = {(e)=>{
//                    setState({medicalTestResult:{
//                        ...state.medicalTestResult,patientName: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

//             <div>
//                 <label for="testCondition">Test Condition</label>
//                 <input className="form-control"  id="testCondition" placeholder="Enter Test Condition"
//                 value={state.medicalTestResult.testCondition}
//                 onChange = {(e)=>{
//                    setState({medicalTestResult:{
//                        ...state.medicalTestResult,testCondition: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="testPerformedBy">Test PerformedBy</label>
//                 <input className="form-control"  id="testPerformedBy" placeholder="Enter Doctor's Name"
//                 value={state.medicalTestResult.testPerformedBy}
//                 onChange = {(e)=>{
//                    setState({medicalTestResult:{
//                        ...state.medicalTestResult,testPerformedBy: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

//             <button className="btn btn-outline-primary mt-3" onClick={
//                 (e) => {
//                     e.preventDefault();  //to prevent reloading of page 
//                     service.addMedicalTestResult(state.medicalTestResult)
//                     .then((result) => {
//                           alert('MedicalTestResult is added in database.');
//                          // navigate('/treatmentHistory/home');
//                     })
//                     .catch((error)=>{
//                         alert(error)
//                     })   
//                 }
//             }>Add MedicalTestResult</button>
//             <Link className="btn btn-outline-primary mt-3 ml-3" to='/doctor/home'>Cancel</Link>
//         </form>
//         )
//     }


// export default AddMedicalTestResult;