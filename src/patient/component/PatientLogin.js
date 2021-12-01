
import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import MedicalStoreImg from "./MedicalStoreImg.jpeg";
import TreatmentPackageImg from "./TreatmentPackageImg.png";
import happyPatient from "./happyPatient.jpg";
import BookApp from "./BookApp.jpg";
import ViewApp from "./ViewApp.png";
import BookAmb from "./BookAmb.png";
import ViewAmb from "./ViewAmb.jpeg";
function PatientLogin(){
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
    return(
<div>
<div className="container">
    <div className="row">
        <div className="col-7 mt-5">
<img src={happyPatient} width="550px" height="500px"/>
        </div>
        <div className="col-5 mt-5">
<h2>Hi there, Care Crew welcomes you .You are our priority. Sign up or sign in to get started.
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
    Operations that you can perform as our client
  </div>
  <div class="row ml-5" style={cardsStyle}>
{/* CARD 1 */}
  <div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={MedicalStoreImg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Medical Store</h5>
    <p class="card-text">All medicines available</p>
    <Link className="btn btn-lg btn-dark mt-3 ml-2" style={operationStyle} to={`/patient/medicalStore`}>View Medical Store</Link>
  </div>
</div>
{/* CARD 2 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
  <img src={TreatmentPackageImg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Packages</h5>
    <p class="card-text">Get the best treatment at Care Crew</p>
    <Link className="btn btn-lg btn-dark ml-2"  style={operationStyle} to={`/patient/view-packages`}>View Packages</Link>
  </div>
</div>
{/* CARD 3 */}
<div class="card col-6 mt-5 ml-5" style={cardStyle}>
  <img src={BookApp} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Book Appointment</h5>
    <p class="card-text">Appointment booking  in Care Crew at your pace</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/bookappointment/add`}>Book Appointment</Link>
  </div>
</div>
{/* CARD 4 */}
<div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={ViewApp} class="card-img-top mt-5" height="250px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Appointment</h5>
    <p class="card-text">View your appointments at Care Crew</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/bookappointment/view-appointment`}>View Appointment</Link>
  </div>
</div>
{/* CARD 5 */}
<div class="card col-6 mt-5 ml-5" style={cardStyle}>
  <img src={BookAmb} class="card-img-top mt-4" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Book Amubulance</h5>
    <p class="card-text">Book in  ease with peace</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2" style={operationStyle} to={`/ambulanceBooking/add`}>Book Ambulance</Link>
  </div>
</div>
{/* CARD 6 */}
<div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={ViewAmb} class="card-img-top mt-5" height="250px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Booking</h5>
    <p class="card-text">View your bookings</p>
    <Link className="btn btn-lg btn-dark mt-4 ml-2" style={operationStyle} to={`/viewBooking`}>View Booking</Link>
  </div>
</div>

  </div>
</div>
    </div>
    <Contact/>
</div>
    );

}
export default PatientLogin;