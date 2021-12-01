import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import MedicalStore from "../model/MedicalStore";
import MedicalStoreService from "../service/MedicalStoreService";
import Contact from "../../layout/component/Contact";
import ViewCareCrewImg from "../../layout/component/ViewCareCrewImg";


function UpdateMedicalStore(){
  let UpdateStyle={
    backgroundColor:"#B42B51",
    color:"white",
}
let backStyle={
    backgroundColor:"#DBD0C0",
}
  const[state, setState] = useState({medicalStore: new MedicalStore()});
  let service = new MedicalStoreService();
  let {medicalStoreId} = useParams();
  const navigate = useNavigate();


  useEffect(()=>{   
    //if(sessionStorage.getItem('username')!=null){
   service.findMedicalStoreById(medicalStoreId).then((result)=>{
      setState({medicalStore: result.data})
   }).catch((error)=>{
        alert(error);
   })
//   }else{
//     navigate('/student/login');
//     alert('Unauthorized Access to page.');
//   }
},[]);  
  return(
    <div>
      <div className="container">
        <ViewCareCrewImg/>
        <h1 className="mt-5">UPDATE MEDICAL STORE</h1>
    <form>
     <div>
      <label >MedicalStore Id</label>
      <input className="form-control"  type="text" id="medicalStoreId" placeholder="Enter MedicalStore Id"
        value= {state.medicalStore.medicalStoreId}
        readOnly={true}
        />
      </div>
      <div>
      <label >Medical Store Name</label>
      <input className="form-control" type="text" id="medicalStoreName" placeholder="Enter medicalStore Name"
      value={state.medicalStore.medicalStoreName}
      onChange = { (e) =>
      {
          setState( { medicalStore:  { 
            ...state.medicalStore,
            medicalStoreName: e.target.value
          }} )
      } } />
     </div>
    <button className="btn btn-lg mt-3" style={UpdateStyle} onClick={
        (e) => {
            e.preventDefault();
            service.updateMedicalStore(state.medicalStore).then(()=>{
                alert('MedicalStore record is updated')
                setState({medicalStore: {}})
                navigate('/medicalStore/get-medicalStore');
                          }).catch((error)=>{
                alert(error);
            })
                
                 
         }
    }>Update MedicalStore</button>
    <Link className="btn btn-lg mt-3 ml-3" style={backStyle} to={`/medicalStore/get-medicalStore`}>Cancel</Link>
      </form>
      </div>
      <Contact/>
      </div>
    );
}
export default UpdateMedicalStore;