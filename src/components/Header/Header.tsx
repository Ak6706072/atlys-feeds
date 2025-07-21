import { LogIn } from "lucide-react";
import React, { use } from "react";
import { PATHS } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../GlobalProvider/hooks";

type HeaderProps = {};

function Header(props: HeaderProps) {
  const { userInfo, setInGlobalContext } = useGlobalContext();
  const navigate = useNavigate();

  return (
    <div className="flex justify-between p-[20px]">
      <div>Atlys Logo</div>
      {userInfo?.emailOrUsername ? (
        <div className="flex gap-2 items-center">
          <div className="w-[40px] h-[40px] rounded-full bg-gray-200 flex justify-center items-center">
            <div>{userInfo?.emailOrUsername?.[0]?.toUpperCase()}</div>
          </div>
          <div>{userInfo?.emailOrUsername}</div>
        </div>
      ) : (
        <div>
          <div className="flex gap-2">
            {window.location.pathname === "/login" ? (
              <div
                onClick={() => {
                  navigate(PATHS.HOME);
                  setInGlobalContext({
                    formConfig: { isSignUp: false, isLogin: false },
                  });
                }}
                className="cursor-pointer"
              >
                Back To Home
              </div>
            ) : (
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => {
                  navigate(PATHS.LOGIN);
                }}
              >
                <span className="text-[14px]">Login</span>{" "}
                <LogIn size={16} className="w-6 h-6 text-gray-800" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
