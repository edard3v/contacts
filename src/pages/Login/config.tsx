import Login from "./Login";
import LoginProtector from "./LoginProtector";

export const LOGIN = {
  id: crypto.randomUUID(),
  path: "login",
  to: "/login",
  display: "Login",
  element: (
    <LoginProtector>
      <Login />
    </LoginProtector>
  ),
};
