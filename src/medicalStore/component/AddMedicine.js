import { Link } from "react-router-dom";
import Medicine from "../model/Medicine";
import MedicalStoreService from "../service/MedicalStoreService";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
import Contact from "../../layout/component/Contact";
import React, { Component } from "react";
class AddMedicine extends Component {
  service = new MedicalStoreService();
  state ={
    medicine: new Medicine(),
    error:{
        idError:"",
        nameError:"",

    }
      
  };
//   let {medicalStoreId} = useParams();
//   const navigate = useNavigate();
validate=()=>{
    
    let flag=true;
    let error = {};
    if(!this.state.medicine.medicineId){
      error.idError = " Id is required";
      flag=false;
    }
    if(!this.state.medicine.medicineName){
      error.nameError = "Name is required";
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
        this.service.addMedicine(this.state.medicine).then(()=>{
            alert('Medicine is added')
                    this.setState({medicine: {}})
                    //navigate('/patient/home');
                }).catch((error)=>{
                    alert(error);
                })
            };
                   


//   useEffect(()=>{
//     //if(sessionStorage.getItem('username')!=null){   
//    service.findMedicalStoreById(medicalStoreId).then((result)=>{
//       setState({medicalStore: result.data})
//       navigate('/medicalStore/home');
//    }).catch((error)=>{
//         alert(error);
//    })
// }
// else{
//     navigate('/student/login');
//     alert('Unauthorised access to page');
// }
// },[]);
render(){  
    return(
<div>
      <div className="container">
        <ViewCareCrewImg/>
       
        <form onSubmit={this.handleSubmit}>
            <h1>
            <span className="mt-5 badge badge-dark">Add Medicine</span>
         </h1>
            <div className="form-group mr2">
      <label >Medicine Id</label>
      <input className="form-control"  type="text" id="medicineId" placeholder="Enter medicine Id"
        value= {this.state.medicine.medicineId}
        onChange={ (e) => {
            this.setState({
                medicine:{
                    ...this.state.medicine,
                    medicineId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div className="mt-2">
      <label >Medicine Name</label>
      <input className="form-control" type="text" id="medicineName" placeholder="Enter medicine Name"
      value={this.state.medicine.medicineName}
      onChange = { (e) =>
      {
          this.setState( { medicine:  { 
            ...this.state.medicine,
            medicineName: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.nameError}</div>
     </div>
    <button className="btn btn-lg btn-dark mt-3">Add Medicine</button>
    <Link className="btn btn-lg btn-secondary mt-3 ml-3"  to={`/med/medAdmin`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );


}
}
export default AddMedicine;
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";
// import Medicine from "../model/Medicine";
// import MedicalStoreService from "../service/MedicalStoreService";


// function AddMedicine(){
//     const[state, setState] = useState({medicine: new Medicine()});
//   let service = new MedicalStoreService();
//   let {medicineId} = useParams();
//   const navigate = useNavigate();
  
//   useEffect(()=>{
//     //if(sessionStorage.getItem('username')!=null){   
//    service.getMedicineById(medicineId).then((result)=>{
//       setState({medicine: result.data})
//       navigate('/medicalStore/home');
//    }).catch((error)=>{
//         alert(error);
//    })
// // }
// // else{
// //     navigate('/student/login');
// //     alert('Unauthorised access to page');
// // }
// },[]);  
//     return(
//         <form>
//             <div>
//       <label >Medicine Id</label>
//       <input className="form-control"  type="text" id="medicineId" placeholder="Enter medicine Id"
//         value= {state.medicine.medicineId}
//         onChange={ (e) => {
//             setState({
//                 medicine:{
//                     ...state.medicine,
//                     medicineId: e.target.value
//                 }
//             })
//         }}
//         />
//       </div>
//       <div>
//       <label >Medicine Name</label>
//       <input className="form-control" type="text" id="medicineName" placeholder="Enter medicine Name"
//       value={state.medicine.medicineName}
//       onChange = { (e) =>
//       {
//           setState( { medicine:  { 
//             ...state.medicine,
//             medicineName: e.target.value
//           }} )
//       } } />
//      </div>
//     <button className="btn btn-outline-primary mt-3" onClick={
//         (e) => {
//             e.preventDefault();
//             service.addMedicine(state.medicine).then(()=>{
//                 alert('Medicine record is added')
//                 setState({medicine: {}})
//                 navigate('/medicalStore/home');
//             }).catch((error)=>{
//                 alert(error);
//             })
                
                 
//          }
//     }>Add Medicine</button>
//     <Link className="btn btn-outline-primary mt-3 ml-3" to={`/medicalStore/home`}>Cancel</Link>
//       </form>
//     );


// }
// export default AddMedicine;