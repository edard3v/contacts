import RouterProtector from "@router/RouterProtector";
import Contacts from "./Contacts";

export const CONTACTS = {
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
