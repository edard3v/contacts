import Contact from "./Contact";

export const CONTACT = {
  id: crypto.randomUUID(),
  path: "contact",
  to: "/contact",
  display: "Contacto",
  element: <Contact />,
};
