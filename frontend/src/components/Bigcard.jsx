import React from "react";
import chai from "../assets/milktea.png";

const Bigcard = (props) => {
  return (
    <div className="flex flex-col items-center">
      <img src={chai} height={434} width={561} />
      <div className="text-4xl font-macondo">{props.title}</div>
      <div className="text-justify">{props.content.slice(0, 580)}</div>
      <div className="w-[100%] border border-b-2 mb-4 mt-2  border-double border-black border-spacing-4"></div>
    </div>
  );
};

export default Bigcard;
