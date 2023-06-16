import React from "react";
import loading from "../assets/image/loading.svg";

const Loading = () => {
  return (
    <div
      className="w-full h-[300px] md:h-[550px] flex aligns-center justify-center"
    >
      <div className="flex justify-center items-center">
        <div className="" role="status">
          <img alt="" src={loading} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
