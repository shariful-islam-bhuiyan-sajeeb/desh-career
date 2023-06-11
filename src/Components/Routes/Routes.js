import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Main Home/Home/Home";
import Contact from "../Main Home/Contact Home page/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
