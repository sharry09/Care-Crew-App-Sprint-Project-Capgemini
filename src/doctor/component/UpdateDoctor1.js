
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router";
import DoctorService from "../service/DoctorService";
import Doctor from "../model/Doctor";
import Contact from "../../layout/component/Contact";
import HospAdminImg from "../../layout/component/HospAdminImg";

function UpdateDoctor1(){
    let backStyle={
        backgroundColor:"#DBD0C0",
    }
    const[state,setState]= useState({doctor: new Doctor() });
    let service= new DoctorService();
    const {doctorId}=useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // alert('calling useEffect');
        service.findDoctorById(doctorId).then((result)=>{
        setState({doctor:result.data})
        }).catch((error)=>{
            alert(error);
        })
    },[]);
    return(
        <div>
            <div className="container">
            <HospAdminImg/>
                <h1>UPDATE DOCTORS AT CARE CREW</h1>
        <form>
            <div>
            <label for="doctorId">Doctor Id</label>
            <input className="form-control"  type="text" id="doctorId" placeholder="Enter doctor Id" value={state.doctor.doctorId}
            readOnly={true}/>
             
            </div>

            <div>
            <label for="doctorName">Doctor Name</label>
            <input className="form-control"  type="text" id="doctorName" placeholder="Enter doctor Name" value={state.doctor.doctorName}
             onChange={ (e)=> setState({doctor :{...state.doctor, doctorName: e.target.value }})} />
            </div>

            <div>
            <label for="ContactNumber">Doctor contact Number</label>
            <input className="form-control"  type="text" id="ContactNumber" placeholder="Enter Contact Number" value={state.doctor.contactNumber}
             onChange={ (e)=> setState({doctor :{...state.doctor, contactNumber: e.target.value }})} />
            </div>

            <div>
                <label for="doctorSpecialty"> Doctor Speciality</label>
                <select className="form-control"  type="text" id="doctorSpecialty" 
                value={state.doctor.doctorSpeciality}
                onChange = {(e)=>{
                   setState({doctor:{
                       ...state.doctor,doctorSpeciality: e.target.value
                   }
                   })
               }}
                >
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

            
            <div>
                <label for="doctorShiftTime"> DoctorShiftTime</label>
                <select className="form-control"  type="text" id="doctorShiftTime" 
                value={state.doctor.doctorShiftTime}
                onChange = {(e)=>{
                   setState({doctor:{
                       ...state.doctor,doctorShiftTime: e.target.value
                   }
                   })
               }}
                >
        <option value="MORNING">MORNING</option>
        <option value="AFTERNOON">AFTERNOON</option>
        <option value="EVENING">EVENING</option>
        <option value="NIGHT">NIGHT</option>
        </select>
            </div>

         
            <button className="btn btn-lg btn-dark mt-3" onClick={
               (e)=>{
                   e.preventDefault();
                   service.updateDoctor(state.doctor).then(()=>{
                    alert('Doctor is updated')
                    setState({doctor:{}})
                    navigate('/readDoctorDetails');
                   }).catch((error)=>{
                       alert(error);
                      
                   })
                      
               }
            }>Update Doctor</button>
<Link className="btn btn-lg mt-3 ml-3" style={backStyle} to='/readDoctorDetails'>Cancel</Link> 
       </form>
       </div>
       <Contact/>
       </div>
    );
}
export default UpdateDoctor1;