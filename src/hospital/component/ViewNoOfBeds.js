import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import Hospital from "../model/Hospital";
import HospitalService from "../service/HospitalService";
import HospAdminImg from "../../layout/component/HospAdminImg";
function ViewNoOfBeds(){
    const[state,setState] = useState({hospital: new Hospital()});
    let service = new HospitalService();
    const navigate = useNavigate();
    useEffect(()=>{
       if(sessionStorage.getItem('username') != null){
        service.getHospital().then((result)=>{
            setState({hospital: result.data})
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
             <div className="container mt-5">
                 <HospAdminImg/>
                 <h1>BED COUNT</h1>
                 <div className="mt-4">
                     {
                         state.hospital.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Number of Beds</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.hospital.map((hos)=>
                                       ( //start
                                           <tr>
                                               <td>{hos.noOfBeds}</td>
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-danger">No Beds present</span>
                    }
                 </div>
                 <Link className="btn btn-danger mt-3 ml-3" to='/hospital/hospitalAdmin'>Back</Link>
                 <Link className="btn btn-dark mt-3 ml-3" to='/user/logout'>Logout</Link>
             </div>
             <Contact/>
             </div>
        );
    
}
export default ViewNoOfBeds;