import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import BookingAppointment from "../model/BookingAppointment";
import BookingAppointmentService from "../service/BookingAppService";
import Contact from "../../layout/component/Contact";
import BookAppointmentImg from "../../layout/component/BookAppointmentImg";

function AddAppointment(){
    let backStyle={
        backgroundColor:"#FFCD60",
    }
    let UpdateStyle={
       backgroundColor:"#FF7777"
   }
   let LogoutStyle={
       backgroundColor:"#54436B",
       color:"white",
     }
    const[state, setState] = useState({appointment: new BookingAppointment(), doctorSpeciality:[], availableSlots:[]});
  let service = new BookingAppointmentService();
  //let {Id} = useParams();
  const navigate = useNavigate();
   
    return(
        <div>
        <div className="container">
            <BookAppointmentImg/>
            <h1 className="mt-5">BOOK YOUR SLOT </h1>
        <form>
            <div>
      <label >Appointment Id</label>
      <input className="form-control"  type="text" id="appId" placeholder="Enter Appointment Id"
        value= {state.appointment.appointmentId}
        onChange={ (e) => {
            setState({
                appointment:{
                    ...state.appointment,
                    appointmentId: e.target.value
                }
            })
        }}
        />
      </div>
      <div>
      <label >Patient Name</label>
      <input className="form-control" type="text" id="patientName" placeholder="Enter Patient Name"
      value={state.appointment.patientName}
      onChange = { (e) =>
      {
          setState( { appointment:  { 
            ...state.appointment,
              patientName: e.target.value
          }} )
      } } />
     </div>
     <div>
                <label for="availableSlots"> AvailableSlots</label>
                <select className="form-control" type="text"  id="availableSlots" 
                value={state.appointment.availableSlots}
                onChange = {(e)=>{
                   setState({appointment:{
                       ...state.appointment,availableSlots: e.target.value
                   }
                   })
               }}>
                   <option value="optional">SELECT </option>
                   <option value="MORNING_9">MORNING_9</option>
                <option value="MORNING_10">MORNING_10</option>
                <option value="MORNING_11">MORNING_11</option>
                <option value="AFTERNOON_2">AFTERNOON_2</option>
                <option value="AFTERNOON_3">AFTERNOON_3</option>
                <option value="EVENING_5">EVENING_5</option>
                <option value="EVENING_6">EVENING_6</option>
                <option value="NIGHT_8">NIGHT_8</option>
                <option value="NIGHT_9">NIGHT_9</option>
                

          
          ))     </select>
            </div>
     <div>
                <label for="doctorSpeciality"> Doctor Speciality</label>
                <select className="form-control" type="text"  id="doctorSpeciality" 
                value={state.appointment.doctorSpeciality}
                onChange = {(e)=>{
                   setState({appointment:{
                       ...state.appointment,doctorSpeciality: e.target.value
                   }
                   })
               }}>
                   <option value="optional">SELECT </option>
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
      <label >Date Of Consultation</label>
      <input className="form-control" type="date" id="date" placeholder="Enter Date of consultation"
      value={state.appointment.dateOfConsultation}
      onChange = { (e) =>
      {
          setState( { appointment:  { 
            ...state.appointment,
              dateOfConsultation: e.target.value
          }} )
      } } />
     </div>
     <div>
      <label >Doctor Name</label>
      <input className="form-control" type="text" id="docName" placeholder="Enter Doctor Name"
      value={state.appointment.doctorName}
      onChange = { (e) =>
      {
          setState( { appointment:  { 
            ...state.appointment,
              doctorName: e.target.value
          }} )
      } } />
     </div>
     
    <button className="btn  mt-3" style={UpdateStyle} onClick={
        (e) => {
            e.preventDefault();
            service.addAppointment(state.appointment).then((result)=>{
                    alert(result.data)
                    sessionStorage.setItem('availableSlots', state.appointment.availableSlots);          
               navigate('/bookappointment/view-appointment');
                
              
            }).catch((error)=>{
                alert(error);
            })
                
                 
         }
    }>Book Appointment</button>
    <Link className="btn  mt-3 ml-3" style={backStyle} to={`/patient/patientLogin`}>Back</Link>
 
            <Link className="btn  mt-3 ml-3" style={LogoutStyle} to='/user/logout'>Logout</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );


}
export default AddAppointment;