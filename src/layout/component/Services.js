import Contact from "./Contact";
import PatientLoginServiceGif from "./PatientLoginServiceGif.gif";
import A1 from "./A1.gif";
import D1 from "./D1.gif";
import L1 from "./L1.gif";
import HeaderGif from "./HeaderGif.gif";
import M1 from "./M1.gif";
import P2 from "./P2.gif";
import { Link } from "react-router-dom";
function Services(){
    
  let serviceHStyle = {
    marginLeft: "600px",
  };


  let serviceStyle = {
    maxWidth: "18rem",
  };

    return(
<div>
{/* <NavBar/> */}
      <h1 id="services" className="mt-5" style={serviceHStyle}>
        OUR SERVICES
      </h1>
      <div className="container">
        <div className="row">
          <div class="card col-4 mt-4 ml-5" style={serviceStyle}>
            <img class="card-img-top" src={A1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Hospital</h5>
              <p class="card-text">
                A well-built infrastructure with aim to provide the best care
                for you.
              </p>
              <Link  class="btn btn-primary" to={`/hospital/hospitalAdmin`}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div class="card col-4 mt-4 ml-5" style={serviceStyle}>
            <img class="card-img-top mt-4" src={D1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Doctor</h5>
              <p class="card-text">Dedicated professionals to serve you </p>
              <Link to={`/doctor/doctorAdmin`} class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div class="card col-4 mt-4 ml-5" style={serviceStyle}>
            <img class="card-img-top mt-2" src={P2} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Patient Care</h5>
              <p class="card-text">Wishing the well being of our patients</p>
              <Link to={`/patient/patientAdmin`} class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div
            id="laboratory"
            class="card col-4 mt-5 ml-5"
            style={serviceStyle}
          >
            <img class="card-img-top mt-5" src={L1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Laboratory</h5>
              <p class="card-text">Standard labs and equipments</p>
              <Link to={`/lab/labAdmin`} class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div id="medical" class="card col-4 mt-5 ml-5" style={serviceStyle}>
            <img class="card-img-top mt-4" src={M1} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Medical Store</h5>
              <p class="card-text">All medicines in one place</p>
              <Link to={`/med/medAdmin`} class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div id="ambulance" class="card col-4 mt-5 ml-5" style={serviceStyle}>
            <img class="card-img-top" src={HeaderGif} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Ambulance</h5>
              <p class="card-text">For the welfare of our patients</p>
              <Link to={`/amb/ambAdmin`} class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
          <div id="patientLogin" class="card col-4 mt-5 ml-5" style={serviceStyle}>
            <img class="card-img-top mt-5" src={PatientLoginServiceGif} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Patient Login</h5>
              <p class="card-text">your wellness is our happiness</p>
              <Link to={`/patient/patientLogin`} class="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
      </div>
    )
}
export default Services;