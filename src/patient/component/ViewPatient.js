import { useEffect, useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import PatientService from "../service/PatientService";
import PatientAdminImg from "../../layout/component/PatientAdminImg";
import Contact from "../../layout/component/Contact";

function ViewPatient() {
    let DeleteStyle={
        backgroundColor:"#22577A",
        color:"white",
    }
    let UpdateStyle={
        backgroundColor:"#B42B51",
        color:"white",
    }
    let BackStyle={
        backgroundColor:"#003638",
        color:"white",
    }
    
    let service = new PatientService();
    const[state, setState] = useState({patients:[]});
    const navigate = useNavigate();
    
    useEffect(()=>{ 
        if(sessionStorage.getItem('username')!=null){  
       service.findAllPatients().then((result)=>{
          setState({patients: result.data})
       }).catch((error)=>{
            alert(error);
       })
    }else{
        navigate('/student/login');
        alert('Register or Login to get  access to Page.');
        //redirect to login Page
    }
    },[]);  
    return(
        <div>

        <div className="container">
            <PatientAdminImg/>
        <div>
                          

        <div className="mt-5">
            {
               state.patients.length > 0 ?
            (
            <table className="table  table-bordered" >
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
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>                          
                        {
                           state.patients.map((stu)=>
                                ( //start
                                    <tr>
                                        <td>
                                            {stu.patientId}                                            
                                        </td>
                                        <td>{stu.patientName}</td>
                                        <td>{stu.patientAge}</td>
                                        <td>{stu.patientGender}</td>
                                        <td>{stu.patientContactNumber}</td>
                                        <td>{stu.patientAddress}</td>
                                        <td>{stu.dateOfConsultation}</td>
                                        <td>{stu.bloodGroup}</td>
                                        <td>{stu.disease}</td>
                                        <td >
                                            <Link className="btn  mr-3" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" style={DeleteStyle} to={{pathname: `/patient/update/${stu.patientId}`}}>Update</Link>
                                            </td>
                                            <td>
                                            <Link  className="btn  ml-3"  style={UpdateStyle} to={{pathname: `/patient/delete/${stu.patientId}`}}>Delete</Link>
                                            </td>


                                    </tr>

                                )//end
                            ) //closing map
                        }
                        

                   
                </tbody>
            </table>
            ):<span className="alert alert-danger mt-5">No Patient present</span>
        }
        </div>
    </div>
    <Link className="btn  mr-3" style={BackStyle} to={`/patient/patientAdmin`}>Back</Link>
    </div>
    <Contact/>
    </div>
    );
    
}
export default ViewPatient;