import React from 'react';
import { Link } from 'react-router-dom';
import AmbulanceService from '../service/AmbulanceService';
import Contact from "../../layout/component/Contact";
import AmbBookImg from "../../layout/component/AmbBookImg";

class ViewAmbulance extends React.Component{
    constructor(){
        super();
        this.service = new AmbulanceService();

       this.state= {
        Bookings:[]
       };
    }

    componentDidMount()
    {
        this.service.viewHistory().then((result)=>{
            this.setState({Bookings: result.data});
        })
        .catch((error)=>{
            alert(error);

        })
    }
 render(){
     return(
         <div> 
             <div className="container">
                 <AmbBookImg/>
             <div className="mt-3">

                 {
                     this.state.Bookings.length > 0 ?
                 (
                 <table className="table table-bordered">
                     <thead>
                         <tr>
                             <th>AmbulanceId</th>
                             <th>AmbulanceContactNumber</th>
                             <th>Driver Name</th>
                             <th>Delete </th>
                         </tr>
                     </thead>
                     <tbody>

                          {
                              this.state.Bookings.map((book)=>
                                  (  //start
                                      <tr>
                                          <td>{book.ambulanceId}</td>
                                          <td>{book.ambulanceContactNumber}</td>
                                          <td>{book.driverName}</td>
                                          <th><Link className="btn btn-dark" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record" to={{pathname:`/deleted/${book.ambulanceId}`}}>Delete </Link></th>

                                      </tr>
                                  ) 

                              ) 
                          }
                     </tbody>
                 </table>
                 )  : <span className="alert alert-danger ">No Ambulance</span> }
             </div>
             <Link className="btn btn-lg btn-info  mt-3 ml-3"  to='/amb/ambAdmin' >Back</Link>
         </div>
         <Contact/>
         </div>
     );
 }
}
export default ViewAmbulance;