import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { useNavigate, useParams } from "react-router";
import AmbBookImg from "../../layout/component/AmbBookImg";
import AmbulanceBookingService from "../service/AmbulanceBookingService";
import AmbulanceBooking from "../model/AmbulanceBooking";
import Contact from "../../layout/component/Contact";
function UpdateAmbulanceBooking(){
    const[state,setState]= useState({ambulanceBooking: new AmbulanceBooking()});
    let service= new AmbulanceBookingService();
    const {ambulanceBookingId}=useParams();
    const navigate = useNavigate();
    useEffect(() => {
        // alert('calling useEffect');
        service.findBookingById(ambulanceBookingId).then((result)=>{
        setState({ambulanceBooking:result.data})
        }).catch((error)=>{
            alert(error);
        })
    },[]);
    return(
        <div>
                <div className="container">
      <AmbBookImg/>
      <h1 className="mt-5">UPDATE AMBULANCE BOOKING</h1>
        <form>
            <div>
            <label for="AmbulanceBookingId">Ambulance Booking Id</label>
            <input className="form-control"  type="text" id="AmbulanceBookingId" placeholder="Enter ambulanceBooking Id" value={state.ambulanceBooking.ambulanceBookingId}
            readOnly={true}/>
             
            </div>

            <div>
            <label for="ambulanceBookingDate">ambulance Booking Date</label>
            <input className="form-control"  type="text" id="ambulanceBookingDate" placeholder="Enter Ambulance Booking Date" value={state.ambulanceBooking.ambulanceBookingDate}
             onChange={ (e)=> setState({ambulanceBooking :{...state.ambulanceBooking, ambulanceBookingDate: e.target.value }})} />
            </div>

            <div>
            <label for="Slots">slots</label>
            <input className="form-control"  type="text" id="slots" placeholder="Enter Booking slots" value={state.ambulanceBooking.slots}
             onChange={ (e)=> setState({ambulanceBooking :{...state.ambulanceBooking, slots: e.target.value }})} />
            </div>

            <div>
            <label for="ambulanceStatus">ambulanceStatus</label>
            <input className="form-control"  type="text" id="ambulanceStatus" placeholder="Enter ambulance Status" value={state.ambulanceBooking.ambulanceStatus}
             onChange={ (e)=> setState({ambulanceBooking :{...state.ambulanceBooking, slots: e.target.value }})} />
            </div>
            
         
            <button className="btn btn-lg btn-info mt-5" onClick={
               (e)=>{
                   e.preventDefault();
                   service.updateBooking(state.ambulanceBooking).then(()=>{
                    alert('Booking is updated')
                    setState({ambulanceBooking:{}})
                    navigate('/viewBooking');
                   }).catch((error)=>{
                       alert(error);
                      
                   })
                      
               }
            }>Update Booking</button>
<Link className="btn btn-lg btn-dark mt-5 ml-3" to='/viewBooking'>Back</Link> 
       </form>
       </div>
       <Contact/>
       </div>
    );
}
export default UpdateAmbulanceBooking;