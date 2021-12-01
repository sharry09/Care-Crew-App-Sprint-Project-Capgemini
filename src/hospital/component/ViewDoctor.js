import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import HospAdminImg from "../../layout/component/HospAdminImg";
import HospitalService from "../service/HospitalService";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
function ViewDoctor(){


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
    const[state,setState] = useState({doctors: []});
    let service = new HospitalService();
    const navigate = useNavigate();
    useEffect(()=>{
       if(sessionStorage.getItem('username') != null){
        service.getDoctor().then((result)=>{
            setState({doctors: result.data})
            // navigate('/doctor/home');
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
             <div className="container">
             <HospAdminImg/>
                 <div className="mt-4">
                 <h1>DOCTORS OF CARE CREW</h1> 
                     {
                         state.doctors.length > 0 ?
                         (
                     <table className="table table-bordered">
                         <thead>
                             <tr>
                                 <th>Doctor Id</th>
                                 <th>Doctor Name</th>
                                 <th>Contact Number</th>
                                 <th>Doctor Speciality</th>
                                 <th>Doctor ShiftTime</th>
                                 <th>Delete</th>
                                 <th>Update</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 state.doctors.map((doc)=>
                                       ( //start
                                           <tr>
                                               <td>{doc.doctorId}</td>
                                               <td>{doc.doctorName}</td>
                                               <td>{doc.contactNumber}</td>
                                               <td>{doc.doctorSpeciality}</td>
                                               <td>{doc.doctorShiftTime}</td>
                                               <td><Link className="btn" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record"  style={DeleteStyle} to= {{pathname:`/doctor/delete/${doc.doctorId}`} }>Delete</Link></td>
                                               
                                               <td><Link className="btn mr-3" style={UpdateStyle} to={{pathname:`/doctor/update/${doc.doctorId}`}}>Update</Link></td>
                                               
                                           </tr>
                                           
                                       )
                                    )
                             }
                             
                         </tbody>
                         
                     </table>
                     
                     ) : <span className="alert alert-danger">No Doctor present</span>
                    }
                    
                 </div>
                 
                 <Link className="btn  btn-lg mt-5 ml-3" style={backStyle}  to='/hospital/hospitalAdmin'>Back</Link>
                 <Link className="btn btn-lg mt-5  ml-3" style={logoutStyle} to='/user/logout'>Logout</Link>
             </div>
             <Contact/>
             </div>
        );
    
}
export default ViewDoctor;
{/* <Link className="btn"  style={DeleteStyle} to= {{pathname:`/doctor/delete/${doc.doctorId}`} }>Delete</Link> */}
{/* <td><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Delete</button> */}
                                               {/* <div class="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
 Are you sure?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" onClick={
            (e)=>{
                e.preventDefault();
                navigate('/user/login')
            }
        }>Yes.Delete</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
                                              
                                               