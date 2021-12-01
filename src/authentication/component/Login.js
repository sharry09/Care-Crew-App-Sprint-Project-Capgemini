import { useState } from "react";
import { useNavigate } from "react-router";
import loginImg from "../../layout/component/loginImg.gif"
import Contact from "../../layout/component/Contact";

import { Link} from "react-router-dom";
import User from "../model/User";
import UserService from "../service/UserService";

function Login() {

  let imgStyle={
    marginRight:"130px",
  }
    const[user,setUser]=useState({login: new User()});
    let service=new UserService();
const navigate=useNavigate();
    return(
        <div>
      
      <div className="container">
     <div className="row mt-5">
     <div className="col-6">
   
        <h1  className="mt-5"> LOGIN </h1>
           <form>
           <div className="form-group">
            <label for="username">Username</label>
            <input
              className="form-control"
              type="text"
              id="username"
              placeholder="Username"
              value={user.login.username}
              onChange={(e)=> setUser({login:{...user.login,username:e.target.value }})} 
            />
          </div>

          <div className="form-group">
            <label for="password">Password</label>
            <input
              className="form-control"
              type="password"
              id="password"
              placeholder="Password"
              value={user.login.password}
              onChange={(e)=> setUser({login:{...user.login,password:e.target.value }})}
            />
            </div>
        <div className="form-group">
            <label for="userType">User Type</label>
            <select
              className="form-control"
              type="userType"
              id="userType"
              placeholder="userType"
              value={user.login.userType}
              onChange={(e)=> setUser({login:{...user.login,userType:e.target.value }})} 
            >
               <option value="SELECT">SELECT</option>
        <option value="HOSPITAL ADMIN">HOSPITAL ADMIN</option>
        <option value="PATIENT ">PATIENT</option>
        <option value="DOCTOR">DOCTOR  ADMIN</option>
        <option value="LABORATORY">LABORATORY ADMIN</option>
        <option value="AMBULANCE"> AMBULANCE  ADMIN</option>
        <option value="MEDICALSTORE">MEDICALSTORE  ADMIN</option>
        <option value="PATIENT ADMIN">PATIENT  ADMIN</option>
            </select>
          </div>
          <div>
              <button className="btn btn-dark btn-lg" onClick={
                  (e)=>{
e.preventDefault();
service.loginService(user.login).then((result)=>{
alert(result.data)
sessionStorage.setItem('username', user.login.username);
navigate("/user/login");
}).catch((error) =>{
    alert(error.message);
})

                  }
              }>Login</button>
               <Link className="btn btn-info btn-lg  ml-3" to='/lifeline/services'>Back</Link>
          </div>
           </form>
           </div>
       
        <div className="col-6">
        <img src={loginImg} style={imgStyle} />
          </div>
          </div>
        </div>
        <Contact/>
        </div>
    );
}
export default Login;