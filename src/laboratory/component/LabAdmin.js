
import { Link } from "react-router-dom";
import LabAdminImg from "./LabAdminImg.jpg"
import Lab1Img from "./Lab1Img.jpeg"
import Lab2Img from "./Lab2Img.jpeg"
import Lab3Img from "./Lab3Img.jpeg"
import Lab4Img from "./Lab4Img.jpeg"
import Lab5Img from "./Lab5Img.png"
import Contact from "../../layout/component/Contact";

function LabAdmin(){
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
<img src={LabAdminImg} width="550px" height="500px"/>
        </div>
        <div className="col-5 mt-5">
<h3>Hi, Care Crew welcomes you as Lab Admin. You know that Care Crew serves its very
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
    Operations that you can perform as Lab Admin
  </div>
  <div class="row ml-5" style={cardsStyle}>
{/* CARD 1 */}
  <div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={Lab1Img} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Doctors</h5>
    <p class="card-text">You can add the doctors to the Care Crew Lab</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/laboratory/doctor/add`}>Add Doctor</Link>
  </div>
</div>
{/* CARD 2 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
  <img src={Lab2Img} class="card-img-top mt-4" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Doctors in Lab</h5>
    <p class="card-text">View our expert doctors list of the Care Crew Lab</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2"  style={operationStyle} to={`/laboratory/doctor/view`}>View Doctors in lab</Link>
  </div>
</div>
{/* CARD 3 */}
<div class="card col-6  mt-5 ml-5" style={cardStyle}>
  <img src={Lab3Img} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Medical Result</h5>
    <p class="card-text">Add medical test results of patients</p>
    <Link className="btn btn-lg btn-dark ml-2" style={operationStyle} to={`/laboratory/medicalTestResult/add`}>Add Medical Result</Link>
  </div>
</div>
{/* CARD 4 */}
<div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={Lab4Img} class="card-img-top mt-5" height="250px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Doctor Categories</h5>
    <p class="card-text">View Doctor Categories of the Care Crew</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2" style={operationStyle} to={`/laboratory/doctor/viewDoctorCategory`}>View Doctor Categories</Link>
  </div>
</div>
{/* CARD 5 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
  <img src={Lab5Img} class="card-img-top mt-5" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Medical Results</h5>
    <p class="card-text"> View Medical Results Care Crew  Lab</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2" style={operationStyle}  to={`/laboratory/medicalTestResult/view`}>View Medical Results</Link>
  </div>
</div>




  </div>
</div>
    </div>
    <Contact/>
    </div>
    );
}
export default LabAdmin;