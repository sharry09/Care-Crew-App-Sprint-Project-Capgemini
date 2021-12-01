import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PatientService from "../service/PatientService";
import Contact from "../../layout/component/Contact";
import PatientLoginImg from "../../layout/component/PatientLoginImg";

function ViewMedicalStore() {
    let BackStyle={
        backgroundColor:"#003638",
        color:"white",
    }
    let service = new PatientService();
    const[state, setState] = useState({medicalStores:[]});
    
    const navigate = useNavigate();
    
    useEffect(()=>{ 
        if(sessionStorage.getItem('username')!=null){  
       service.findMedicalStore().then((result)=>{
          setState({medicalStores: result.data})
         // navigate('/patient/home');
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
            <h1 className="mt-5">CARE CREW MEDIKOS</h1>
        <div>                      
            <div className="mt-5">
            {
               state.medicalStores.length > 0 ?
            (
            <table className="table  table-bordered" >
                <thead>
                    <tr>
                        <th>Medical Store Id</th>
                        <th>Medical Store Name</th>                       
                    </tr>
                </thead>
                <tbody>                          
                        {
                           state.medicalStores.map((stu)=>
                                ( //start
                                    <tr>
                                        <td>{stu.medicalStoreId}</td>
                                        <td>{stu.medicalStoreName}</td>
                                    </tr>

                                )//end
                            ) //closing map
                        }                     
                </tbody>
            </table>
            ):<span className="alert alert-danger mt-5">No MedicalStore present</span>
        }
        </div>
    </div>
    <Link className="btn btn-lg mt-5  mr-3" style={BackStyle} to={`/patient/patientLogin`}>Back</Link>
    </div>
   
    <Contact/>
    </div>
    );    
}
export default ViewMedicalStore;