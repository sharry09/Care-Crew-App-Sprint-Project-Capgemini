import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import HospitalService from "../service/HospitalService";
import HospAdminImg from "../../layout/component/HospAdminImg";
function ViewTreatmentHistory(){
    const[state,setState] = useState({treatmentHistories: []});
    let service = new HospitalService();
    const navigate=useNavigate();
    //const {patientId} = useParams();
    useEffect(()=>{
       if(sessionStorage.getItem('username') != null){
        service.getTreatmentHistory().then((result)=>{
            setState({treatmentHistories: result.data})
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
             <div className=" container mt-5">
                 <HospAdminImg/>
                <h1>VIEW TREATMENT RECORDS</h1> 
                 <div className="mt-4">
                     {
                         state.treatmentHistories.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Patient Id</th>
                                 <th>Patient Name</th>
                                 <th>Patient Gender</th>
                                 <th>Treated By</th>
                                 <th>Disease</th>
                                 <th>PrescriptedMedicine</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.treatmentHistories.map((his)=>
                                       ( //start
                                           <tr>
                                               <td>{his.patientId}</td>
                                               <td>{his.patientName}</td>
                                               <td>{his.patientGender}</td>
                                               <td>{his.treatedBy}</td>
                                               <td>{his.disease}</td>
                                               <td>{his.prescriptedMedicine}</td>
                                               
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger">No Treatment History</span>
                    }
                 </div>
                 <Link className="btn btn-danger mt-5 ml-3" to='/hospital/hospitalAdmin'>Back</Link>
                 <Link className="btn btn-dark mt-5 ml-3" to='/user/logout'>Logout</Link>
             </div>
             <Contact/>
             </div>
        );
    
}
export default ViewTreatmentHistory;