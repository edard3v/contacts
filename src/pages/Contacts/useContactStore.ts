import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useContactStore = create<ContactStore>()(
  devtools(
    (set) => ({
      contact_form: ContactForm.None,

      set_active_form(new_active_form) {
        set({ active_form: new_active_form });
      },
    }),
    { name: "contact_store" }
  )
);

type ContactStore = {
  active_form: ContactForm;
  set_active_form: (new_active_form: ContactForm) => void;
};

export enum ContactForm {
  Add,
  Remove,
  Edit,
  None,
}
