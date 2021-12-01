import Hospital from "../../hospital/model/Hospital";
import Patient from "../../patient/model/Patient";
import DoctorShiftTime from "./DoctorShiftTime";
import DoctorSpeciality from "./DoctorSpeciality";


class Doctor{
doctorId='';
doctorName='';
contactNumber='';
doctorSpeciality=new DoctorSpeciality() ;
doctorShiftTime=new DoctorShiftTime();
// hospital=new Hospital();
// patient=new Patient();
}
export default Doctor;