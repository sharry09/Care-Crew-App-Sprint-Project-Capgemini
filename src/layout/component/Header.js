import Gif1 from "./Gif1.gif";
import Contact from "./Contact";

function Header() {
  let hStyle = {
    fontFamily: "Comic Sans MS",
    marginTop: "30px",
    marginLeft: "480px",
    fontSize: "50px",
  };
  let h3Style = {
    marginLeft: "600px",
  };

  return (
    <div>
      <h2 style={hStyle}>ＴＨＥ ＣＡＲＥ ＣＲＥＷ </h2>
      <h3 style={h3Style}>Caring. Healing. Leading.</h3>
      <img
        id="home"
        src={Gif1}
        width="1500"
        height="600"
        class="d-inline-block align-top"
        alt=""
      />
      
       <Contact />
    </div>
  );
}

export default Header;
