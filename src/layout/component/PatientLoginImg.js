import PatientLoginMain from "./PatientLoginMain.gif"
function PatientLoginImg(){
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
<img src={PatientLoginMain} width="600px"  className="mt-5"/>
</div>
<div className="col-6">
    <h2  className="mt-5" style={image1Style}> ＴＨＥ ＣＡＲＥ ＣＲＥＷ</h2>
<h1 style={imageStyle}>Hey ! Explore us!</h1>
</div>
</div>
</div>
    )
}
export default PatientLoginImg;