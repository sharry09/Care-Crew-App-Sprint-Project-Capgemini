import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Doctor from "../../doctor/model/Doctor";
import Contact from "../../layout/component/Contact";
import HospitalService from "../service/HospitalService";
import HospAdminImg from "../../layout/component/HospAdminImg";


function UpdateDoctor(){
    let backStyle={
        backgroundColor:"#DBD0C0",
    }
    const[state,setState] = useState({doctor: new Doctor(),doctorSpecialties: [] , doctorShiftTimes:[]});
    let service = new HospitalService();
    const {doctorId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('username') != null){
        // alert('Calling useEffect');
         service.findDoctorById(doctorId).then((result)=>{
           setState({doctor: result.data})
            //navigate('/doctor/home');
           }).catch((error)=>{
                alert(error);
           })
    }else{
        alert('REGISTER OR LOGIN TO PERFORM OPERATIONS');
        navigate('/user/login');
    }
}, [])
    return(
        <div>
        <div className="container">
        <HospAdminImg/>
        <form>
             <h1 className="mt-5">UPDATE DOCTOR</h1>    
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
                    <option value="MORNING">MORNING</option>
                    <option value="AFTERNOON">AFTERNOON</option>
        <option value="EVENING">EVENING</option>

        <option value="NIGHT">NIGHT</option>  
        ))

        </select>
            </div>
        <button className="btn btn-lg btn-dark mt-3" onClick={
            (e) => {
                e.preventDefault();
               service.updateDoctor(state.doctor).then(()=>{
                  alert('Doctor record is updated in the database.')
                  setState({doctor: {} })
                  navigate('/doctor/home');
               }).catch((error)=>{
                alert(error);
            })
            }
        }>Update Doctor</button>
        <Link className="btn btn-lg mt-3 ml-3" style={backStyle}  to='/doctor/home' >Back</Link>
        
            </form>
    </div>
    <Contact/>
    </div>
    );
}
export default UpdateDoctor;