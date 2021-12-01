
import { Link } from "react-router-dom";
import MedAdminImg from "./MedAdminImg.jpg"
import Med1Img from "./Med1Img.jpg"
import Med2Img from "./Med2Img.png"
import Med3Img from "./Med3Img.jpeg"
import Med4Img from "./Med4Img.jpeg"

import Contact from "../../layout/component/Contact";

function MedAdmin(){
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
<img src={MedAdminImg} width="550px" height="500px"/>
        </div>
        <div className="col-5 mt-5">
<h3>Hi, Care Crew welcomes you as Medical Store Admin. You know that Care Crew serves its very
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
    Operations that you can perform as Medical Store Admin
  </div>
  <div class="row ml-5" style={cardsStyle}>
{/* CARD 1 */}
  <div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={Med1Img} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Medical Store</h5>
    <p class="card-text">You can add medical store to the Care Crew Lab</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2" style={operationStyle} to={`/medicalStore/add`}>Add  Medical Store</Link>
  </div>
</div>
{/* CARD 2 */}
<div class="card col-6 mt-5 ml-4" style={cardStyle}>
  <img src={Med2Img} class="card-img-top mt-4" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Medical Store</h5>
    <p class="card-text">View our medical store  list of the Care Crew Lab</p>
    <Link className="btn btn-lg btn-dark mt-3 ml-2"  style={operationStyle} to={`/medicalStore/get-medicalStore`}>View Medical Store</Link>
  </div>
</div>
{/* CARD 3 */}
<div class="card col-6  mt-5 ml-5" style={cardStyle}>
  <img src={Med3Img} class="card-img-top mt-2" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Add Medicine</h5>
    <p class="card-text">Add Medicine to the medical store</p>
    <Link className="btn btn-lg btn-dark mt-4 ml-2" style={operationStyle} to={`/medicalStore/medicine/add`}>Add Medicine</Link>
  </div>
</div>
{/* CARD 4 */}
<div class="card col-6 mt-5 ml-3" style={cardStyle}>
  <img src={Med4Img} class="card-img-top mt-5" height="250px" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">View Medicine</h5>
    <p class="card-text">View medicines in Care Crew medical store</p>
    <Link className="btn btn-lg btn-dark mt-5 ml-2" style={operationStyle} to={`/medicalStore/medicine/get-medicine`}>View Medicines</Link>
  </div>
</div>





  </div>
</div>
    </div>
    <Contact/>
    </div>
    );
}
export default MedAdmin;