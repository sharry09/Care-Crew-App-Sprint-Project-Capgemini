import React from 'react';
import { Link } from 'react-router-dom';
import DoctorService from '../service/DoctorService';
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from '../../layout/component/ViewCareCrewImg';
class ViewDoctor1 extends React.Component{
    constructor(){
        super();
        this.service = new DoctorService();
       this.state= {
        doctors:[]
       };
    }

    componentDidMount()
    {
        this.service.readDoctor().then((result)=>{
            this.setState({doctors: result.data});
        })
        .catch((error)=>{
            alert(error);

        })
    }
 render(){
     return(
         <div>
             <div className="container">
                 <ViewCareCrewImg/>
              <h1 className="mt-5">DOCTORS DATABASE</h1>    
             <div className="mt-3">
                 {
                     this.state.doctors.length > 0 ?
                 (
                 <table className="table table-bordered">
                     <thead>
                         <tr>                                                                          
                             <th>DoctorId</th>
                             <th>Doctor Name</th>
                             <th>Contact Number</th>
                             <th>Doctor Speciality</th>
                             <th>Doctor Shift Time</th>
                             <th>Delete </th>
                             <th>Update</th>
                         </tr>
                     </thead>
                     <tbody>

                          {
                              this.state.doctors.map((doc)=>
                                  (  //start
                                      <tr>
                                          <td>{doc.doctorId}</td>
                                          <td>{doc.doctorName}</td>
                                          <td>{doc.contactNumber}</td>
                                          <td>{doc.doctorSpeciality}</td>
                                          <td>{doc.doctorShiftTime}</td>
                                          
                                        
                                          <th><Link className="btn btn-dark" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" to={{pathname:`/deletedoc/${doc.doctorId}`}}>Delete </Link></th>
                                          <th><Link className="btn btn-info" to={{pathname:`/updatedoc/${doc.doctorId}`}}>Update </Link></th>
                        
                                      </tr>
                                  ) //end

                              ) //map closing
                          }
                     </tbody>
                 </table>
                 )  : <span className="alert alert-danger ">No Doctor Available in Care Crew</span> }
             </div>
             <Link className="btn btn-lg btn-dark mt-5 mr-3"  to={`/doctor/doctorAdmin`}>Back</Link>
         </div>
         <Contact/>
         </div>
     );
 }
}
export default ViewDoctor1;