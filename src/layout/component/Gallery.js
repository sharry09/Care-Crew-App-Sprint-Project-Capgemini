import Pic9 from "./Pic9.webp";
import Pic2 from "./Pic2.webp";
import Pic3 from "./Pic3.webp";
import Pic4 from "./Pic4.webp";
import Pic5 from "./Pic5.jpg";
import Pic8 from "./Pic8.jpg";
import Contact from "./Contact";
import NavBar from "./NavBar";
function Gallery(){
    let galleryHeading = {
        marginLeft: "650px",
      };
      
      let picStyle = {
        maxWidth: "20rem",
      };
    return(
<div>
    {/* <NavBar/> */}
<h1 className="mt-5" style={galleryHeading}>
GALLERY
</h1>
<div className="container">
<div className="row">
  <div className="col-4">
    <img className="mt-4 " style={picStyle} src={Pic9}></img>
  </div>
  <div className="col-4">
    <img className="mt-4 ml-3" style={picStyle} src={Pic2}></img>
  </div>
  <div className="col-4">
    <img className="mt-4 ml-4" style={picStyle} src={Pic3}></img>
  </div>
  <div className="col-4">
    <img className="mt-4" style={picStyle} src={Pic4}></img>
  </div>
  <div className="col-4">
    <img className="mt-4 ml-3" style={picStyle} src={Pic5}></img>
  </div>
  <div className="col-4">
    <img className="mt-4 ml-3" style={picStyle} src={Pic8}></img>
  </div>
</div>
</div>
<Contact/>
</div>
    );
}
export default Gallery;