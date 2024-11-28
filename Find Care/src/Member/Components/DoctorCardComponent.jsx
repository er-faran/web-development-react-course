/* eslint-disable react/prop-types */
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const DoctorCardComponent = ({ data }) => {
  return (
    <div className="border rounded-2xl">
      <div>
        <img
          className="bg-[#EAEFFF] max-w-64 aspect-square rounded-t-2xl"
          src={data?.doctorImg}
        />
      </div>
      <div className="text-left pl-3 pt-3 pb-5">
        <div className="text-green-500">
          <FiberManualRecordIcon fontSize="xs" className="mb-1 mr-2" />
          {data?.status}
        </div>
        <div className="text-xl">{data?.name}</div>
        <div className="text-[#5C5C5C] text-sm">{data?.speciality}</div>
      </div>
    </div>
  );
};

export default DoctorCardComponent;
