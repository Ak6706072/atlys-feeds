import { lazy } from "react";

import Header from "./components/Header/Header";

const NotFound = lazy(() => import("./components/NotFound"));
const Feeds = lazy(() => import("./components/Feeds/Feeds.tsx"));
const SignUp = lazy(() => import("./components/SignInSignUp/SignInSignUp.tsx"));

import { useRoutes } from "react-router-dom";
import { PATHS } from "./constants/constants.ts";

function App() {
  const routes = useRoutes([
    { path: PATHS.HOME, element: <Feeds /> },
    {
      path: PATHS.LOGIN,
      element: (
        <div className="max-w-[435px] m-auto my-auto h-[95vh] mt-[60px]">
          <SignUp login />
        </div>
      ),
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div className="bg-gray-50">
      <Header />
      <div>{routes}</div>
    </div>
  );
}

export default App;
