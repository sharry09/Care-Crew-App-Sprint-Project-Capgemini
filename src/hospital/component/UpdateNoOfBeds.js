import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import Contact from "../../layout/component/Contact";
import Hospital from "../model/Hospital";
import HospitalService from "../service/HospitalService";
import HospAdminImg from "../../layout/component/HospAdminImg";


function UpdateNoOfBeds(){
    let UpdateStyle={
        backgroundColor:"#FF7777"
    }
    let CancelStyle={
        backgroundColor:"#3D2C8D"
    }

    const[state,setState] = useState({hospital: new Hospital()});
    let service = new HospitalService();
    const {hospitalId} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        if(sessionStorage.getItem('username') != null){
        // alert('Calling useEffect');
         service.findHospitalByid(hospitalId).then((result)=>{
           setState({hospital: result.data})
            //navigate('/doctor/home');
           }).catch((error)=>{
                alert(error);
           })
    }else{
        alert('REGISTER OR LOGIN TO GET  ACCESS TO HOSPITAL ADMIN PAGE');
        navigate('/user/login');
    }
}, [])
    return(
        <div>
        <div className="container">
        <HospAdminImg/>
            <h1 className="mt-5">UPDATE BED COUNT</h1>
        <form>
        <div>
            <label for="hospitalId">Hospital Id</label>
            <input className="form-control"  type="text" id="hospitalId" 
            value={state.hospital.hospitalId}
            readOnly={true}
            ></input>
        </div>
        <div>
            <label for="hospitalName">Hospital Name</label>
            <input className="form-control"  type="text" id="hospitalName" 
            value={state.hospital.hospitalName}
            readOnly={true}
            ></input>
        </div>
        <div>
            <label for="hospitalLocation">Hospital Location</label>
            <input className="form-control"  type="text" id="hospitalLocation" 
            value={state.hospital.hospitalLocation}
            readOnly={true}
            ></input>
        </div>
        <div>
            <label for="hospitalContact">Hospital Contact</label>
            <input className="form-control"  type="text" id="hospitalContact" 
            value={state.hospital.hospitalContact}
            readOnly={true}
            ></input>
        </div>
        <div>
            <label for="noOfBeds">Number of Beds</label>
            <input className="form-control"  type="text" id="noOfBeds" placeholder="Enter Number of Beds"
            value={state.hospital.noOfBeds}
            onChange = {(e)=>{
               setState({hospital:{
                   ...state.hospital,noOfBeds: e.target.value
               }
               })
           }}
            ></input>
            </div>
        <button className="btn  mt-3" style={UpdateStyle} onClick={
            (e) => {
                e.preventDefault();
               service.updateNoOfBeds(state.hospital).then(()=>{
                  alert('Number of Beds is updated in the database.')
                  setState({hospital: {} })
                  navigate('/hospital/viewNoOfBeds');
               }).catch((error)=>{
                alert(error);
            })
            }
        }>Update</button>
        <Link className="btn btn-primary mt-3 ml-3" style={CancelStyle} to={`/hospital/hospitalAdmin`} >Back</Link>
    </form>
    </div>
    <Contact/>
    </div>
    );
}
export default UpdateNoOfBeds;