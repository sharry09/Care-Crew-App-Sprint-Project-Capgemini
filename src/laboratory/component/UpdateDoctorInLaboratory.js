import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Doctor from "../../doctor/model/Doctor";
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
import LaboratoryService from "../service/LaboratoryService";



function UpdateDoctorInLaboratory(){
    let UpdateStyle={
        backgroundColor:"#B42B51",
        color:"white",
    }
    let backStyle={
        backgroundColor:"#DBD0C0",
    }
    // alert('Update doc in lab');
    const[state,setState] = useState({doctor: new Doctor(),doctorSpecialties: [] , doctorShiftTimes:[]});
    // alert('Update doc in lab 1');
    let service = new LaboratoryService();
    const {doctorId} = useParams();
    const navigate = useNavigate();
    // alert('Update doc in lab 2');
    useEffect(()=>{
        //if(sessionStorage.getItem('username') != null){
       
         service.findDoctorByIdInLaboratory(doctorId).then((result)=>{
           setState({doctor: result.data})
            //navigate('/doctor/home');
           }).catch((error)=>{
                alert(error);
           })
    // }else{
    //     alert('Unauthorized access to page');
    //     navigate('/doctor/login');
    // }
},[])
    return(
        <div>
            <div className="container">
        <ViewCareCrewImg/>
        <form>
        <h1 className="mt-5">UPDATE DOCTORS IN LAB</h1> 
        <div>
            <label for="doctorId">Doctor Id</label>
            <input className="form-control"  type="text" id="doctorId" placeholder="Enter doctor Id"
            value={state.doctor.doctorId}
            readOnly={true}
            ></input>
        </div>
        <div>
            <label for="doctorName">Doctor Name</label>
            <input className="form-control"  type="text" id="doctorName" placeholder="Enter doctor Name"
            value={state.doctor.doctorName}
            onChange = {(e)=>{
                setState({ doctor:{
                   ...state.doctor, doctorName: e.target.value
                }
                })
            }}
            ></input>
        </div>

        <div>
            <label for="contactNumber">Doctor Contact Number</label>
            <input className="form-control"  type="text" id="contactNumber" placeholder="Enter contactNumber"
            value={state.doctor.contactNumber}
            onChange = {(e)=>{
               setState({doctor:{
                   ...state.doctor,contactNumber: e.target.value
               }
               })
           }}
            ></input>
        </div>
        <div>
                <label for="doctorSpeciality"> Doctor Speciality</label>
                <select className="form-control" type="text"  id="doctorSpeciality" placeholder="Enter Doctor Specialty"
                value={state.doctor.doctorSpeciality}
                onChange = {(e)=>{
                   setState({doctor:{
                       ...state.doctor,doctorSpeciality: e.target.value
                   }
                   })
               }}>
                   <option value="SELECT">SELECT</option>
                   <option value="CARDIOLOGIST">CARDIOLOGIST</option>
                   <option value="NEUROLOGIST">NEUROLOGIST</option>
                   <option value="DENTIST">DENTIST</option>
        <option value="PEDIATRICIAN">PEDIATRICIAN</option>
        <option value="DERMATOLOGIST">DERMATOLOGIST</option>
        <option value="ENDOCRINOLOGIST">ENDOCRINOLOGIST</option>  
        <option value="PSYCHIATRIST">PSYCHIATRIST</option>   
        <option value="RHEUMATOLOGIST">RHEUMATOLOGIST</option>   
        <option value="ALLERGIST">ALLERGIST</option>    
          
          ))     </select>
            </div>

           
            <div>
                <label for="doctorShiftTime"> Doctor ShiftTime</label>
                <select type="text" className="form-control"  id="doctorShiftTime" placeholder="Enter Doctor Timings" required
                value={state.doctor.doctorShiftTime}
                onChange = {(e)=>{
                   setState({doctor:{
                       ...state.doctor,doctorShiftTime: e.target.value
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
            </div>
            <button className="btn btn-lg btn-info mt-3" style={UpdateStyle} onClick={
            (e) => {
                e.preventDefault();
               service.updateDoctorInLaboratory(state.doctor).then(()=>{
                  alert('Doctor record is updated in the database.')
                  setState({doctor: {} })
                  navigate('/laboratory/doctor/view');
               }).catch((error)=>{
                alert(error);
            })
            }
        }>Update Doctor</button>
         <Link className="btn btn-lg mt-3 ml-3" style={backStyle} to='/laboratory/doctor/view'>Back</Link>
        {/* <Link className="btn btn-dark btn-lg mt-3 ml-3" >Cancel</Link> */}
        </form>
        </div>
        <Contact/>
        </div>
    );
}
export default UpdateDoctorInLaboratory;