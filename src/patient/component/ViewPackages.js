// function ViewPackages(){
//     return(
//         <div>
//             <table className="table  table-bordered" >
//                 <thead>
//                     <tr>Available Packages</tr>
//                 </thead>

//                 <tbody>
//                     <tr>
//                         <td>HEART_AND_ADVANCED_HEART_CHECK</td> </tr>
//                         <tr> <td>
//                         FULL_BODY_CHECKUP</td>
//                         </tr>
//                         <tr> <td> SENIOR_CITIZEN_CHECK</td> </tr>
//                         <tr> <td> OBESITY_CHECK</td> </tr>
//                         <tr> <td>  KIDNEY_CHECK</td> </tr>
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default ViewPackages;
import { useEffect, useState } from "react";
import PatientLoginImg from "../../layout/component/PatientLoginImg";
import { useNavigate, Link } from "react-router-dom";
//import { useParams } from "react-router-dom";
import PatientService from "../service/PatientService";
import Contact from "../../layout/component/Contact";

function ViewPackages() {
    let BackStyle={
        backgroundColor:"#003638",
        color:"white",
    }
    let service = new PatientService();
    const[state, setState] = useState({packages:[]});
    
    const navigate = useNavigate();
    
    useEffect(()=>{ 
        if(sessionStorage.getItem('username')!=null){  
       service.getAvailablePackages().then((result)=>{
          setState({packages: result.data})
       }).catch((error)=>{
            alert(error);
       })
    }else{
        navigate('/user/login');
        alert('Register or login to get access to Page.');
        //redirect to login Page
    }
    },[]);  
    return(
        <div>
        <div className="container">
            <PatientLoginImg/>
            <h1 className="mt-5">CARE CREW TREATMENT PACKAGES</h1>
        <div>
                          

        <div className="mt-5">
        <table className="table  table-bordered">
<tbody>
                      <tr>  <td>HEART_AND_ADVANCED_HEART_CHECK</td> </tr>
                        <tr> <td>
                        FULL_BODY_CHECKUP</td>
                        </tr>
                        <tr> <td> SENIOR_CITIZEN_CHECK</td> </tr>
                        <tr> <td> OBESITY_CHECK</td> </tr>
                        <tr> <td>  KIDNEY_CHECK</td> </tr>

       
                     </tbody>
             </table>
           
        </div>
     </div>
    <Link className="btn btn-lg mt-5  mr-3" style={BackStyle} to={`/patient/patientLogin`}>Back</Link>
    </div>
   
    <Contact/>
    </div>
    );
    
}
export default ViewPackages;