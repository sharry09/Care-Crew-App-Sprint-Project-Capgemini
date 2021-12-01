import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Medicine from "../model/Medicine";
import MedicalStoreService from "../service/MedicalStoreService";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";
import Contact from "../../layout/component/Contact";



function UpdateMedicine(){
  let UpdateStyle={
    backgroundColor:"#B42B51",
    color:"white",
}
let backStyle={
    backgroundColor:"#DBD0C0",
}
  const[state, setState] = useState({medicine: new Medicine()});
  let service = new MedicalStoreService();
  let {medicineId} = useParams();
  const navigate = useNavigate();
  
  useEffect(()=>{   
    //if(sessionStorage.getItem('username')!=null){
   service.getMedicineById(medicineId).then((result)=>{
      setState({medicine: result.data})
   }).catch((error)=>{
        alert(error);
   })
//   }else{
//     navigate('/student/login');
//     alert('Unauthorised Access to page.');
//   }
},[]);  
  return(
    <div>
    <div className="container">
      <ViewCareCrewImg/>
      <h1 className="mt-5">UPDATE MEDICINE</h1>
    <form>
     <div>
      <label >Medicine Id</label>
      <input className="form-control"  type="text" id="medicineId" placeholder="Enter medicine Id"
        value= {state.medicine.medicineId}
        readOnly={true}
        />
      </div>
      <div>
      <label >Medicine Name</label>
      <input className="form-control" type="text" id="medicineName" placeholder="Enter medicine Name"
      value={state.medicine.medicineName}
      onChange = { (e) =>
      {
          setState( { medicine:  { 
            ...state.medicine,
            medicineName: e.target.value
          }} )
      } } />
     </div>
    <button className="btn btn-lg mt-3" style={UpdateStyle} onClick={
        (e) => {
            e.preventDefault();
            service.updateMedicine(state.medicine).then(()=>{
                alert('Medicine record is updated')
                setState({medicine: {}})
                navigate('/medicalStore/medicine/get-medicine');
                          }).catch((error)=>{
                alert(error);
            })
                
                 
         }
    }>Update Medicine</button>
    <Link className="btn btn-lg mt-3 ml-3" style={backStyle} to={`/medicalStore/medicine/get-medicine`}>Back</Link>
      </form>
       </div>
       <Contact/>
       </div>
    );
}
export default UpdateMedicine;