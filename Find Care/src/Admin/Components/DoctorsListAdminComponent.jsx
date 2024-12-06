import DoctorListComponent from "../../Member/Components/DoctorListComponent";
import Sidebar from "./Sidebar";

const DoctorListAdminComponent =()=>{
    return(
        <div className="flex"> 
            <div><Sidebar/></div>
            <div className=" max-w-[75%] ">
                <DoctorListComponent/>
            </div>
        </div>
    );
}

export default DoctorListAdminComponent;