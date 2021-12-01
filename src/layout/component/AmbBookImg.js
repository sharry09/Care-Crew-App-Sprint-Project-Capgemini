
import AmbBookGif  from "./AmbBookGif.gif"
function HospAdminImg(){
    let imageStyle={
      paddingTop:"10px",
      paddingLeft:"100px",
    }
    let image1Style={
        paddingTop:"110px",
        paddingLeft:"100px",
      }
    return(
        <div class="container">
              <div class="row">
                  <div className="col-6">
<img src={AmbBookGif} width="500px"  className="mt-5"/>
</div>
<div className="col-6">
    <h2  style={image1Style}> ＴＨＥ ＣＡＲＥ ＣＲＥＷ</h2>
<h2 style={imageStyle}>At your doorstep when you need  to serve you</h2>
</div>
</div>
</div>
    )
}
export default HospAdminImg;