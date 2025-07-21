import React from "react";
import { Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/constants";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="m-auto flex flex-col justify-center items-center mt-[100px]  text-16">
      <div className="mt-[20px] flex flex-col items-center">
        <Info className="w-[80px] h-[80px] opacity-50" />
        <div className="text-center text-16 font-semibold opacity-80 mt-[20px]">
          Route Not Exist. Please check the URL and try again.
        </div>
        <button className="mt-[20px]" onClick={() => navigate(PATHS.HOME)}>
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
