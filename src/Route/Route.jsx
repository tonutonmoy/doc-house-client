import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../HomeLayOut/Home/Home";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },

    ]
  },
  {
    path: '/signUp',
    element: <SignUp></SignUp>
  },
  {
    path: '/signIn',
    element: <SignIn></SignIn>
  }
]);

