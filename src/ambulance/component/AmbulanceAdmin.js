import AmbAdminImg from "./AmbAdminImg.jpeg"
import AddAmbImg1 from "./AddAmbImg1.png";
import AddAmbImg2 from "./AddAmbImg2.png";
import AddAmbImg3 from "./AddAmbImg3.png";

import Contact from "../../layout/component/Contact";
import { Link } from "react-router-dom";
function AmbulanceAdmin(){
    let loginStyle={
        backgroundColor:"#FF5C58",
      }
      let homeStyle={
        backgroundColor:"#45EBA5",
      }
      let operationStyle={
        backgroundColor:"#0F2C67",
      }
      let cardStyle={
        maxWidth:"18rem",
      
      }
      let cardsStyle={
        marginLeft:"70px",
      }
    return (
<div>    
   
   <div className="container">
   <div className="row">
       <div className="col-7 mt-5">
<img src={AmbAdminImg} width="550px" height="500px"/>
       </div>
       <div className="col-5 mt-5">
<h2> Care Crew welcomes you as Ambulance Admin . Care Crew serves its very
   best to satisfy clients. Sign up or sign in to get started.
</h2>
<Link className="btn btn-lg  mt-5 ml-2" style={loginStyle} to={`/user/login`}>
         Login
       </Link>
       <Link className="btn btn-lg  mt-5 ml-3" style={loginStyle} to={`/user/register`}>
         Register
       </Link>
       <Link className="btn btn-lg  mt-5 ml-3" style={homeStyle} to={`/lifeline/services`}>
        Back  
       </Link>
       </div>
       </div>
   </div>
   <div className="container">
   <div class="card mt-5 ">
 <div class="card-header">
   Operations that you can perform as an Doctor Admin
 </div>
 <div class="row ml-5" style={cardsStyle}>
{/* CARD 1 */}
 <div class="card col-6 mt-5 ml-3" style={cardStyle}>
 <img src={AddAmbImg1} class="card-img-top mt-2" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">Add Ambulance</h5>
   <p class="card-text">You can add the ambulance at the Care Crew</p>
   <Link className="btn btn-lg btn-dark mt-2 ml-2" style={operationStyle} to={`/ambulance/add`}>Add Ambulance</Link>
 </div>
</div>
{/* CARD 2 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
 <img src={AddAmbImg2} class="card-img-top mt-2" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">View Ambulance</h5>
   <p class="card-text">View ambulance details list of the Care Crew</p>
   <Link className="btn btn-lg btn-dark mt-5 ml-2"  style={operationStyle} to={`/viewAmbulance`}>View Ambulance</Link>
 </div>
</div>
{/* CARD 3 */}
<div class="card col-6 mt-3 ml-5" style={cardStyle}>
 <img src={AddAmbImg3} class="card-img-top mt-2" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">View Booking</h5>
   <p class="card-text">View  ambulance booking record </p> 
   <Link className="btn btn-lg btn-dark mt-3 ml-2" style={operationStyle} to={`/viewBooking`}>View Booking</Link>
 </div>
</div>




 </div>
</div>
   </div>
   <Contact/>
   </div>
    );
}
export default AmbulanceAdmin;