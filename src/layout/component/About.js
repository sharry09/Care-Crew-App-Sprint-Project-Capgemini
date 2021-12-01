import Contact from "./Contact";
import Gif3 from "./Gif3.webp";
import NavBar from "./NavBar";
function About(){
    let headingStyle = {
        fontSize: "40px",
        marginLeft: "500px",
      };
    return(
      <div>
        {/* <NavBar/> */}
        <div className="container">
        <div className="row">
          <h1 id="about" className="mt-5" style={headingStyle}>
            ABOUT
          </h1>
          <div className="col-sm-6">
            <p className="mt-5">
             The Care Crew  was established in 1999 by Dr.Kiran Reddy,
              Dr.Riya , Dr.Shaistha, Dr.Sharon, renowned as the architect of
              modern healthcare in India. As the nation’s first corporate
              hospital, Care Crew  Hospitals is acclaimed for pioneering the
              private healthcare revolution in the country. Care Crew  Hospitals
              has emerged as Asia’s foremost integrated healthcare services
              provider and has a robust presence across the healthcare
              ecosystem, including Hospitals, Pharmacies, Primary Care &
              Diagnostic Clinics and several retail health models. The Group
              also has Telemedicine facilities across several countries, Health
              Insurance Services, Global Projects Consultancy, Medical Colleges,
              Medvarsity for E-Learning, Colleges of Nursing and Hospital
              Management and a Research Foundation. In addition, ‘ASK Care Crew ’
              – an online consultation portal and  Care Crew  Home Health provide
              the care continuum. The cornerstones of Care Crew  legacy are its
              unstinting focus on clinical excellence, affordable costs, modern
              technology and forward-looking research & academics.
            </p>
          </div>
          <div className="col-sm-6">
            <img src={Gif3} width="650px" />
          </div>
         
        </div>
      </div>
      <Contact/>
      </div>
    );
}
export default About;