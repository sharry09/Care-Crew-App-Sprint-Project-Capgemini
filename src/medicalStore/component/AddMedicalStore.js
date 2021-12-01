import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import MedicalStore from "../model/MedicalStore";
import MedicalStoreService from "../service/MedicalStoreService";
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";

class AddMedicalStore extends Component {
  service = new MedicalStoreService();
  state ={
    medicalStore: new MedicalStore(),
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
    if(!this.state.medicalStore.medicalStoreId){
      error.idError = " Id is required";
      flag=false;
    }
    if(!this.state.medicalStore.medicalStoreName){
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
        this.service.addMedicalStore(this.state.medicalStore).then(()=>{
            alert('MedicalStore record is added')
                    this.setState({medicalStore: {}})
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
            <span className=" mt-5 badge badge-dark">Add MedicalStore</span>
         </h1>
            <div className="form-group mr2">
      <label >MedicalStore Id</label>
      <input className="form-control"  type="text" id="medicalStoreId" placeholder="Enter MedicalStore Id"
        value= {this.state.medicalStore.medicalStoreId}
        onChange={ (e) => {
            this.setState({
                medicalStore:{
                    ...this.state.medicalStore,
                    medicalStoreId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div className="mt-2">
      <label >Medical Store Name</label>
      <input className="form-control" type="text" id="medicalStoreName" placeholder="Enter medicalStore Name"
      value={this.state.medicalStore.medicalStoreName}
      onChange = { (e) =>
      {
          this.setState( { medicalStore:  { 
            ...this.state.medicalStore,
            medicalStoreName: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.nameError}</div>
     </div>
    <button className="btn btn-lg btn-info mt-3">Add MedicalStore</button>
    <Link className="btn btn-lg btn-dark mt-3 ml-3" to={`/med/medAdmin`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );


}
}
export default AddMedicalStore;
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";
// import MedicalStore from "../model/MedicalStore";
// import MedicalStoreService from "../service/MedicalStoreService";


// function AddMedicalStore(){
//     const[state, setState] = useState({medicalStore: new MedicalStore()});
//   let service = new MedicalStoreService();
//   let {medicalStoreId} = useParams();
//   const navigate = useNavigate();
  
//   useEffect(()=>{
//     //if(sessionStorage.getItem('username')!=null){   
//    service.findMedicalStoreById(medicalStoreId).then((result)=>{
//       setState({medicalStore: result.data})
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
//       <label >MedicalStore Id</label>
//       <input className="form-control"  type="text" id="medicalStoreId" placeholder="Enter MedicalStore Id"
//         value= {state.medicalStore.medicalStoreId}
//         onChange={ (e) => {
//             setState({
//                 medicalStore:{
//                     ...state.medicalStore,
//                     medicalStoreId: e.target.value
//                 }
//             })
//         }}
//         />
//       </div>
//       <div>
//       <label >Medical Store Name</label>
//       <input className="form-control" type="text" id="medicalStoreName" placeholder="Enter medicalStore Name"
//       value={state.medicalStore.medicalStoreName}
//       onChange = { (e) =>
//       {
//           setState( { medicalStore:  { 
//             ...state.medicalStore,
//             medicalStoreName: e.target.value
//           }} )
//       } } />
//      </div>
//     <button className="btn btn-outline-primary mt-3" onClick={
//         (e) => {
//             e.preventDefault();
//             service.addMedicalStore(state.medicalStore).then(()=>{
//                 alert('Medical Store record is added')
//                 setState({medicalStore: {}})
//                 navigate('/medicalStore/home');
//             }).catch((error)=>{
//                 alert(error);
//             })
                
                 
//          }
//     }>Add MedicalStore</button>
//     <Link className="btn btn-outline-primary mt-3 ml-3" to={`/medicalStore/home`}>Cancel</Link>
//       </form>
//     );


// }
// export default AddMedicalStore;