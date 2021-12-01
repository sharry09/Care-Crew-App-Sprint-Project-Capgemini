import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from "react-router";
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
import PatientService from "../../patient/service/PatientService";

function ViewPatientByDoc(){
    const[state,setState] = useState({patients: []});
        let service = new PatientService();
    useEffect(()=>{
       // if(sessionStorage.getItem('username') != null){
        service.findAllPatients().then((result)=>{
            setState({patients: result.data})
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
                     <h1 className="mt-5"> PATIENT DATABASE </h1>
                 <div className="mt-4">
                     {
                         state.patients.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                             <th>Patient Id</th>
                            <th>Patient Name</th>
                            <th>Patient Age</th>
                            <th>Patient Gender</th>
                            <th>Patient Contact Number</th>
                            <th>Patient Address</th>
                            <th>Date Of Consultation</th>
                            <th>Blood Group</th>
                            <th>Patient Disease</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.patients.map((pat)=>
                                       ( 
                                        <tr>
                                        <td>{pat.patientId}</td>
                                        <td>{pat.patientName}</td>
                                        <td>{pat.patientAge}</td>
                                        <td>{pat.patientGender}</td>
                                        <td>{pat.patientContactNumber}</td>
                                        <td>{pat.patientAddress}</td>
                                        <td>{pat.dateOfConsultation}</td>
                                        <td>{pat.bloodGroup}</td>
                                        <td>{pat.disease}</td>
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger">No Patient present</span>
                    }
                 </div>
                 <Link className="btn btn-lg btn-dark mt-5 mr-3"  to={`/doctor/doctorAdmin`}>Back</Link>
             </div>
             <Contact/>
             </div>
        );
    
}
export default ViewPatientByDoc;