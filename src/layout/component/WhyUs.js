import Contact from "./Contact";
import hosp4 from "./hosp4.webp";
import hosp6 from "./hosp5.webp";
import hosp7 from "./hosp7.webp";
import hosp8 from "./hosp8.webp";
import NavBar from "./NavBar";
function WhyUs(){
    let galleryStyle = {
        marginLeft: "440px",
      };
    return(
        <div>
            {/* <NavBar/> */}
<div className="container">
        <h1 id="whyus" className="mt-4" style={galleryStyle}>
          WHY CARE CREW?
        </h1>
       
        <div class="card-group">
          <div class="card mr-5 mt-4">
            <img class="card-img-top " src={hosp4} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Enhanced Tech</h5>
              <p class="card-text">
                The future of healthcare lies in working hand-in-hand with
                technology and healthcare workers have to embrace emerging
                healthcare technologies in order to stay relevant in the coming
                years.
              </p>
              <p class="card-text">
                <small class="text-muted">Care Crew for your Health</small>
              </p>
            </div>
          </div>
          <div class="card mr-5 mt-4">
            <img class="card-img-top" src={hosp7} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">24x7 Care</h5>
              <p class="card-text">
                Aid with the best attendant at home, Living with an illness,
                disorder, breakdown or an elderly age is not only difficult and
                strenuous for the person who is dealing with it but also for the
                people who live with them.{" "}
              </p>
              <p class="card-text">
                <small class="text-muted">Care Crew for your Health</small>
              </p>
            </div>
          </div>
          <div class="card mr-5 mt-4">
            <img class="card-img-top" src={hosp6} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Experienced Doctors</h5>
              <p class="card-text">
                To do this, we identified 12 doctors from around the US who are
                recognized as outstanding teacher-physicians. We scrutinized
                their bedside behavior, did semi-structured interviews with
                them.
              </p>
              <p class="card-text">
                <small class="text-muted">Care Crew for your Health</small>
              </p>
            </div>
          </div>
          <div class="card mr-5 mt-4">
            <img class="card-img-top" src={hosp8} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Revised Plans</h5>
              <p class="card-text">
                Health issues increase with a sedentary lifestyle and
                advancement in age to a larger population. The current pandemic
                situation has underlined the need for health insurance more than
                ever before.{" "}
              </p>
              <p class="card-text">
                <small class="text-muted">Care Crew for your Health</small>
              </p>
            </div>
          </div>
        </div>
       
      </div>
      <Contact/>
      </div>
    );
}
export default WhyUs;