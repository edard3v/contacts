import App from "@App/App";
import A04 from "@pages/404/404";
import { CONTACTS } from "@pages/Contacts/config";
import { HOME } from "@pages/Home/config";
import { LOGIN } from "@pages/Login/config";
import { REGISTER } from "@pages/Register/config";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <A04 />,
    children: [HOME, CONTACTS, LOGIN, REGISTER],
  },
]);
