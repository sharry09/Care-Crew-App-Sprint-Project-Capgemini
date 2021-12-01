import React from "react";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import AddAmbulance1 from "../../ambulance/component/AddAmbulance1";
import AmbulanceAdmin from "../../ambulance/component/AmbulanceAdmin";
import DeleteAmbulance from "../../ambulance/component/DeleteAmbulance";
import ViewAmbulance from "../../ambulance/component/ViewAmbulance";
import AddAmbulanceBooking from "../../ambulanceBooking/component/AddAmbulanceBooking";
import DeleteAmbulanceBooking from "../../ambulanceBooking/component/DeleteAmbulanceBooking";
import UpdateAmbulanceBooking from "../../ambulanceBooking/component/UpdateAmbulanceBooking";
import ViewAmbulanceBooking from "../../ambulanceBooking/component/ViewAmbulanceBooking";
import Login from "../../authentication/component/Login";
import Logout from "../../authentication/component/Logout";
import RegisterUser from "../../authentication/component/RegisterUser";
import AddAppointment from "../../bookingAppointment/component/AddAppointment";
import DeleteAppointment from "../../bookingAppointment/component/DeleteAppointment";
import UpdateAppointment from "../../bookingAppointment/component/UpdateAppointment";
import ViewAppointment from "../../bookingAppointment/component/ViewAppointment";
import AddDoctor1 from "../../doctor/component/AddDoctor1";
import DeleteDoctor1 from "../../doctor/component/DeleteDoctor1";
import DoctorAdmin from "../../doctor/component/DoctorAdmin";
import UpdateDoctor1 from "../../doctor/component/UpdateDoctor1";
import ViewDoctor1 from "../../doctor/component/ViewDoctor1";
import ViewPatientByDoc from "../../doctor/component/ViewPatientByDoc";
import AddDoctor from "../../hospital/component/AddDoctor";
import AddHospital from "../../hospital/component/AddHospital";
import AddTreatmentHistory from "../../hospital/component/AddTreatmentHistory";
import DeleteDoctor from "../../hospital/component/DeleteDoctor";
import DeleteHospital from "../../hospital/component/DeleteHospital";
import HospitalAdmin from "../../hospital/component/HospitalAdmin";
import UpdateDoctor from "../../hospital/component/UpdateDoctor";
import UpdateNoOfBeds from "../../hospital/component/UpdateNoOfBeds";
import ViewDoctor from "../../hospital/component/ViewDoctor";
import ViewDoctorSpeciality from "../../hospital/component/ViewDoctorSpeciality";
import ViewHospital from "../../hospital/component/ViewHospital";
import ViewNoOfBeds from "../../hospital/component/ViewNoOfBeds";
import ViewTreatmentHistory from "../../hospital/component/ViewTreatmentHistory";
import AddDoctorInLaboratory from "../../laboratory/component/AddDoctorInLaboratory";
import AddMedicalTestResult from "../../laboratory/component/AddMedicalTestResult";
import DeleteDoctorInLaboratory from "../../laboratory/component/DeleteDoctorInLaboratory";
import DeleteMedicalTestResult from "../../laboratory/component/DeleteMedicalTestResult";
import LabAdmin from "../../laboratory/component/LabAdmin";
import UpdateDoctorInLaboratory from "../../laboratory/component/UpdateDoctorInLaboratory";
import UpdateMedicalTestResult from "../../laboratory/component/UpdateMedicalTestResult";
import ViewDoctorCategories from "../../laboratory/component/ViewDoctorCategories";
import ViewDoctorInLaboratory from "../../laboratory/component/ViewDoctorInLaboratory";
import ViewMedicalTestResult from "../../laboratory/component/ViewMedicalTestResult";
import AddMedicalStore from "../../medicalStore/component/AddMedicalStore";
import AddMedicine from "../../medicalStore/component/AddMedicine";
import DeleteMedicalStore from "../../medicalStore/component/DeleteMedicalStore";
import DeleteMedicine from "../../medicalStore/component/DeleteMedicine";
import MedAdmin from "../../medicalStore/component/MedAdmin";
import UpdateMedicalStore from "../../medicalStore/component/UpdateMedicalStore";
import UpdateMedicine from "../../medicalStore/component/UpdateMedicine";
import GetMedicalStore from "../../medicalStore/component/ViewMedicalStore";
import GetMedicines from "../../medicalStore/component/ViewMedicine";
import AddPatient from "../../patient/component/AddPatient";
import DeletePatient from "../../patient/component/DeletePatient";
import PatientAdmin from "../../patient/component/PatientAdmin";
import PatientLogin from "../../patient/component/PatientLogin";
import UpdatePatient from "../../patient/component/UpdatePatient";
import ViewMedicalStore from "../../patient/component/ViewMedicalStore";
import ViewPackages from "../../patient/component/ViewPackages";
import ViewPatient from "../../patient/component/ViewPatient";
import About from "./About";
import Contact from "./Contact";
import Contact1 from "./Contact1";
import Disclaimer from "./Disclaimer";
import Gallery from "./Gallery";
import Header from "./Header";
import NavBar  from "./NavBar"
import Services from "./Services";
import Testimonials from "./Testimonials";
import WhyUs from "./WhyUs";




class Home extends React.Component{
    render(){

        return(
            <div>   
        <Router>
            <NavBar/>
            {/* <Header/> */}
        <Routes>
          {/* Landing Page Routes */}
          <Route exact path="/lifeline/about" element={<About/>}></Route>
          <Route exact path="/lifeline/contact1" element={<Contact1/>}></Route>
          {/* <Route exact path="/lifeline/contact" element={<Contact/>}></Route> */}
          <Route exact path="/lifeline/whyus" element={<WhyUs/>}></Route>
          <Route exact path="/lifeline/gallery" element={<Gallery/>}></Route>
          <Route exact path="/lifeline/testimonials" element={<Testimonials/>}></Route>
          <Route exact path="/lifeline/disclaimer" element={<Disclaimer/>}></Route>
          <Route exact path="/lifeline/services" element={<Services/>}></Route>
          {/* Patient */}
          <Route exact path="/patient/patientLogin" element={<PatientLogin/>}></Route>
          <Route exact path="/patient/patientAdmin" element={<PatientAdmin/>}></Route>
        <Route exact path="/patient/view-patient" element={<ViewPatient/>}></Route>
        <Route path="/patient/view-packages" element={<ViewPackages/>} />
          <Route path="/patient/medicalStore" element={<ViewMedicalStore/>}></Route>
          <Route path="/patient/update/:patientId" element={<UpdatePatient/>} />
          <Route path="/patient/delete/:patientId" element={<DeletePatient/>}></Route> 
          <Route exact path="/patient/add" element={<AddPatient/>} />
          {/* MedicalStore */}
          <Route exact path="/med/medAdmin" element={<MedAdmin/>}/>
          <Route exact path="/medicalStore/get-medicalStore" element={<GetMedicalStore/>}></Route>
          <Route exact path="/medicalStore/add" element={<AddMedicalStore/>} />
          <Route exact path="/medicalStore/update/:medicalStoreId" element={<UpdateMedicalStore/>} />
          <Route exact path="/medicalStore/delete/:medicalStoreId" element={<DeleteMedicalStore/>} />
           <Route exact path="/medicalStore/medicine/add" element={<AddMedicine/>} />
          <Route exact path="/medicalStore/medicine/get-medicine" element={<GetMedicines/>}></Route>
          <Route exact path="/medicalStore/medicine/update/:medicineId" element={<UpdateMedicine/>} />
          <Route exact path="/medicalStore/medicine/delete/:medicineId" element={<DeleteMedicine/>} />
{/* Ambulance*/}
<Route exact path="/amb/ambAdmin" element={<AmbulanceAdmin/>}/>
<Route exact path="/viewBooking" element={<ViewAmbulanceBooking/>}/>
        <Route exact path="/viewAmbulance" element={<ViewAmbulance/>}/>
          <Route exact path="/ambulance/add" element={<AddAmbulance1/>}></Route>
          <Route exact path="/ambulanceBooking/add" element={<AddAmbulanceBooking/>}></Route>
          <Route exact path="/delete/:ambulanceBookingId"  element={<DeleteAmbulanceBooking />}/>
        <Route exact path="/update/:ambulanceBookingId"  element={<UpdateAmbulanceBooking/>}/>
        <Route exact path="/deleted/:ambulanceId"  element={<DeleteAmbulance/>}/>
        {/* <Route exact path="/deletedoc/:doctorId"  element={<DeleteDoctor/>}/>
        <Route exact path="/readDoctorDetails"  element={<ViewDoctor/>} />
        <Route exact path="/updatedoc/:doctorId"  element={<UpdateDoctor/>}/>
        <Route exact path="/doctor/add" element={<AddDoctor1/>}></Route> */}


{/* Laboratory*/}
<Route path="/lab/labAdmin" element={<LabAdmin/>}></Route>
<Route exact path="/laboratory/medicalTestResult/add" element={<AddMedicalTestResult/>}></Route>
          <Route exact path="/laboratory/medicalTestResult/view" element={<ViewMedicalTestResult/>}></Route>
          <Route exact path="/laboratory/medicalTestResult/delete/:medicalTestResultId" element={<DeleteMedicalTestResult/>}></Route>
          <Route exact path="/laboratory/medicalTestResult/update/:medicalTestResultId" element={<UpdateMedicalTestResult/>}></Route>
          <Route exact path="/laboratory/doctor/view" element={<ViewDoctorInLaboratory/>}></Route>
          <Route exact path="/laboratory/doctor/viewDoctorCategory" element={<ViewDoctorCategories/>}></Route>
          <Route exact path="/laboratory/doctor/add" element={<AddDoctorInLaboratory/>}></Route>
          <Route exact path="/laboratory/doctor/delete/:doctorId" element={<DeleteDoctorInLaboratory/>}></Route>
          <Route exact path="/laboratory/doctor/update/:doctorId" element={<UpdateDoctorInLaboratory/>}></Route>

          {/* <Route exact path="/bookappointment/add" element={<AddAppointment />} /> */}
          {/* <Route path="/patient/orders/:medicalStoreId/:medicineName" element={<ViewOrders/>} /> */}
          <Route path="/patient/view-packages/:hospitalId" element={<ViewPackages/>} />
{/* Hospital*/}
<Route exact path="/hospital/hospitalAdmin" element={<HospitalAdmin/>}></Route>
          <Route exact path="/hospital/doctor/add" element={<AddDoctor/>}></Route>
          <Route exact path="/doctor/home" element={<ViewDoctor/>}></Route>
          <Route  path="/doctor/delete/:doctorId" element={<DeleteDoctor/>}></Route>
          <Route  path="/doctor/update/:doctorId" element={<UpdateDoctor/>}></Route>
          <Route exact path="/hospital/add" element={<AddHospital/>}></Route>
          <Route exact path="/hospital/view" element={<ViewHospital/>}></Route>
          <Route exact path="/hospital/viewNoOfBeds" element={<ViewNoOfBeds/>}></Route>
          <Route exact path="/hospital/treatmentHistory/add" element={<AddTreatmentHistory/>}></Route>
          <Route exact path="/hospital/treatmentHistory/view" element={<ViewTreatmentHistory/>}></Route>
          <Route exact path="/doctor/viewDoctorSpeciality" element={<ViewDoctorSpeciality/>}></Route>

          <Route exact path="/hospital/update/:hospitalId" element={<UpdateNoOfBeds/>}></Route>
          <Route exact path="/hospital/delete/:hospitalId" element={<DeleteHospital/>}></Route>
{/* Appointment */}
          <Route exact path="/bookappointment/add" element={<AddAppointment/>} />
          <Route exact path="/bookappointment/view-appointment" element={<ViewAppointment/>} />
          <Route exact path="/bookappointment/update/:appointmentId" element={<UpdateAppointment/>} />
          <Route exact path="/bookappointment/delete/:appointmentId" element={<DeleteAppointment/>} />
{/* Header*/}
        <Route  path="/lifeline/home" element={<Header/>}/>
{/* Login */}
        <Route path="/user/register" element={<RegisterUser/>} />
        <Route path="/user/login" element={<Login/>} />
        <Route path="/user/logout" element={<Logout/>} />
      

 {/* Doctor */}
      <Route exact path="/doctor/doctorAdmin" element={<DoctorAdmin/>}></Route>
      <Route exact path="/deletedoc/:doctorId"  element={<DeleteDoctor1/>}/>
        <Route exact path="/readDoctorDetails"  element={<ViewDoctor1/>} />
        <Route exact path="/updatedoc/:doctorId"  element={<UpdateDoctor1/>}/>
        <Route exact path="/doctor/add" element={<AddDoctor1/>}></Route>
        <Route exact path="/doctor/viewPatients" element={<ViewPatientByDoc/>}></Route>
        </Routes>
      </Router>
      </div>
        );
    }
   
}
export default Home;
