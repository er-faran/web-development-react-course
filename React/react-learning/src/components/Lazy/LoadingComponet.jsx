import { Skeleton } from "@mui/material";
import React from "react";

const LoadingComponet = () => {
  return (
    <div>
      <Skeleton variant="rectangular" width={800} height={60} />
      <div className="loading-second">
        <Skeleton variant="rectangular" width={100} height={200} />
        <Skeleton variant="rectangular" width={500} height={200} />
      </div>
    </div>
  );
};

export default LoadingComponet;
