import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Hospital from "../model/Hospital";
import HospitalService from "../service/HospitalService";
import Contact from "../../layout/component/Contact";
import HospAdminImg from "../../layout/component/HospAdminImg";


class AddHospital extends Component {
  service = new HospitalService();
  // navigate = useNavigate();
  
  state = {
    hospital: new Hospital(),
    //departments: [],
    error:{
            idError:"",
            hospitalNameError:"",
            hospitalLocationError:"",
            hospitalContactError:"",
            noOfBedsError:"",
            treatmentPackagesError:""
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
      if(!this.state.hospital.hospitalId){
        error.idError = "Hospital Id is required";
        flag=false;
      }
      if(!this.state.hospital.hospitalName){
        error.hospitalNameError = "Hospital Name is required";
        flag=false;
      }
      if(!this.state.hospital.hospitalLocation){
        error.hospitalLocationError = "Hospital Location is required";
        flag=false;
      }
      if(!this.state.hospital.hospitalContact){
        error.hospitalContactError = "Hospital Contact is required";
        flag=false;
      }
      if(!this.state.hospital.noOfBeds){
        error.noOfBedsError = "Number of Beds is required";
        flag=false;
      }
      if(!this.state.hospital.treatmentPackages){
        error.treatmentPackagesError = "Treatment Packages is required";
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
    this.service.addHospital(this.state.hospital).then(()=>{
              alert('Hospital record is added')
                      this.setState({hospital: {}})
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
            <span className="badge badge-dark">Add Hospital</span>
         </h1>
             <div className="form-group mr2">  
       <label >Hospital Id</label>
      <input className="form-control"  type="text" id="hospitalId" placeholder="Enter Hospital Id"
        value= {this.state.hospital.hospitalId}
        onChange={ (e) => {
            this.setState({
                hospital:{
                    ...this.state.hospital,
                    hospitalId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div>
      <label>Hospital Name</label>
      <input className="form-control" type="text" id="hospitalName" placeholder="Enter Hospital Name"
      value={this.state.hospital.hospitalName}
      onChange = { (e) =>
      {
          this.setState( { hospital:  { 
            ...this.state.hospital,
            hospitalName: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.hospitalNameError}</div>
     <div>
      <label >Hospital Location</label>
      <input className="form-control" type="text" id="hospitalLocation" placeholder="Enter Hospital Location"
      value={this.state.hospital.hospitalLocation}
      onChange = { (e) =>
      {
          this.setState( { hospital:  { 
            ...this.state.hospital,
            hospitalLocation: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.hospitalLocationError}</div>
     </div>
     <div>
      <label >Hospital Contact</label>
      <input className="form-control" type="text" id="hospitalContact" placeholder="Enter Hospital Contact "
      value={this.state.hospital.hospitalContact}
      onChange = { (e) =>
      {
          this.setState( { hospital:  { 
            ...this.state.hospital,
            hospitalContact: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.hospitalContactError}</div>
     </div>
     <div>
      <label >Number of Beds</label>
      <input className="form-control" type="text" id="noOfBeds" placeholder="Enter Number of Beds"
      value={this.state.hospital.noOfBeds}
      onChange = { (e) =>
      {
          this.setState( { hospital:  { 
            ...this.state.hospital,
            noOfBeds: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.noOfBedsError}</div>
     </div>

     <div>
                <label>Treatment Packages</label>
                <select className="form-control"  id="treatmentPackages" 
                value={this.state.hospital.treatmentPackages}
               onChange = {(e)=>{
                    this.setState({hospital:{
                       ...this.state.hospital,treatmentPackages: e.target.value
                    }
                  })
            }}
         >
           <option value="SELECT">SELECT</option>
                 <option value="HEART_AND_ADVANCED_HEART_CHECK">HEART_AND_ADVANCED_HEART_CHECK</option>
        <option value="FULL_BODY_CHECKUP">FULL_BODY_CHECKUP</option>
         <option value="SENIOR_CITIZEN_CHECK">SENIOR_CITIZEN_CHECK</option>   
        <option value="OBESITY_CHECK">OBESITY_CHECK</option>
         <option value="KIDNEY_CHECK">KIDNEY_CHECK</option>
          
           ))
               </select>
               <div className="alert-danger mt-2">{this.state.error.treatmentPackagesError}</div>
           </div>
     

        <button type="submit"  className="btn btn-lg btn-primary mt-3" >
          Add Hospital
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
       <Link className="btn btn-lg btn-dark  mt-3 ml-3"  to='/hospital/hospitalAdmin'>Back</Link>
            <Link className="btn btn-lg btn-info mt-3 ml-3" to='/user/logout'>Logout</Link>
        
      </form>
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddHospital;
// import  { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import Hospital from "../../hospital/model/Hospital";
// import HospAdminImg from "../../layout/component/HospAdminImg";

// import HospitalService from "../service/HospitalService";
// import Contact from "../../layout/component/Contact";

//  function AddHospital(){
//     let backStyle={
//         backgroundColor:"#FFCD60",
//     }
//     let UpdateStyle={
//         backgroundColor:"#FF7777"
//     }
//     const[state,setState] = useState({hospital: new Hospital(), treatmentPackages:[]});

//     let service = new HospitalService();
//     const navigate = useNavigate();
    
//     useEffect(()=>{
//         if(sessionStorage.getItem('username') != null){
//             service.addHospital().then(() =>{
//           navigate('/hospital/add');
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
//             {/* <NavBar/> */}
          
//             <div className="container">
//             <HospAdminImg/> 
//             <h1 className="mt-5">ADD HOSPITAL</h1>    
//             <form>
//               <div>
//                 <label for="hospitalId">Hospital Id</label>
//                 <input className="form-control"  type="text" id="doctorId" placeholder="Enter Hospital Id"
//                 value={state.hospital.hospitalId}
//                 onChange= {(e)=>{
//                 setState({hospital :{
//                    ...state.hospital,hospitalId: e.target.value
//                 }
//                })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="hospitalName">Hospital Name</label>
//                 <input className="form-control"  type="text" id="hospitalName" placeholder="Enter Hospital Name "
//                 value={state.hospital.hospitalName}
//                 onChange = {(e)=>{
//                     setState({ hospital:{
//                        ...state.hospital, hospitalName: e.target.value
//                     }
//                     })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="hospitalLocation">Hospital Location</label>
//                 <input className="form-control"  type="text" id="doctorContactNumber" placeholder="Enter Hospital Location"
//                 value={state.hospital.hospitalLocation}
//                 onChange = {(e)=>{
//                    setState({hospital:{
//                        ...state.hospital,hospitalLocation: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

//             <div>
//                 <label for="hospitalContact">Hospital Contact</label>
//                 <input className="form-control"  id="hospitalContact" placeholder="Enter Hospital Contact"
//                 value={state.hospital.hospitalContact}
//                 onChange = {(e)=>{
//                    setState({hospital:{
//                        ...state.hospital,hospitalContact: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="noOfBeds">Number of Beds</label>
//                 <input className="form-control"  id="noOfBeds" placeholder="Enter Number Of Beds"
//                 value={state.hospital.noOfBeds}
//                 onChange = {(e)=>{
//                    setState({hospital:{
//                        ...state.hospital,noOfBeds: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

//             <div>
//                 <label for="treatmentPackages">TreatmentPackages</label>
//                 <select className="form-control"  id="treatmentPackages" 
//                 value={state.hospital.treatmentPackages}
//                 onChange = {(e)=>{
//                    setState({hospital:{
//                        ...state.hospital,treatmentPackages: e.target.value
//                    }
//                    })
//                }}
//                 >
//                   <option value="HEART_AND_ADVANCED_HEART_CHECK">HEART_AND_ADVANCED_HEART_CHECK</option>
//         <option value="FULL_BODY_CHECKUP">FULL_BODY_CHECKUP</option>
//         <option value="SENIOR_CITIZEN_CHECK">SENIOR_CITIZEN_CHECK</option>   
          
//             ))
//                 </select>
//             </div>
//             <button className="btn  mt-3" style={UpdateStyle} onClick={
//                 (e) => {
//                     e.preventDefault();  //to prevent reloading of page 
//                     service.addHospital(state.hospital)
//                     .then((result) => {
//                           alert('Hospital is added in database.');
//                          navigate('/hospital/view');
//                     })
//                     .catch((error)=>{
//                         alert(error)
//                     })   
//                 }
//             }>Add Hospital</button>
//             <Link className="btn  mt-3 ml-3" style={backStyle} to='/hospital/hospitalAdmin'>Back</Link>
//             <Link className="btn btn-dark mt-3 ml-3" to='/user/logout'>Logout</Link>
//         </form>
//         </div>
//         <Contact/>
//         </div>
//         )
//     }


// export default AddHospital;