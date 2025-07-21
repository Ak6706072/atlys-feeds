import { useState } from "react";
import React from "react";
import { GlobalContext } from "./context";

export const defaultValue = {
  feeds: null,
  alertConfig: {
    show: false,
    message: "Something went wrong",
    type: "success", // success, error, warning
  },
  formConfig: {
    isSignUp: false,
    isLogin: false,
  }, // openLoginForm, openSignupForm
  userInfo: null,
};

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [context, setContext] = useState(defaultValue);

  const setInGlobalContext = (data = {}) => {
    setContext((prevContextData) => ({ ...prevContextData, ...data }));
  };

  return (
    <GlobalContext.Provider value={{ context, setInGlobalContext }}>
      {children}
    </GlobalContext.Provider>
  );
};
