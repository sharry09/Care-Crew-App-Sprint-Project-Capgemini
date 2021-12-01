
import { Link } from "react-router-dom";
import hospAdmin from "./hospAdmin.jpg"
import AddDoctorImg from "./AddDoctorImg.jpg"
import ViewDoctorImg from "./ViewDoctorImg.jpg"
import AddHospImg from "./AddHospImg.jpg"
import ViewHospImg from "./ViewHospImg.jpg"
import ViewBedCountImg from "./ViewBedCountImg.jpg"
import TreatmentHistoryImg from "./TreatmentHistoryImg.jpg"
import ViewTreatmentHistoryImg from "./ViewTreatmentHistoryImg.jpg"
import Contact from "../../layout/component/Contact";
import DoctorSpecialityImg from "./DoctorSpecialityImg.jpg"
function HospitalAdmin(){
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
<img src={hospAdmin} width="550px" height="500px"/>
        </div>
        <div className="col-5 mt-5">
<h3>Hi, Care Crew welcomes you . You know that Care Crew serves its very
    best to satisfy clients. Sign up or sign in to get started.
</h3>
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
    Operations that you can perform as an Admin
  </div>
  <div class="row ml-5" style={cardsStyle}>
{/* CARD 1 */}
  <div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={AddDoctorImg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Doctors</h5>
    <p class="card-text">You can add the doctors of the Care Crew</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/hospital/doctor/add`}>Add Doctor</Link>
  </div>
</div>
{/* CARD 2 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
  <img src={ViewDoctorImg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Doctors</h5>
    <p class="card-text">View our expert doctors list of the Care Crew</p>
    <Link className="btn btn-lg btn-dark ml-2"  style={operationStyle} to={`/doctor/home`}>View Doctor</Link>
  </div>
</div>
{/* CARD 3 */}
<div class="card col-6 mt-5 ml-5" style={cardStyle}>
  <img src={AddHospImg} class="card-img-top mt-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Hospital</h5>
    <p class="card-text">Add hospital list of the Care Crew</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/hospital/add`}>Add Hospital</Link>
  </div>
</div>
{/* CARD 4 */}
<div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={ViewHospImg} class="card-img-top mt-5" height="250px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Hospital</h5>
    <p class="card-text">View hospital list of the Care Crew</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/hospital/view`}>View Hospital</Link>
  </div>
</div>
{/* CARD 5 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
  <img src={ViewBedCountImg} class="card-img-top mt-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Bed Count</h5>
    <p class="card-text">View bed count and availability in Care Crew</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2" style={operationStyle}  to={`/hospital/viewNoOfBeds`}>View Bed Count</Link>
  </div>
</div>
{/* CARD 6 */}
<div class="card col-6 mt-5 ml-5" style={cardStyle}>
  <img src={TreatmentHistoryImg} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Treatment History of Patients</h5>
    <p class="card-text">Record the treatment details of patients</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle}  to={`/hospital/treatmenthistory/add`}>Add  record</Link> 
  </div>
</div>
{/* CARD 7 */}
<div class="card col-6 mt-5 ml-5" style={cardStyle}>
  <img src={ViewTreatmentHistoryImg} class="card-img-top mt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Treatment History of Patients</h5>
    <p class="card-text">View Treatment History Of Patients</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle}   to={`/hospital/treatmenthistory/view`}>View  record</Link> 
  </div>
</div>
{/* CARD 8 */}
<div class="card col-6 mt-5 ml-5" style={cardStyle}>
  <img src={DoctorSpecialityImg} class="card-img-top mt-3" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View DoctorSpeciality</h5>
    <p class="card-text">View the experts of our Care Crew</p>
    <Link className="btn btn-lg btn-dark  ml-2 mt-3"  style={operationStyle} to={`/doctor/viewDoctorSpeciality`}>Doctor Specialities</Link> 
  </div>
</div>




  </div>
</div>
    </div>
    <Contact/>
    </div>
    );
}
export default HospitalAdmin;