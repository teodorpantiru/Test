import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="/assets/loading_spinner.svg"
        alt=""
        className="bg-transparent bg-none"
      />
    </div>
  );
};

export default Loading;
