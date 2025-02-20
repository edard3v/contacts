import RouterProtector from "@router/RouterProtector";
import Contacts from "./Contacts";

export const CONTACT = {
  id: crypto.randomUUID(),
  path: "contactos",
  to: "/contactos",
  display: "Contactos",
  element: (
    <RouterProtector>
      <Contacts />
    </RouterProtector>
  ),
};
