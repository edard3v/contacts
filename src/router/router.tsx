import A04 from "@pages/404/404";
import { CONTACT } from "@pages/Contacts/config";
import { HOME } from "@pages/Home/config";
import { LOGIN } from "@pages/Login/config";
import { REGISTER } from "@pages/Register/config";
import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <A04 />,
    children: [HOME, CONTACT, LOGIN, REGISTER],
  },
]);
