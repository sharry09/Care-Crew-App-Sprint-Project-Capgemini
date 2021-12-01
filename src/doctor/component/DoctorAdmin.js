import DocAdminImg from "./DocAdminImg.jpg"
import AddDoctorImg1 from "./AddDoctorImg1.jpeg"
import ViewDoctorImg1 from "./ViewDoctorImg1.jpeg"
import ViewPatientImg1 from "./ViewPatientImg1.png"
import Contact from "../../layout/component/Contact";
import { Link } from "react-router-dom";
function DoctorAdmin(){
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
<img src={DocAdminImg} width="550px" height="500px"/>
       </div>
       <div className="col-5 mt-5">
<h2> Care Crew welcomes you as Doctor Admin . Care Crew serves its very
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
 <img src={AddDoctorImg1} class="card-img-top mt-2" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">Add Doctor</h5>
   <p class="card-text">You can add the doctors of the Care Crew</p>
   <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/doctor/add`}>Add Doctor</Link>
 </div>
</div>
{/* CARD 2 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
 <img src={ViewDoctorImg1} class="card-img-top mt-2" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">View Doctors</h5>
   <p class="card-text">View our expert doctors list of the Care Crew</p>
   <Link className="btn btn-lg btn-dark ml-2"  style={operationStyle} to={`/readDoctorDetails`}>View Doctor</Link>
 </div>
</div>
{/* CARD 3 */}
<div class="card col-6 mt-4 ml-5" style={cardStyle}>
 <img src={ViewPatientImg1} class="card-img-top mt-5" alt="..."/>
 <div class="card-body">
   <h5 class="card-title">View Patients</h5>
   <p class="card-text">View Patients in Care Crew</p>
   <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/doctor/viewPatients`}>View Patients</Link>
 </div>
</div>





 </div>
</div>
   </div>
   <Contact/>
   </div>
    );
}
export default DoctorAdmin;