import React from "react";
import { useAuth } from "../context/AuthContext";
import chai from "../assets/milktea.png";

const SidePanel = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="bg-gray-300 m-2 w-[100%] h-[30rem] rounded-md">
        <div className=" flex justify-center">
          <img src={chai} width={200} height={400} />
        </div>
        <div className="font-macondo text-2xl text-black text-center">
          Username: {user.username}
        </div>
        <div className="font-macondo text-xl text-black text-center">
          Email: {user.email}
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
