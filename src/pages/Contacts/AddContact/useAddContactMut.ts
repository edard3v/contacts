import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add_contact_fetch, AddContactFetch } from "./add_contact_fetch";
import { ContactForm, useContactStore } from "../useContactStore";

export const useAddContactMut = () => {
  const queryClient = useQueryClient();
  const set_active_form = useContactStore((state) => state.set_active_form);
  const mutation = useMutation({
    mutationFn: ({ signal, token, dto }: AddContactFetch) =>
      add_contact_fetch({ signal, token, dto }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"], exact: false });
      set_active_form(ContactForm.None);
    },
  });

  return mutation;
};
