import DoctorListComponent from "../../Member/Components/DoctorListComponent";
import Sidebar from "./Sidebar";

const DoctorListAdminComponent =()=>{
    return(
        <div className="flex"> 
            <div><Sidebar/></div>
            <div className=" max-w-[80%] bg-[#F8F9FD]">
                <DoctorListComponent/>
            </div>
        </div>
    );
}

export default DoctorListAdminComponent;