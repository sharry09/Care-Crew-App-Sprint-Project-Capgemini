import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import Doctor from "../model/Doctor";
import DoctorService from "../service/DoctorService";
import HospAdminImg from "../../layout/component/HospAdminImg";


class AddDoctor1 extends Component {
  service = new DoctorService();
  // navigate = useNavigate();
  
  state = {
    doctor: new Doctor(),
    //departments: [],
    error:{
            idError:"",
            nameError:"",
            contactNumberError:"",
            doctorShiftTimeError:"",
            doctorSpecialityError:"",
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
      if(!this.state.doctor.doctorId){
        error.idError = "Doctor Id is required";
        flag=false;
      }
      if(!this.state.doctor.doctorName){
        error.nameError = "Doctor Name is required";
        flag=false;
      }
      if(!this.state.doctor.contactNumber){
        error.contactNumberError = "Contact Number is required";
        flag=false;
      }
      if(!this.state.doctor.doctorSpeciality){
        error.doctorSpecialityError = "Doctor Speciality is required";
        flag=false;
      }
      if(!this.state.doctor.doctorShiftTime){
        error.doctorShiftTimeError = "Doctor Shift Time is required";
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
    this.service.addDoctor(this.state.doctor).then(()=>{
              alert('Doctor record is added')
                      this.setState({doctor: {}})
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
            <span className=" mt-5 badge badge-dark">Add Doctor</span>
         </h1>
            <div>
                <label for="doctorId"  className="mt-3">Doctor Id</label>
                <input className="form-control"  type="text" id="doctorId" placeholder="Enter doctor Id"
                value={this.state.doctor.doctorId}
                onChange= {(e)=>{
                    this.setState({doctor :{
                   ...this.state.doctor,doctorId: e.target.value
                }
               })
                }}
                ></input>
            </div>
            <div className="alert-danger mt-2">{this.state.error.idError}</div>
            <div>
                <label for="doctor"> Doctor Name</label>
                <input className="form-control"  type="text" id="doctorName" placeholder="Enter doctor name"
                value={this.state.doctor.doctorName}
                onChange = {(e)=>{
                    this.setState({doctor:{
                       ...this.state.doctor,doctorName: e.target.value
                   }
                   })
               }}
                ></input>
            </div>
            <div className="alert-danger mt-2">{this.state.error.nameError}</div>

            <div>
                <label for="contactNumber"> Contact Number</label>
                <input className="form-control"  type="text" id="contactNumber" placeholder="Enter contact number"
                value={this.state.doctor.contactNumber}
                onChange = {(e)=>{
                    this.setState({doctor:{
                       ...this.state.doctor,contactNumber: e.target.value
                   }
                   })
               }}
                ></input>
            </div>
            <div className="alert-danger mt-2">{this.state.error.contactNumberError}</div>
            
            <div>
                <label for="doctorSpeciality"> Doctor Speciality</label>
                <select className="form-control"  type="text" id="doctorSpeciality" 
                value={this.state.doctor.doctorSpeciality}
                onChange = {(e)=>{
                    this.setState({doctor:{
                       ...this.state.doctor,doctorSpeciality: e.target.value
                   }
                   })
               }}
                >
                  <option value="SELECT">SELECT</option>
        <option value="CARDIOLOGIST">CARDIOLOGIST</option>
        <option value="NEUROLOGIST">NEUROLOGIST</option>
        <option value="DENTIST">DENTIST</option>
        <option value=" PEDIATRICIAN"> PEDIATRICIAN</option>
        <option value="DERMATOLOGIST">DERMATOLOGIST</option>
        <option value="ENDOCRINOLOGIST">ENDOCRINOLOGIST</option>
        <option value="PSYCHIATRIST"> PSYCHIATRIST</option>
        <option value="RHEUMATOLOGIST">RHEUMATOLOGIST</option>
        <option value="ALLERGIST">ALLERGIST</option>
        </select>
            </div>
            <div className="alert-danger mt-2">{this.state.error.doctorSpecialityError}</div>

            <div>
                <label for="doctorShiftTime"> Doctor ShiftTime</label>
                <select className="form-control"  type="text" id="doctorShiftTime" 
                value={this.state.doctor.doctorShiftTime}
                onChange = {(e)=>{
                    this.setState({doctor:{
                       ...this.state.doctor,doctorShiftTime: e.target.value
                   }
                   })
               }}
                >
                    <option value="SELECT">SELECT</option>
        <option value="MORNING">MORNING</option>
        <option value="AFTERNOON">AFTERNOON</option>
        <option value="EVENING">EVENING</option>
        <option value="NIGHT">NIGHT</option>
        </select>
            </div>
            <div className="alert-danger mt-2">{this.state.error.doctorShiftTimeError}</div>
            
            <button type="submit" className="btn btn-lg btn-info mt-3">
          Add Doctor
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-lg btn-dark mt-3 ml-3" to={`/doctor/doctorAdmin`}>Back</Link>
        </form>
         </div>
         <Contact/>
         </div>
    );
        }
    }
export default AddDoctor1;

// import  { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import Doctor from "../model/Doctor";
// import DoctorService from "../service/DoctorService";



//  function AddDoctor1(){
//     const[state,setState] = useState({doctor: new Doctor(),doctorSpeciality:[],doctorShiftTime:[]});

//     let service = new DoctorService();
//     const navigate = useNavigate();
    
//     // useEffect(()=>{
//     //     if(sessionStorage.getItem('username') != null){
//     //       navigate('/student/home');
//     //     }else{
//     //         alert('Unauthorized access to page');
//     //         navigate('/student/login');
//     //     }
//     // })
    
//         return(
//             <form>
//             <div>
//                 <label for="doctorId">Doctor Id</label>
//                 <input className="form-control"  type="text" id="doctorId" placeholder="Enter doctor Id"
//                 value={state.doctor.doctorId}
//                 onChange= {(e)=>{
//                 setState({doctor :{
//                    ...state.doctor,doctorId: e.target.value
//                 }
//                })
//                 }}
//                 ></input>
//             </div>
          
//             <div>
//                 <label for="doctor"> Doctor Name</label>
//                 <input className="form-control"  type="text" id="doctorName" placeholder="Enter doctor name"
//                 value={state.doctor.doctorName}
//                 onChange = {(e)=>{
//                    setState({doctor:{
//                        ...state.doctor,doctorName: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>


//             <div>
//                 <label for="contactNumber"> Contact Number</label>
//                 <input className="form-control"  type="text" id="contactNumber" 
//                 value={state.doctor.contactNumber}
//                 onChange = {(e)=>{
//                    setState({doctor:{
//                        ...state.doctor,contactNumber: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>

            
//             <div>
//                 <label for="doctorSpeciality"> Doctor Specialty</label>
//                 <select className="form-control"  type="text" id="doctorSpeciality" 
//                 value={state.doctor.doctorSpeciality}
//                 onChange = {(e)=>{
//                    setState({doctor:{
//                        ...state.doctor,doctorSpeciality: e.target.value
//                    }
//                    })
//                }}
//                 >
//         <option value="CARDIOLOGIST">CARDIOLOGIST</option>
//         <option value="NEUROLOGIST">NEUROLOGIST</option>
//         <option value="DENTIST">DENTIST</option>
//         <option value=" PEDIATRICIAN"> PEDIATRICIAN</option>
//         <option value="DERMATOLOGIST">DERMATOLOGIST</option>
//         <option value="ENDOCRINOLOGIST">ENDOCRINOLOGIST</option>
//         <option value="PSYCHIATRIST"> PSYCHIATRIST</option>
//         <option value="RHEUMATOLOGIST">RHEUMATOLOGIST</option>
//         <option value="ALLERGIST">ALLERGIST</option>
//         </select>
//             </div>
           
//             <div>
//                 <label for="doctorShiftTime"> DoctorShiftTime</label>
//                 <select className="form-control"  type="text" id="doctorShiftTime" 
//                 value={state.doctor.doctorShiftTime}
//                 onChange = {(e)=>{
//                    setState({doctor:{
//                        ...state.doctor,doctorShiftTime: e.target.value
//                    }
//                    })
//                }}
//                 >
//         <option value="MORNING">MORNING</option>
//         <option value="AFTERNOON">AFTERNOON</option>
//         <option value="EVENING">EVENING</option>
//         <option value="NIGHT">NIGHT</option>
//         </select>
//             </div>

            
           
//             <button className="btn btn-outline-primary mt-3" onClick={
//                 (e) => {
//                     e.preventDefault();  //to prevent reloading of page 
//                     service.addDoctor(state.doctor)
//                     .then((result) => {
//                           alert('Doctor is added in database.');
//                           navigate('/doctor/home');
//                     })
//                     .catch((error)=>{
//                         alert(error)
//                     })   
                   
//                 }
//             }>AddDoctor</button>
//             <Link className="btn btn-outline-primary mt-3 ml-3" to='/doctor/home'>Cancel</Link>
//         </form>
//         )
//     }


// export default AddDoctor1;