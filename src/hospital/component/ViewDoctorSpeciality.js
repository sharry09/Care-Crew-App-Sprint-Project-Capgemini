import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Doctor from "../../doctor/model/Doctor";
import DoctorSpeciality from "../../doctor/model/DoctorSpeciality";
import HospAdminImg from "../../layout/component/HospAdminImg";
import Contact from "../../layout/component/Contact";
import HospitalService from "../service/HospitalService";
function ViewDoctorSpeciality(){
    const[state,setState] = useState({doctor: new Doctor()});
    let service = new HospitalService();
    const navigate = useNavigate();
    useEffect(()=>{
       if(sessionStorage.getItem('username') != null){
        service.getDoctor().then((result)=>{
            setState({doctor: result.data})
        }).catch((error)=>{
            alert(error);
        })
    }else{
        alert('REGISTER OR LOGIN TO PERFORM OPERATIONS');
        navigate('/user/login');
    }
})

    
        return(
            <div>
             <div className=" container">
                 <HospAdminImg/>
                <h1 className=" mt-5">DOCTOR SPECIALITY LIST</h1>
                 
                 <div className=" mt-4">
                     {
                        
                         state.doctor.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Doctor Speciality</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.doctor.map((spec)=>
                                       ( //start
                                           <tr>
                                               <td>{spec.doctorSpeciality}</td>
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger">No Doctors Present</span>
                    }
                 </div>
                 <Link className="btn btn-danger mt-3 ml-3" to='/hospital/hospitalAdmin'>Back</Link>
                 <Link className="btn btn-dark mt-3 ml-3" to='/user/logout'>Logout</Link>
            </div>
            <Contact/>
            </div>
        );
    
}
export default ViewDoctorSpeciality;