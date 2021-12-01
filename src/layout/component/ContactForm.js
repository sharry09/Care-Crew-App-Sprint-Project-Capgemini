import ContactFormGif  from "./ContactFormGif.gif"
function ContactForm(){
 
    let imageStyle={
      paddingTop:"10px",
      paddingLeft:"100px",
    }
    let image1Style={
        paddingTop:"110px",
        paddingLeft:"100px",
      }
      let formStyle={
        paddingTop:"30px",
          paddingLeft:"100px",
      }
      let buttonStyle={
       backgroundColor:"#F2B4B4"
      }
    
    return(
        <div class="container">
              <div class="row">
                  <div className="col-6">
<img src={ContactFormGif} width="600px"  className="mt-5"/>
</div>
<div className="col-6">
    <h2  style={image1Style}> ＴＨＥ ＣＡＲＥ ＣＲＥＷ</h2>
<h1 style={imageStyle}> <i>Subscribe to our news letter</i></h1>
<form style={formStyle}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never spam your inbox.</small>
  </div>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
 Subscribe
</button>


<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">ＴＨＥ ＣＡＲＥ ＣＲＥＷ</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Your subscription to Care Crew Newsletter is successful!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        {/* <button type="button" class="btn btn-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>
  </form>
</div>

</div>
</div>
    )
}
export default ContactForm;