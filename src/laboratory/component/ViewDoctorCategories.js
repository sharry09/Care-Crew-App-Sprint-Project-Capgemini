import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import DoctorSpeciality from "../../doctor/model/DoctorSpeciality";
import Contact from "../../layout/component/Contact";
import LaboratoryService from "../service/LaboratoryService";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
function ViewDoctorCategories(){
    const[state,setState] = useState({doctorSpeciality: new DoctorSpeciality()});
    let service = new LaboratoryService();
    useEffect(()=>{
       // if(sessionStorage.getItem('username') != null){
        service.viewDoctorInLaboratory().then((result)=>{
            setState({doctorSpeciality: result.data})
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
                 <h1 className="mt-5"> DOCTOR CATEGORIES IN CARE CREW </h1> 
                 <div className="mt-4">
                     {
                         state.doctorSpeciality.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Doctor Category</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.doctorSpeciality.map((category)=>
                                       ( //start
                                           <tr>
                                               <td>{category.doctorSpeciality}</td>
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger">No Doctors Present</span>
                    }
                 </div>
                 <Link className="btn btn-lg btn-dark mt-5 mr-3"  to={`/lab/labAdmin`}>Back</Link>
             </div>
             <Contact/>
                          </div>
        );
    
}
export default ViewDoctorCategories;