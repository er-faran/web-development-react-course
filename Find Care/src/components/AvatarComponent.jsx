import React from "react";
import { Avatar, AvatarGroup } from "@mui/material";


const AvatarComponent=()=>{
    return(
 <AvatarGroup  max={4} spacing="small">
    <Avatar
    alt="Doctor A"
    src="https://png.pngtree.com/png-vector/20230928/ourmid/pngtree-young-afro-professional-doctor-png-image_10148632.png"
    />
    <Avatar
    alt="Doctor B"
    src="https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg"
    />
    <Avatar
    alt="Doctor C"
    src="https://www.shutterstock.com/image-photo/handsome-male-doctor-on-color-260nw-1408434731.jpg"
    />
    <Avatar
    alt="Doctor D"
    src="https://rosewellness.com/wp-content/uploads/2023/09/Functional-medicine-doctor.jpg"
    />
    </AvatarGroup>
    )
}

export default AvatarComponent;