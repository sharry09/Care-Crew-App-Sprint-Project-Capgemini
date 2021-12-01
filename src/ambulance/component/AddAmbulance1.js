import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AmbulanceService from "../service/AmbulanceService";
import Ambulance from "../model/Ambulance";
import Contact from "../../layout/component/Contact";
import AmbBookImg from "../../layout/component/AmbBookImg";
class AddAmbulance1 extends Component {
  service = new AmbulanceService();
  // navigate = useNavigate();
  
  state = {
    ambulance: new Ambulance(),
   
    error:{
            idError:"",
            contactError:"",
            nameError:""
    }   
  };

  validate=()=>{
    
      let flag=true;
      let error = {};
      if(!this.state.ambulance.ambulanceId){
        error.idError = "Ambulance Id is required";
        flag=false;
      }
      if(!this.state.ambulance.ambulanceContactNumber){
        error.contactError = "Ambulance contact is required";
        flag=false;
      }
      if(!this.state.ambulance.driverName){
        error.nameError = "Ambulance Driver name is required";
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
    this.service.addAmbulance(this.state.ambulance).then(()=>{
              alert('Ambulance record is added')
                      this.setState({ambulance: {}})
                      //navigate('/ambulance/home');
                  }).catch((error)=>{
                      alert(error);
                  })
     
  };

  render() {
    return (
      <div>

      <div className="container">
< AmbBookImg/>
      <form onSubmit={this.handleSubmit}>
        <h1 className="mt-5">ADD AMBULANCE</h1>
             <div className="form-group mr2">  
       <label >Patient Id</label>
      <input className="form-control"  type="text" id="ambulanceId" placeholder="Enter Ambulance Id"
        value= {this.state.ambulance.ambulanceId}
        onChange={ (e) => {
            this.setState({
              ambulance:{
                    ...this.state.ambulance,
                    ambulanceId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div>
      <label >Contact Number</label>
      <input className="form-control" type="text" id="ambulanceContactNumber" placeholder="Enter Ambulance Contact Number"
      value={this.state.ambulance.ambulanceContactNumber}
      onChange = { (e) =>
      {
          this.setState( { ambulance:  { 
            ...this.state.ambulance,
            ambulanceContactNumber: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.contactError}</div>
     <div>
      <label >Driver Name</label>
      <input className="form-control" type="text" id="driverName" placeholder="Enter Driver Name"
      value={this.state.ambulance.driverName}
      onChange = { (e) =>
      {
          this.setState( { ambulance:  { 
            ...this.state.ambulance,
            driverName: e.target.value
          }} )
      } } />
      </div>
      <div className="alert-danger mt-2">{this.state.error.nameError}</div>

        <button type="submit" className="btn btn-lg  btn-dark mt-3">
          Add Ambulance
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-lg btn-info mt-3 ml-3" to={`/amb/ambAdmin`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddAmbulance1;
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import { Link } from "react-router-dom";
// import AmbulanceService from "../service/AmbulanceService";
// import Ambulance from "../model/Ambulance";

// function AddAmbulance1(){
//     const[state, setState] = useState({ambulance: new Ambulance()});
//   let service = new AmbulanceService();
//   let {ambulanceId} = useParams();
//   const navigate = useNavigate();
  
// //   useEffect(()=>{

// //    service.findAmbulance(ambulanceId).then((result)=>{
// //       setState({ambulance: result.data})
// //    }).catch((error)=>{
// //         alert(error);
// //    })
// // },[]);  
//     return(
//         <form>
//      <div>
//       <label >ambulance Id</label>
//       <input className="form-control"  type="text" id="ambulanceId" placeholder="Enter ambulance Id"
//         value= {state.ambulance.ambulanceId}
//         onChange={ (e) => {
//             setState({
//                 ambulance:{
//                     ...state.ambulance,
//                     ambulanceId: e.target.value
//                 }
//             })
//         }}
//         />
//       </div>
//       <div>
//       <label >ambulance ContactNumber</label>
//       <input className="form-control" type="text" id="ambulancecontactNumber" placeholder="Enter ambulance Contact Number"
//       value={state.ambulance.ambulanceContactNumber}
//       onChange = { (e) =>
//       {
//           setState( { ambulance:  { 
//             ...state.ambulance,
//             ambulanceContactNumber: e.target.value
//           }} )
//       } } />
//      </div>
//      <div>
//       <label >Driver Name</label>
//       <input className="form-control" type="text" id="driverName" placeholder="Enter Driver Name"
//       value={state.ambulance.driverName}
//       onChange = { (e) =>
//       {
//           setState( { ambulance:  { 
//             ...state.ambulance,
//             driverName: e.target.value
//           }} )
//       } } />
//      </div>
    
//     <button className="btn btn-outline-primary mt-3" onClick={
//         (e) => {
//             e.preventDefault();
//             service.addAmbulance(state.ambulance).then(()=>{
//                 alert('ambulance record is added')
//                 setState({ ambulance: {}})
//                 navigate('/ambulance/home');
//             }).catch((error)=>{
//                 alert(error);
//             })
                
                 
//          }
//     }>Add ambulance</button>
//     <Link className="btn btn-outline-primary mt-3 ml-3" to={`/home`}>Cancel</Link>
//       </form>
//     );


// }
// export default AddAmbulance1;