import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import TreatmentHistory from "../model/TreatmentHistory";
import HospitalService from "../service/HospitalService";
import Contact from "../../layout/component/Contact";
import HospAdminImg from "../../layout/component/HospAdminImg";


class AddTreatmentHistory extends Component {
  service = new HospitalService();
  // navigate = useNavigate();
  
  state = {
    treatmentHistory: new TreatmentHistory(),
    //departments: [],
    error:{
            idError:"",
            nameError:"",
            genderError:"",
            treatedByError:"",
            diseaseError:"",
            prescriptedMedicineError:"",
           
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
      if(!this.state.treatmentHistory.patientId){
        error.idError = "Patient Id is required";
        flag=false;
      }
      if(!this.state.treatmentHistory.patientName){
        error.nameError = "Patient Name is required";
        flag=false;
      }
      if(!this.state.treatmentHistory.patientGender){
        error.genderError = "Patient Gender is required";
        flag=false;
      }
      if(!this.state.treatmentHistory.treatedBy){
        error.treatedByError = "Treated By is required";
        flag=false;
      }
      if(!this.state.treatmentHistory.disease){
        error.diseaseError = "Patient Disease is required";
        flag=false
      }
      if(!this.state.treatmentHistory.prescriptedMedicine){
        error.prescriptedMedicineError = "Prescripted Medicine is required";
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
    this.service.addTreatmentHistory(this.state.treatmentHistory).then(()=>{
              alert('TreatmentHistory record is added')
                      this.setState({treatmentHistory: {}})
                      //navigate('/patient/home');
                  }).catch((error)=>{
                      alert(error);
                  })
                      
                       
               
          
  };

  render() {
    return (
      <div>
      <div className="container">
        <HospAdminImg/>
              <form onSubmit={this.handleSubmit}>
        <h1>
            <span className="badge badge-dark mt-5">Add TreatmentHistory</span>
         </h1>
             <div className="form-group mr2">  
       <label >Patient Id</label>
      <input className="form-control"  type="text" id="patientId" placeholder="Enter Patient Id"
        value= {this.state.treatmentHistory.patientId}
        onChange={ (e) => {
            this.setState({
                treatmentHistory:{
                    ...this.state.treatmentHistory,
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
      value={this.state.treatmentHistory.patientName}
      onChange = { (e) =>
      {
          this.setState( { treatmentHistory:  { 
            ...this.state.treatmentHistory,
              patientName: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.nameError}</div>
     </div>
     <div>
      <label >Patient Gender</label>
      <input className="form-control" type="text" id="patientGender" placeholder="Enter Patient Gender"
      value={this.state.treatmentHistory.patientGender}
      onChange = { (e) =>
      {
         this.setState( { treatmentHistory:  { 
            ...this.state.treatmentHistory,
              patientGender: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.genderError}</div>
     <div>
      <label >Treated By</label>
      <input className="form-control" type="text" id="patientNumber" placeholder="Enter Doctor's Name"
      value={this.state.treatmentHistory.patientContactNumber}
      onChange = { (e) =>
      {
          this.setState( { treatmentHistory:  { 
            ...this.state.treatmentHistory,
              treatedBy: e.target.value
          }} )
      } } />
       <div className="alert-danger mt-2">{this.state.error.treatedByError}</div>
     </div>
     <div>
      <label >Disease</label>
      <input className="form-control"  type="text" id="disease" placeholder="Enter Disease"
      value={this.state.treatmentHistory.disease}
      onChange = { (e) =>
      {
          this.setState( { treatmentHistory:  { 
            ...this.state.treatmentHistory,
              disease: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.diseaseError}</div>
     </div>
     <div>
      <label >Prescripted Medicine</label>
      <input className="form-control" type="text" id="prescriptedMedicine" placeholder="Enter Prescripted Medicine"
      value={this.state.treatmentHistory.prescriptedMedicine}
      onChange = { (e) =>
      {
          this.setState( { treatmentHistory:  { 
            ...this.state.treatmentHistory,
            prescriptedMedicine: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.prescriptedMedicineError}</div>
     </div>
     

        <button  type="submit"   className="btn btn-lg btn-dark mt-3">
          Add TreatmentHistory
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-lg btn-info mt-3 ml-3" to={`/hospital/hospitalAdmin`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddTreatmentHistory;
// import  { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import Hospital from "../../hospital/model/Hospital";
// import TreatmentHistory from "../model/TreatmentHistory";
// import HospitalService from "../service/HospitalService";
// import HospAdminImg from "../../layout/component/HospAdminImg";
// import Contact from "../../layout/component/Contact";
//  function AddTreatmentHistory(){
//     const[state,setState] = useState({treatmentHistory: new TreatmentHistory()});

//     let service = new HospitalService();
//     const navigate = useNavigate();
    
//     useEffect(()=>{
//         if(sessionStorage.getItem('username') != null){
//             service.addTreatmentHistory().then(() =>{
//           navigate('/doctor/home');
//         }).catch((error)=>{
//             alert(error)
//         })
//         }else{
//             alert('REGISTER OR LOGIN TO PERFORM OPERATIONS');
//             navigate('/user/login');
//         }
//     },[])
    
//         return(
//             <div>
//             <div className="container">
//             <HospAdminImg/>
//             <form>
//                  <h1 className="mt-5">ADD TREATMENT HISTORY</h1>    
//             <div>
//                 <label for="patientId">Patient Id</label>
//                 <input className="form-control"  type="text" id="patientId" placeholder="Enter Patient Id"
//                 value={state.treatmentHistory.patientId}
//                 onChange= {(e)=>{
//                 setState({treatmentHistory :{
//                    ...state.treatmentHistory,patientId: e.target.value
//                 }
//                })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="patientName">Patient Name</label>
//                 <input className="form-control"  type="text" id="patientName" placeholder="Enter Patient Name "
//                 value={state.treatmentHistory.patientName}
//                 onChange = {(e)=>{
//                     setState({ treatmentHistory:{
//                        ...state.treatmentHistory, patientName: e.target.value
//                     }
//                     })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="patientGender">Patient Gender</label>
//                 <input className="form-control"  type="text" id="patientGender" placeholder="Enter Patient Gender"
//                 value={state.treatmentHistory.patientGender}
//                 onChange = {(e)=>{
//                    setState({treatmentHistory:{
//                        ...state.treatmentHistory,patientGender: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

//             <div>
//                 <label for="treatedBy">Treated By</label>
//                 <input className="form-control"  id="treatedBy" placeholder="Enter Doctor's Name"
//                 value={state.treatmentHistory.treatedBy}
//                 onChange = {(e)=>{
//                    setState({treatmentHistory:{
//                        ...state.treatmentHistory,treatedBy: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="disease">Disease</label>
//                 <input className="form-control"  id="disease" placeholder="Enter Disease"
//                 value={state.treatmentHistory.disease}
//                 onChange = {(e)=>{
//                    setState({treatmentHistory:{
//                        ...state.treatmentHistory,disease: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

//             <div>
//                 <label for="prescriptedMedicine">Prescripted Medicine</label>
//                 <input className="form-control"  id="prescriptedMedicine" placeholder="Enter Prescripted Medicine"
//                 value={state.treatmentHistory.prescriptedMedicine}
//                 onChange = {(e)=>{
//                    setState({treatmentHistory:{
//                        ...state.treatmentHistory,prescriptedMedicine: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>
//             <button className="btn btn-info mt-3" onClick={
//                 (e) => {
//                     e.preventDefault();  //to prevent reloading of page 
//                     service.addTreatmentHistory(state.treatmentHistory)
//                     .then((result) => {
//                           alert('Treatment History is added in database.');
//                          // navigate('/treatmentHistory/home');
//                     })
//                     .catch((error)=>{
//                         alert(error)
//                     })   
//                 }
//             }>Add Treatment History</button>
//             <Link className="btn btn-primary mt-3 ml-3" to='/hospital/hospitalAdmin'>Back</Link>
//             <Link className="btn btn-dark mt-3 ml-3" to='/user/logout'>Logout</Link>
//         </form>
//         </div>
//         <Contact/>
//         </div>
//         )
//     }


// export default AddTreatmentHistory;