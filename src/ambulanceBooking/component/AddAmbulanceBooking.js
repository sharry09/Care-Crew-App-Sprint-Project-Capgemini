import React, { Component } from "react";
//import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import AmbulanceBooking from "../model/AmbulanceBooking";
import AmbulanceBookingService from "../service/AmbulanceBookingService";
import Contact from "../../layout/component/Contact";
import AmbBookImg from "../../layout/component/AmbBookImg";
class AddAmbulanceBooking extends Component {
  service = new AmbulanceBookingService();
  // navigate = useNavigate();
  
  state = {
    ambulanceBooking: new AmbulanceBooking(),
    error:{
            idError:"",
            dateError:"",
            statusError:"",
            slotsError:"",
            
    }
      
  };

  validate=()=>{
    
      let flag=true;
      let error = {};
      if(!this.state.ambulanceBooking.ambulanceBookingId){
        error.idError = "Ambulance Booking Id is required";
        flag=false;
      }
      if(!this.state.ambulanceBooking.ambulanceBookingDate){
        error.dateError = "Date is required";
        flag=false;
      }
  
      if(!this.state.ambulanceBooking.slots){
        error.slotsError = "slots required";
        flag=false;
      }
     
      this.setState({error: error})
      return flag;
    
    } ;

  handleSubmit = async (event) => {
    
    event.preventDefault();

    let isValid = this.validate();
    if (!isValid) {
      return false;
    }
    this.service. addAmbulanceBookingInfo(this.state.ambulanceBooking).then(()=>{
              alert('Ambulance Booking  is added')
                      this.setState({ambulanceBooking: {}})
                      //navigate('/patient/home');
                  }).catch((error)=>{
                      alert(error);
                  })     
  };

  render() {
    return (
      <div>
        <div className="container">
        <AmbBookImg/>
      <form onSubmit={this.handleSubmit}>
        <h1 className="mt-5">BOOK AMBULANCE</h1>
             <div className="form-group mr2">  
       <label >Ambulance Booking Id</label>
      <input className="form-control"  type="text" id="ambulanceBookingId" placeholder="Enter Ambulance Booking Id"
        value= {this.state.ambulanceBooking.ambulanceBookingId}
        onChange={ (e) => {
            this.setState({
                ambulanceBooking:{
                    ...this.state.ambulanceBooking,
                    ambulanceBookingId: e.target.value
                }
            })
        }}
        />
        <div className="alert-danger mt-2">{this.state.error.idError}</div>
      </div>
      <div>
      <label >Ambulance Booking Date</label>
      <input className="form-control" type="text" id="ambulanceBookingDate" placeholder="Enter AmbulanceBooking Date"
      value={this.state.ambulanceBooking.ambulanceBookingDate}
      onChange = { (e) =>
      {
          this.setState( { ambulanceBooking:  { 
            ...this.state.ambulanceBooking,
            ambulanceBookingDate: e.target.value
          }} )
      } } />
      <div className="alert-danger mt-2">{this.state.error.dateError}</div>
     </div>
     
    
     <div>
      <label >Slots</label>
      <select className="form-control" type="text" id="slots"
      value={this.state.ambulanceBooking.slots}
      onChange = { (e) =>
      {
          this.setState( { ambulanceBooking:  { 
            ...this.state.ambulanceBooking,
            slots: e.target.value
          }} )
      } } >
            <option value="SELECT">SELECT</option>
            <option value="EMERGENCY">EMERGENCY</option>
            <option value="TRANSPORTATION_PURPOSE">TRANSPORTATION_PURPOSE</option>
          </select>
      <div className="alert-danger mt-2">{this.state.error.slotsError}</div>
     </div>
     

        <button type="submit" className="btn btn-lg btn-dark mt-3">
          Add Booking
        </button>
       {/* // <Button title="Back" onPress={() => { this.props.navigation.goBack() }} /> */}
        <Link className="btn btn-lg btn-info mt-3 ml-3" to={`/patient/patientLogin`}>Back</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
  }
}
export default AddAmbulanceBooking;
// import  { useEffect, useState } from "react";
// import AmbBookImg from "../../layout/component/AmbBookImg";
// import { Link, useNavigate } from "react-router-dom";
// import AmbulanceBooking from "../model/AmbulanceBooking";
// import AmbulanceBookingService from "../service/AmbulanceBookingService";
// import Contact from "../../layout/component/Contact";


//  function AddAmbulanceBooking(){
//     let backStyle={
//         backgroundColor:"#FFCD60",
//     }
//     let UpdateStyle={
//        backgroundColor:"#FF7777"
//    }
//     let LogoutStyle={
//         backgroundColor:"#54436B",
//         color:"white",
//       }
//     const[state,setState] = useState({ambulanceBooking: new AmbulanceBooking()});

//     let service = new AmbulanceBookingService();
//     const navigate = useNavigate();
    
//     // useEffect(()=>{
//     //     if(sessionStorage.getItem('username') != null){
//     //       navigate('/ambulanceBooking/add');
//     //     }else{
//     //         alert('Register or login to get access to page');
//     //         navigate('/user/login');
//     //     }
//     // })
    
//         return(
//             <div>
                  
//             <div className="container">
//              <AmbBookImg/>
//                 <h1 className="mt-5">BOOK CARE CREW'S AMBULANCE</h1>
//             <form>
//             <div>
//                 <label for="ambulanceBookingId">Ambulance Booking Id</label>
//                 <input className="form-control"  type="text" id="ambulanceBookingId" placeholder="Enter ambulance Booking Id"
//                 value={state.ambulanceBooking.ambulanceBookingId}
//                 onChange= {(e)=>{
//                 setState({ambulanceBooking :{
//                    ...state.ambulanceBooking,ambulanceBookingId: e.target.value
//                 }
//                })
//                 }}
//                 ></input>
//             </div>
          
//             <div>
//                 <label for="ambulanceBookingDate"> Ambulance Booking Date</label>
//                 <input className="form-control"  type="date" id="ambulanceBookingDate" placeholder="Enter ambulance BookingDate"
//                 value={state.ambulanceBooking.ambulanceBookingDate}
//                 onChange = {(e)=>{
//                    setState({ambulanceBooking:{
//                        ...state.ambulanceBooking,ambulanceBookingDate: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>


//             <div>
//                 <label for="slots"> Slots</label>
//                 <input className="form-control"  type="text" id="slots" 
//                 value={state.ambulanceBooking.slots}
//                 onChange = {(e)=>{
//                    setState({ambulanceBooking:{
//                        ...state.ambulanceBooking,slots: e.target.value
//                    }
//                    })
//                }}
//                 ></input>
//             </div>
//             <button className="btn btn-lg  mt-3" style={UpdateStyle} onClick={
//                 (e) => {
//                     e.preventDefault();  //to prevent reloading of page 
//                     service.addAmbulanceBookingInfo(state.ambulanceBooking)
//                     .then((result) => {
//                           alert('ambulanceBooking is added in database.');
//                           navigate('/viewBooking');
//                     })
//                     .catch((error)=>{
//                         alert(error)
//                     })   
                   
//                 }
//             }>Add Booking</button>
//             <Link className="btn btn-lg mt-3 ml-3" style={backStyle} to='/patient/patientLogin'>Back</Link>
//             <Link className="btn  btn-lg mt-3 ml-3" style={LogoutStyle} to='/user/logout'>Logout</Link>
//         </form>
//         </div>
//         <Contact/>
//         </div>
//         )
//     }


// export default AddAmbulanceBooking;