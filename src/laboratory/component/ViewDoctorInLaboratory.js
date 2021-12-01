import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import LaboratoryService from "../service/LaboratoryService";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
function ViewDoctorInLaboratory(){
    let DeleteStyle={
        backgroundColor:"#22577A",
        color:"white",
    }
    let UpdateStyle={
        backgroundColor:"#B42B51",
        color:"white",
    }
    const[state,setState] = useState({doctors: []});
    let service = new LaboratoryService();
    useEffect(()=>{
       // if(sessionStorage.getItem('username') != null){
        service.viewDoctorInLaboratory().then((result)=>{
            setState({doctors: result.data})
        }).catch((error)=>{
            alert(error);
        })
    // }else{
    //     alert('Unauthorised access to page');
    //     navigate('/student/login');
    // }
})

    
        return(
             <div>
                 <div className="container">
                     <ViewCareCrewImg/>
                     <h1 className="mt-5"> LAB DOCTORS DATABASE </h1> 
                 <div className="mt-4">
                     {
                         state.doctors.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Doctor Id</th>
                                 <th>Doctor Name</th>
                                 <th>Contact Number</th>
                                 <th>Doctor Speciality</th>
                                 <th>Doctor ShiftTime</th>
                                 <th>Delete</th>
                                 <th>Update</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.doctors.map((doc)=>
                                       ( //start
                                           <tr>
                                               <td>{doc.doctorId}</td>
                                               <td>{doc.doctorName}</td>
                                               <td>{doc.contactNumber}</td>
                                               <td>{doc.doctorSpeciality}</td>
                                               <td>{doc.doctorShiftTime}</td>
                                               <td><Link className="btn " data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" style={DeleteStyle} to={{pathname:`/laboratory/doctor/delete/${doc.doctorId}`}}>Delete</Link></td>
                                               <td><Link className="btn" style={UpdateStyle} to={{pathname: `/laboratory/doctor/update/${doc.doctorId}`}}>Update</Link></td>
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger">No Doctor present in Lab</span>
                    }
                 </div>
                 <Link className="btn btn-lg btn-dark mt-5 mr-3"  to={`/lab/labAdmin`}>Back</Link>
             </div>
             <Contact/>  
             </div>
        );
    
}
export default ViewDoctorInLaboratory;