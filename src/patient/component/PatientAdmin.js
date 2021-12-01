import { Link } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import PatientAdminImg from "./PatientAdminImg.jpg"
import AddPatientImg from "./AddPatientImg.png"
import ViewPatientImg from "./ViewPatientImg.png"
function PatientAdmin(){
    let imgStyle={
        marginRight:"150px",
        paddingRight:"30px",
    }
    let loginStyle={
        backgroundColor:"#FF5C58",
         marginLeft:"100px",
     
      }
      let homeStyle={
        backgroundColor:"#45EBA5",
      }
let text1Style={
    marginLeft:"70px",
    paddingTop:"30px",
    }
    let textStyle={
        paddingLeft:"10px",
        paddingTop:"120px",
        }
    let operationStyle={
        backgroundColor:"#0F2C67",
      }
      let cardStyle={
        maxWidth:"18rem",
       
      }
      let fullStyle={
       
        marginRight:"50px",
        // paddingLeft:"130px",
      }
      let cardsStyle={
        marginLeft:"70px",
      }
    return(
<div>
 <div className="container">
 <div className="row">
     <div className="col-6">
         <img className="mt-5 mr-5" width="550px" height="500px" style={imgStyle} src={PatientAdminImg}/>
     </div>
     <div className="mt-5 col-6">
    <h3 style={text1Style}>Hi ,CARE CREW welcomes you as Patient Admin.
         We have 20+ years of experience in providing the best care to our patients.
         </h3>
          <Link className="btn btn-lg mt-5" style={loginStyle} to={`/user/login`}>
          Login
        </Link>
        <Link className="btn btn-lg  mt-5 ml-3" style={loginStyle} to={`/user/register`}>
          Register
        </Link>
        <Link className="btn btn-lg  mt-5 ml-4" style={homeStyle} to={`/lifeline/services`}>
         Back  
        </Link>
     </div>
     </div>
     <div className="container" style={fullStyle}>
    <div class="card mt-5 "  >
  <div class="card-header" >
    Operations that you can perform as a Patient Admin
  </div>
  <div class="row ml-5" style={cardsStyle}>
{/* CARD 1 */}
  <div class="card col-12 mt-5 ml-3" style={cardStyle}>
  <img src={AddPatientImg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Patients</h5>
    <p class="card-text">You can add patients to Care Crew</p>
    <Link className="btn btn-lg btn-dark  ml-2" style={operationStyle} to={`/patient/add`}>Add Patient</Link>
  </div>
</div>
{/* CARD 2 */}
<div class="card col-12 mt-5 ml-5 " style={cardStyle}>
  <img src={ViewPatientImg} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Patient</h5>
    <p class="card-text">View patients in Care Crew</p>
    <Link className="btn btn-lg btn-dark mt-3 ml-2" style={operationStyle} to={`/patient/view-patient`}>
          View Patient
        </Link>
  </div>
</div>
<div  className="mt-5 ml-3">
 <h3 style={textStyle}>   Login to get Started! </h3>
</div>




  </div>
</div>
    </div>  
     </div>
     <Contact/>   
</div>
    );
}
export default  PatientAdmin;