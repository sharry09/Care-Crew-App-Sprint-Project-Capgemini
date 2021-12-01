import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HospitalService from "../service/HospitalService";
import Contact from "../../layout/component/Contact";
import HospAdminImg from "../../layout/component/HospAdminImg";
function ViewHospital(){
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
    
    const[state,setState] = useState({hospitals: []});
    let service = new HospitalService();
    const navigate = useNavigate();
    useEffect(()=>{
       if(sessionStorage.getItem('username') != null){
        service.getHospital().then((result)=>{
            setState({hospitals: result.data})
        }).catch((error)=>{
            alert(error);
        })
    }else{
        alert('Register or Login to get access to page');
        navigate('/user/login');
    }
})

    
        return(
             <div>
                  <HospAdminImg/> 
                 <div className="container">
                     <h1 className="mt-5">HOSPITAL LIST</h1>
                 <div className="mt-4">
                     {
                         state.hospitals.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Hospital Id</th>
                                 <th>Hospital Name</th>
                                 <th>Hospital Location</th>
                                 <th>Hospital Contact</th>
                                 <th>Number of Beds</th>
                                 <th>Treatment Packages</th>
                                 <th>Update NoOfBeds</th>
                                 <th>Delete</th>

                                 
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.hospitals.map((hos)=>
                                       ( //start
                                           <tr>
                                               <td>{hos.hospitalId}</td>
                                               <td>{hos.hospitalName}</td>
                                               <td>{hos.hospitalLocation}</td>
                                               <td>{hos.hospitalContact}</td>
                                               <td>{hos.noOfBeds}</td>
                                               <td>{hos.treatmentPackages}</td>
                                               <td><Link className="btn  mr-3" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" style={DeleteStyle} to={{pathname: `/hospital/update/${hos.hospitalId}`}}>Update</Link></td>
                                               <td><Link className="btn  mr-3" style={UpdateStyle} to={{pathname: `/hospital/delete/${hos.hospitalId}`}}>Delete</Link></td>
                                           </tr>
                                       )
                                    )
                             }
                         </tbody>
                     </table>
                     ) : <span className="alert alert-warning">No Hospital present</span>
                    }
                 </div>
                 <Link className="btn mt-5 mr-3" style={BackStyle} to={`/hospital/hospitalAdmin`}>Back</Link>
                 </div>
                 <Contact/>
             </div>
        );
    
}
export default ViewHospital;