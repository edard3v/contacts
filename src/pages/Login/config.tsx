import Login from "./Login";

export const LOGIN = {
  id: crypto.randomUUID(),
  path: "login",
  to: "/login",
  display: "Login",
  element: <Login />,
};
