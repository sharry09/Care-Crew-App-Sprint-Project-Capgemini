import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Doctor from "../../doctor/model/Doctor";
import HospitalService from "../service/HospitalService";
import Contact from "../../layout/component/Contact";
import HospAdminImg from "../../layout/component/HospAdminImg";



class AddDoctor extends Component {
  service = new HospitalService();
  // navigate = useNavigate();
  
  state = {
    doctor: new Doctor(),
    //departments: [],
    error:{
            idError:"",
            nameError:"",
            contactNumberError:"",
            doctorSpecialtyError:"",
            doctorShiftTimeError:""
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
        error.doc = "Doctor ShiftTime is required";
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
             <div className="form-group mr2">  
       <label className="mt-3">Doctor Id</label>
      <input className="form-control "  type="text" id="patientId" placeholder="Enter Doctor Id"
        value= {this.state.doctor.patientId}
        onChange={ (e) => {
            this.setState({
                doctor:{
                    ...this.state.doctor,
                    doctorId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div>
      <label >Doctor Name</label>
      <input className="form-control" type="text" id="doctorName" placeholder="Enter Doctor Name"
      value={this.state.doctor.doctorName}
      onChange = { (e) =>
      {
          this.setState( { doctor:  { 
            ...this.state.doctor,
            doctorName: e.target.value
          }} )
      } } />
     </div>
     <div className="alert-danger mt-2">{this.state.error.nameError}</div>
     <div>
      <label >Contact Number</label>
      <input className="form-control" type="text" id="contactNumber" placeholder="Enter Contact Number"
      value={this.state.doctor.contactNumber}
      onChange = { (e) =>
      {
          this.setState( { doctor:  { 
            ...this.state.doctor,
            contactNumber: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.contactNumberError}</div>
     </div>
     <div>
     <label>Doctor Speciality</label>
     <select className="form-control" type="text"  id="doctorSpeciality" placeholder="Enter Doctor Specialty"
                value={this.state.doctor.doctorSpeciality}
                onChange = {(e)=>{
                   this.setState({doctor:{
                       ...this.state.doctor,doctorSpeciality: e.target.value
                   }
                   })
               }}>
                   <option value="SELECT">SELECT</option>
                  <option value="CARDIOLOGIST">CARDIOLOGIST</option>
                
        <option value="NEUROLOGIST">NEUROLOGIST</option>
        <option value="DENTIST">DENTIST</option>
       <option value="PEDIATRICIAN">PEDIATRICIAN</option>
       <option value=" PEDIATRICIAN"> PEDIATRICIAN</option>
        <option value="DERMATOLOGIST">DERMATOLOGIST</option>
        <option value="ENDOCRINOLOGIST">ENDOCRINOLOGIST</option>
        <option value="PSYCHIATRIST"> PSYCHIATRIST</option>
        <option value="RHEUMATOLOGIST">RHEUMATOLOGIST</option>
 <option value="ALLERGIST">ALLERGIST</option>  
             
          
           ))     </select>
     </div>
     <div className="alert-danger mt-2">{this.state.error.doctorSpecialityError}</div>
     <div>
     <label> Doctor ShiftTime</label>
               <select type="text" className="form-control"  id="doctorShiftTime" placeholder="Enter Doctor Timings" required
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
         ))

        </select>
       <div className="alert-danger mt-2">{this.state.error.doctorShiftTimeError}</div>
     </div>
     

        <button type="submit"  className="btn btn-lg  btn-outline-dark mt-3">
          Add Doctor
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-lg btn-dark mt-3 ml-3" to={`/hospital/hospitalAdmin`}>Back</Link>
        <Link className="btn btn-lg btn-info mt-3 ml-3" to='/user/logout'>Logout</Link>
      </form>
      
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddDoctor;
// import  { useEffect, useState } from "react";

// import { Link, useNavigate } from "react-router-dom";
// import Doctor from "../../doctor/model/Doctor";
// import HospAdminImg from "../../layout/component/HospAdminImg";
// import HospitalService from "../service/HospitalService";
// import Contact from "../../layout/component/Contact";

//  function AddDoctor(){
//      let backStyle={
//          backgroundColor:"#FFCD60",
//      }
//      let UpdateStyle={
//         backgroundColor:"#FF7777"
//     }
//     let LogoutStyle={
//         backgroundColor:"#54436B",
//         color:"white",
//       }
//     const[state,setState] = useState({doctor: new Doctor(),doctorSpeciality: [] , doctorShiftTime:[]});

//     let service = new HospitalService();
//     const navigate = useNavigate();
    
//      useEffect(()=>{
//          if(sessionStorage.getItem('username') != null){
//             service.addDoctor().then(() =>{
//            navigate('/hospital/doctor/add');
//          }).catch((error)=>{
//              alert(error)
//          })}
//          else{
//          alert('REGISTER OR LOGIN TO PERFORM OPERATIONS');
//              navigate('/user/login');
//          }
//      },[])
    
//         return(
//             <div>
                  
//             <div className="container">
//              <HospAdminImg/>
//                 <h1 className="mt-5">ADD DOCTORS</h1>
//             <form>
//             <div >
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
//                 <label for="doctorName">Doctor Name</label>
//                 <input className="form-control"  type="text" id="doctorName" placeholder="Enter doctor Name"
//                 value={state.doctor.doctorName}
//                 onChange = {(e)=>{
//                     setState({ doctor:{
//                        ...state.doctor, doctorName: e.target.value
//                     }
//                     })
//                 }}
//                 ></input>
//             </div>
//             <div>
//                 <label for="contactNumber"> Doctor Contact Number</label>
//                 <input className="form-control"  type="text" id="contactNumber" placeholder="Enter Doctor contact number"
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
//                 <label for="doctorSpeciality"> Doctor Speciality</label>
//                 <select className="form-control" type="text"  id="doctorSpeciality" placeholder="Enter Doctor Specialty"
//                 value={state.doctor.doctorSpeciality}
//                 onChange = {(e)=>{
//                    setState({doctor:{
//                        ...state.doctor,doctorSpeciality: e.target.value
//                    }
//                    })
//                }}>
//                     <option value="SELECT">SELECT</option>
//                    <option value="CARDIOLOGIST">CARDIOLOGIST</option>
//                    <option value="NEUROLOGIST">NEUROLOGIST</option>
//                    <option value="DENTIST">DENTIST</option>
//         <option value="PEDIATRICIAN">PEDIATRICIAN</option>
//         <option value="DERMATOLOGIST">DERMATOLOGIST</option>
//         <option value="ENDOCRINOLOGIST">ENDOCRINOLOGIST</option>  
//         <option value="PSYCHIATRIST">PSYCHIATRIST</option>   
//         <option value="RHEUMATOLOGIST">RHEUMATOLOGIST</option>   
//         <option value="ALLERGIST">ALLERGIST</option>    
          
//           ))     </select>
//             </div>

           
//             <div>
//                 <label for="doctorShiftTime"> Doctor ShiftTime</label>
//                 <select type="text" className="form-control"  id="doctorShiftTime" placeholder="Enter Doctor Timings" required
//                 value={state.doctor.doctorShiftTime}
//                 onChange = {(e)=>{
//                    setState({doctor:{
//                        ...state.doctor,doctorShiftTime: e.target.value
//                    }
//                    })
//                }}
//                 >
//                      <option value="SELECT">SELECT</option>
//                     <option value="MORNING">MORNING</option>
//                     <option value="AFTERNOON">AFTERNOON</option>
//         <option value="EVENING">EVENING</option>

//         <option value="NIGHT">NIGHT</option>  
//         ))

//         </select>
//             </div>
//             <button className="btn  mt-3" style={UpdateStyle} onClick={
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
//             }>Add Doctor</button>
//             <Link className="btn  btn-lg mt-3 ml-3" style={backStyle} to='/hospital/hospitalAdmin'>Back</Link>
//             <Link className="btn  btn-lg mt-3 ml-3" style={LogoutStyle} to='/user/logout'>Logout</Link>
            
//         </form>
//         </div>
//         <Contact/>
//         </div>
//         )
//     }


// export default AddDoctor;