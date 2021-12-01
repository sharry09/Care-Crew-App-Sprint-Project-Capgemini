import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import LaboratoryService from "../service/LaboratoryService";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
function ViewMedicalTestResult(){
    let backStyle={
        backgroundColor:"#DBD0C0",
    }
    let logoutStyle={
        backgroundColor:"#A2416B",
        color:"white"
        }
        let DeleteStyle={
            backgroundColor:"#22577A",
            color:"white",
        }
        let UpdateStyle={
            backgroundColor:"#B42B51",
            color:"white",
        }
    const[state,setState] = useState({medicalTestResults: []});
    let service = new LaboratoryService();
    useEffect(()=>{
       // if(sessionStorage.getItem('username') != null){
        service.getMedicalTestResult().then((result)=>{
            setState({medicalTestResults: result.data})
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
                 <h1 className="mt-5"> MEDICAL TEST RESULTS </h1> 
                 <div className="mt-4">
                     {
                         state.medicalTestResults.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>MedicalTestResult Id</th>
                                 <th>MedicalTest Name</th>
                                 <th>Patient Name</th>
                                 <th>Test Condition</th>
                                 <th>Test PerformedBy</th>
                                 <th>Delete</th>
                                 <th>Update</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.medicalTestResults.map((test)=>
                                       ( //start
                                           <tr>
                                               <td>{test.medicalTestResultId}</td>
                                               <td>{test.medicalTestName}</td>
                                               <td>{test.patientName}</td>
                                               <td>{test.testCondition}</td>
                                               <td>{test.testPerformedBy}</td>
                                               <td><Link className="btn " data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" style={DeleteStyle} to= { {pathname:`/laboratory/medicalTestResult/delete/${test.medicalTestResultId}`} }>Delete</Link></td>
                                               <td><Link className="btn " style={UpdateStyle} to= { {pathname:`/laboratory/medicalTestResult/update/${test.medicalTestResultId}`} }>Update</Link></td>
                                               
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger mt-5">No MedicalTestResults Present</span>
                    }
                   
                 </div>
                 <Link className="btn btn-lg btn-dark mt-5 ml-5" style={backStyle} to={`/lab/labAdmin`}>Back</Link>
                 <Link className="btn btn-lg mt-5  ml-3" style={logoutStyle} to='/user/logout'>Logout</Link>
                 </div>
                 <Contact/>
                 
             </div>
        );
    
}
export default ViewMedicalTestResult;