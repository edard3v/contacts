import Register from "./Register";

export const REGISTER = {
  id: crypto.randomUUID(),
  path: "registro",
  to: "/registro",
  display: "Registro",
  element: <Register />,
};
