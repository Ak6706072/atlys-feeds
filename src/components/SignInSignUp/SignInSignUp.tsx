import { LogIn } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../GlobalProvider/hooks";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../constants/constants";

type SignInSignUpProps = {
  login?: boolean;
};

function SignInSignUp(props: SignInSignUpProps) {
  const { formConfig, setInGlobalContext } = useGlobalContext();
  const { login } = props;
  const [formData, setFormData] = useState<{
    emailOrUsername: string;
    password: string;
    repeatPassword?: string;
  }>({ emailOrUsername: "", password: "", repeatPassword: "" });
  const navigate = useNavigate();

  const handleClick = () => {
    if (formConfig?.isSignUp) {
      setInGlobalContext({ formConfig: { isLogin: true, isSignUp: false } });
    } else {
      setInGlobalContext({ formConfig: { isLogin: false, isSignUp: true } });
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (formConfig?.isSignUp) {
      if (!formData?.emailOrUsername || !formData.password) {
        alert("Please fill in all fields.");
        return;
      }
      if (formData.password !== formData.repeatPassword) {
        alert("Passwords do not match.");
        return;
      }
      // assuming automatic login after signup
      setInGlobalContext({
        userInfo: { emailOrUsername: formData.emailOrUsername },
        formConfig: { isLogin: false, isSignUp: false },
      });
      navigate(PATHS.HOME);
      alert("Account created successfully! You are now logged in.");
    } else {
      if (!formData?.emailOrUsername || !formData.password) {
        alert("Please fill in all fields.");
        return;
      }
      // here we will call api and then user will be logged in and set it to store
      if (
        formData?.emailOrUsername === "demo@example.com" &&
        formData?.password === "password123"
      ) {
        setInGlobalContext({
          userInfo: { emailOrUsername: formData.emailOrUsername },
          formConfig: { isLogin: false, isSignUp: false },
        });
        navigate(PATHS.HOME);
      } else if (
        formData?.emailOrUsername === "test@user.com" &&
        formData?.password === "testpass"
      ) {
        setInGlobalContext({
          userInfo: { emailOrUsername: formData.emailOrUsername },
          formConfig: { isLogin: false, isSignUp: false },
        });
        navigate(PATHS.HOME);
      }
    }
  };

  useEffect(() => {
    if (typeof login !== "undefined") {
      if (login) {
        if (!formConfig?.isLogin && !formConfig?.isSignUp) {
          setInGlobalContext({
            formConfig: { isLogin: true, isSignUp: false },
          });
        } else {
          navigate(PATHS.HOME);
        }
      }
    }
  }, [login]);

  return (
    <div className="bg-gray-100 p-[8px] pb-[16px] rounded-3xl min-w-[435px]">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl p-6 text-center">
        <div className="flex justify-center -mt-12">
          <div className="bg-white p-4 rounded-full shadow-md">
            <LogIn className="w-6 h-6 text-gray-800" />
          </div>
        </div>

        <h2 className="mt-4 text-xl font-semibold text-gray-900">
          {formConfig?.isSignUp ? "Sign Up" : "Sign In"} to continue
        </h2>
        <div className="text-sm text-gray-500 mb-6">
          {formConfig?.isSignUp
            ? "Create an account to access all the features on this app"
            : "Sign in to access all the features on this app"}
        </div>

        <div className="space-y-[18px] text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email or username
            </label>
            <input
              type="text"
              id="emailOrUsername"
              placeholder="Enter your email or username"
              className="w-full px-4 py-2 bg-gray-100 text-sm rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 bg-gray-100 text-sm rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>
          {formConfig?.isSignUp && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Repeat Password
              </label>
              <input
                type="password"
                id="repeatPassword"
                placeholder="Enter your password again"
                className="w-full px-4 py-2 bg-gray-100 text-sm rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            {formConfig?.isSignUp ? "Sign Up " : "Sign In"}
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-5 text-sm text-gray-500">
        Do not have an account?{"  "}
        <a
          href="#"
          className="text-blue-600 hover:underline font-medium pl-[6px]"
          onClick={handleClick}
        >
          {formConfig?.isSignUp ? "Sign In" : "Sign Up"}
        </a>
      </div>
    </div>
  );
}

export default SignInSignUp;
