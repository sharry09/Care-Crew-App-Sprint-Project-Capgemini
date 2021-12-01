import ContactForm from "./ContactForm";

function Contact1(){
    let contactStyle = {
        backgroundColor:"#C9B6E4",
       };
       let lastLineStyle={
        backgroundColor:"#B983FF",
        // fontColor:"white",
       }
       let sectionStyle={
        marginLeft:"60px",
       }
return(
  <div>
    <div className="container">
<section style={sectionStyle} className="mt-5">
  <div className="row">
  <div className="feature-box col-lg-4">
<i className="icon fas fa-check-circle fa-4x "></i>
  <h3>Authenticated.</h3>
  <p>Verified and certified doctors ,staffs and team.</p>
</div>
<div className="feature-box  col-lg-4">
<i className="icon fas fa-bullseye fa-4x ml-5"></i>
  <h3 className="ml-5">Focus</h3>
  <p className="ml-5">For your well being.</p>
  </div>
    <div className="feature-box  col-lg-4">
<i className="icon fas fa-heart fa-4x"></i>
  <h3>Guaranteed to work.</h3>
  <p>Our bottom line is always you.</p>
</div>
</div>
</section>
</div> 
<hr/>
<ContactForm/>

<div style={contactStyle} class="card text-center mt-5">
{/* <div id="contact" class="card-header mt-5">
  We care for your health!
</div> */}
<div id="contact"  class="card-body mt-2">
  <h5 class="card-title"> Contact</h5>
  <p class="card-text">
    Trusted for our expertise. Chosen for our care.
  </p>
  <a
    href="https://accounts.google.com/SignUp?hl=en"
    class="btn btn-dark"
  >
    thecarecrew@healthassist.com
  </a>
 
</div>

<span> <i class="social-icon fab fa-facebook-f ml-3"></i>
<i class="social-icon fab fa-twitter ml-3"></i>
<i class="social-icon fab fa-instagram ml-3"></i>
  <i class="social-icon fas fa-envelope ml-3"></i></span>
  <span><button type="button" class="btn btn-outline-dark btn-lg download-button mt-4"><i class="fab fa-apple"></i> Download Care Crew App</button>
<button type="button" class="btn btn-outline-dark btn-lg download-button ml-3 mt-4"><i class="fab fa-google-play"></i> Download Care Crew App</button></span>
<div class="card-footer mt-3" style={lastLineStyle}>
  &copy;The Care Crew App ,December 2021. All rights reserved
</div>
</div>
</div>
);
}
export default Contact1;