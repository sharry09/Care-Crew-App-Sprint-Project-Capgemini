import React from 'react';
import { Link } from 'react-router-dom';
import AmbulanceBookingService from '../service/AmbulanceBookingService';
import AmbBookImg from "../../layout/component/AmbBookImg";
import Contact from '../../layout/component/Contact';

class ViewAmbulanceBooking extends React.Component{
    constructor(){
        super();
        this.service = new AmbulanceBookingService();
       this.state= {
        Bookings:[]
       };
    }

    componentDidMount()
    {
        this.service.viewTravelHistory().then((result)=>{
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

            <h1 className="mt-5">VIEW BOOKING</h1>
         <div> 
             <div className="mt-3">
                 {
                     this.state.Bookings.length > 0 ?
                 (
                 <table className="table table-bordered">
                     <thead>
                         <tr>
                             <th>AmbulanceBookingId</th>
                             <th>AmbulanceBookingDate</th>
                             <th>AmbulanceSlots</th>
                             {/* <th>AmbulanceBookingSlots</th> */}
                             <th>Delete </th>
                             <th>Update</th>
                         </tr>
                     </thead>
                     <tbody>

                          {
                              this.state.Bookings.map((book)=>
                                  ( 
                                      <tr>
                                          <td>{book.ambulanceBookingId}</td>
                                          <td>{book.ambulanceBookingDate}</td>
                                          <td>{book.slots}</td>
                                        
                                          <th><Link className="btn btn-lg btn-dark" data-toggle="tooltip" data-placement="right" title="Permanent Deletion of record"  to={{pathname:`/delete/${book.ambulanceBookingId}`}}>Cancel </Link></th>
                                          <th><Link className="btn btn-lg btn-info "  to={{pathname:`/update/${book.ambulanceBookingId}`}}>Update </Link></th>
                        
                                      </tr>
                                  )

                              )
                          }
                     </tbody>
                 </table>
                 )  : <span className="alert alert-danger ">No Bookings</span> }
             </div>
             <Link className="btn  btn-lg btn-primary mt-5 ml-3"   to='/lifeline/services'>Exit</Link>
                 <Link className="btn btn-secondary btn-lg mt-5  ml-3"  to='/user/logout'>Logout</Link>
         </div>
        
         </div>
         <Contact/>
         </div>
     );
 }
}
export default ViewAmbulanceBooking;