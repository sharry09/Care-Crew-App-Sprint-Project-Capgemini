import { useState } from "react";
import { useNavigate } from "react-router";
import Contact from "../../layout/component/Contact";
import loginImg from "../../layout/component/loginImg.gif"
import NavBar from "../../layout/component/NavBar";
import { Link } from "react-router-dom";
import User from "../model/User";
import UserService from "../service/UserService";
function RegisterUser() {
  let imgStyle={
    marginLeft:"90px",
  }
  const [user, setUser] = useState({ register: new User() });
  let service = new UserService();
  const navigate = useNavigate();
  return (
    <div>
    <div className="container mt-5">
    <div className="row">
     <div className="col-6">
      <h1> REGISTER </h1>
      <form>
        <div className="form-group">
          <label for="username">Username</label>
          <input
            className="form-control"
            type="text"
            id="username"
            placeholder="Username"
            value={user.register.username}
            onChange={(e) =>
              setUser({
                register: { ...user.register, username: e.target.value },
              })
            }
          />
        </div>

        <div className="form-group">
          <label for="password">Password</label>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="Password"
            value={user.register.password}
            onChange={(e) =>
              setUser({
                register: { ...user.register, password: e.target.value },
              })
            }
          />
        </div>
        
          <div className="form-group">
          <label for="userType">User Type</label>
          <select
            className="form-control"
  
            id="userType"
            value={user.register.userType}
            onChange={(e) =>
              setUser({
                register: { ...user.register, userType: e.target.value },
              })
            }
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
          <button
            className="btn btn-dark btn-lg"
            onClick={(e) => {
              e.preventDefault();
              service
                .registerService(user.register)
                .then((result) => {
                  alert(result.data);
                  sessionStorage.setItem("username", user.register.username);
                  navigate("/user/register");
                })
                .catch((error) => {
                  alert(error.message);
                });
            }}
          >
            Sign Up
          </button>
          <Link className="btn btn-info btn-lg  ml-3" to='/hospital/hospitalAdmin'>Back</Link>
        </div>
      </form>
    </div>
    <div className="col-6">
        <img src={loginImg} width="900px" height="600px"/>
          </div>
          </div>
        </div>
    <Contact/>
    </div>
  );
}
export default RegisterUser;
