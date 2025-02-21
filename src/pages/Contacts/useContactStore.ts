import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ContactRecord } from "./GetContacts/get_contacts_fetch";

export const useContactStore = create<ContactStore>()(
  devtools(
    (set) => ({
      contact_form: ContactForm.None,
      contact: null,

      active_add_contact_form() {
        set({ contact_form: ContactForm.Add, contact: null });
      },

      active_remove_contact_form(contact) {
        set({ contact_form: ContactForm.Remove, contact });
      },

      active_edit_contact_form(contact) {
        set({ contact_form: ContactForm.Edit, contact });
      },

      deactive_contact_form() {
        set({ contact_form: ContactForm.None, contact: null });
      },
    }),
    { name: "contact_store" }
  )
);

type ContactStore = {
  contact_form: ContactForm;
  contact: ContactRecord | null;

  active_add_contact_form: () => void;
  active_remove_contact_form: (contact: ContactRecord) => void;
  active_edit_contact_form: (contact: ContactRecord) => void;
  deactive_contact_form: () => void;
};

export enum ContactForm {
  Add,
  Remove,
  Edit,
  None,
}
