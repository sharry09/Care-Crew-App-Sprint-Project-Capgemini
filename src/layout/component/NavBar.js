import { Link } from "react-router-dom";
import logo2 from "./logo2.jpg";

function NavBar(){
  let serviceButtonStyle={
    backgroundColor:"#DADDFC",
  }
  let bStyle={
    backgroundColor:"#E8F1F5",
   
  }
  let bsStyle={
    backgroundColor:"#324E7B",
  }
  let logoStyle={
    borderRadius:"100px",
  }
    return(
      <div>
<nav  class="navbar navbar-expand-lg navbar-dark " style={bsStyle} >
        <img
          src={logo2}
          width="70"
          height="50"
          class="d-inline-block align-top"
          style={logoStyle}
          alt=""
        />
        <a className="navbar-brand ml-3 h1" href="#">
        <strong> ＴＨＥ ＣＡＲＥ ＣＲＥＷ</strong>        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to={`lifeline/home`}>
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`lifeline/about`}>
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`lifeline/whyus`}>
                Why Care Crew?
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`lifeline/gallery`} >
               Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`lifeline/testimonials`}>
                Testimonials
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`lifeline/disclaimer`}>
                Disclaimer
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to={`lifeline/contact1`}>
                Contact
              </Link>
            </li>

           
          </ul>
        </div>
       
        <div>
  <Link class="btn mr-2"  style={serviceButtonStyle}  to={`lifeline/services`}
  id="dropdownMenuButton">
    Our Services
  </Link>

</div>
<div>
  
{sessionStorage.getItem('username')!=null &&
<Link class="btn mr-3"   style={serviceButtonStyle}  to={`lifeline/home`}
  id="dropdownMenuButton" >
  Logout
  </Link>
} 
</div>

    
        
      </nav>
      <nav class="navbar navbar-light justify-content-between" style={bStyle}>
  <a class="navbar-brand ml-5">Your Hospital for Life.</a>
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
      </div>
    );
}
export default NavBar;