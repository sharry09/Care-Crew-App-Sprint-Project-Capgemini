import { useEffect, useState } from "react";
import MedicalStoreService from "../service/MedicalStoreService";
import {  Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";

function GetMedicalStore() {
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
    let service = new MedicalStoreService();
    const[state, setState] = useState({medicalStores:[]});
    
    //const navigate = useNavigate();
    
    useEffect(()=>{ 
        // if(sessionStorage.getItem('username')!=null){  
       service.findMedicalStore().then((result)=>{
          setState({medicalStores: result.data})
         // navigate('/patient/home');
       }).catch((error)=>{
            alert(error);
       })
    // }else{
    //     navigate('/student/login');
    //     alert('Unauthorised Access to Page.');
    //     //redirect to login Page
    // }
    },[]);  
    return(
        <div> 
        <div className="container">  
        <ViewCareCrewImg/>                   
            <div className="mt-5">
            <h1>MEDICAL STORE LIST</h1> 
            {
               state.medicalStores.length > 0 ?
            (
            <table className="table  table-bordered" >
                <thead>
                    <tr>
                        <th>Medical Store Id</th>
                        <th>Medical Store Name</th> 
                        <th>Update</th>       
                        <th>Delete</th>               
                    </tr>
                </thead>
                <tbody>                          
                        {
                           state.medicalStores.map((stu)=>
                                ( //start
                                    <tr>
                                        <td>{stu.medicalStoreId}</td>
                                        <td>{stu.medicalStoreName}</td>
                                        <td >
                                            <Link className="btn  mr-3" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" style={DeleteStyle} to={{pathname: `/medicalStore/update/${stu.medicalStoreId}`}}>Update</Link>
                                            </td>
                                            <td>
                                            <Link  className="btn ml-3" style={UpdateStyle} to={{pathname: `/medicalStore/delete/${stu.medicalStoreId}`}}>Delete</Link>
                                            </td>
                                    </tr>

                                )//end
                            ) //closing map
                        }                     
                </tbody>
            </table>
            ):<span className="alert alert-danger mt-5">No MedicalStore present</span>
        }
        </div>
        <Link className="btn  btn-lg mt-5 ml-3" style={backStyle}  to='/med/medAdmin'>Back</Link>
                 <Link className="btn btn-lg mt-5  ml-3" style={logoutStyle} to='/user/logout'>Logout</Link>
    </div>
  
             <Contact/>
             </div>
    );    
}
export default GetMedicalStore;