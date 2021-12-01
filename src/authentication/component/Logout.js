import { useState } from "react";
import { useEffect } from "react"
import { useNavigate } from "react-router";
import loginImg from "../../layout/component/loginImg.gif"
import HospitalAdmin from "../../hospital/component/HospitalAdmin";
import Contact from "../../layout/component/Contact";
import NavBar from "../../layout/component/NavBar";
import { Link} from "react-router-dom";
import User from "../model/User";
import UserService from "../service/UserService";

function Logout() {
let LogoutStyle={
  backgroundColor:"#54436B"
}
    //Initially useState has empty object
    //user is the object
    //setUser is for modifying user(modifying State)
    const[user,setUser]=useState({logout: new User()});
    let service=new UserService();
const navigate=useNavigate();
useEffect(()=>{
  sessionStorage.removeItem('username');
  alert('LOGOUT_SUCCESSFUL')
   navigate('/lifeline/home');

   
})
    return(
      <div></div>
        // <div>
      
//       <div className="container">
//       <div className="row">
//      <div className="col-6">
//          <h1 className="mt-5"> LOGOUT </h1>
//            <form>
//            <div className="form-group">
//             <label for="username">Username</label>
//             <input
//               className="form-control"
//               type="text"
//               id="username"
//               placeholder="Username"
//               value={user.logout.username}
//               onChange={(e)=> setUser({logout:{...user.logout,username:e.target.value }})} 
//             />
//           </div>

//           <div className="form-group">
//             <label for="password">Password</label>
//             <input
//               className="form-control"
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={user.logout.password}
//               onChange={(e)=> setUser({logout:{...user.logout,password:e.target.value }})}
//             />
//          <div className="form-group">
//             <label for="userType">User Type</label>
//             <select
//               className="form-control"
//               type="userType"
//               id="userType"
//               placeholder="userType"
//               value={user.logout.userType}
//               onChange={(e)=> setUser({logout:{...user.logout,userType:e.target.value }})} 
//             >
//                <option value="SELECT">SELECT</option>
//         <option value="HOSPITAL ADMIN">HOSPITAL ADMIN</option>
//         <option value="PATIENT ">PATIENT</option>
//         <option value="DOCTOR">DOCTOR  ADMIN</option>
//         <option value="LABORATORY">LABORATORY ADMIN</option>
//         <option value="AMBULANCE"> AMBULANCE  ADMIN</option>
//         <option value="MEDICALSTORE">MEDICALSTORE  ADMIN</option>
//         <option value="PATIENT ADMIN">PATIENT  ADMIN</option>
//             </select>
//           </div>
//               <button className="btn btn-dark btn-lg" style={LogoutStyle} onClick={
//                   (e)=>{
// e.preventDefault();
// service.loginService(user.logout).then((result)=>{
// alert(result.data)
// sessionStorage.setItem('username', user.logout.username);
// navigate("/lifeline/home");
// }).catch((error) =>{
//     alert(error.message);
// })

//                   }
//               }>Logout</button>
//                <Link className="btn btn-info btn-lg ml-3"   to='/lifeline/services'>Back</Link>
//           </div>
//            </form>
//         </div>
//         <div className="col-6">
//         <img src={loginImg} width="900px" height="600px"/>
//           </div>
//           </div>
//         </div>
//         <Contact/>
//         </div>
    );
}
export default Logout;