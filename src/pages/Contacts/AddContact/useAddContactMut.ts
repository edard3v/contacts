import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add_contact_fetch, AddContactFetch } from "./add_contact_fetch";
import { useContactStore } from "../useContactStore";

export const useAddContactMut = () => {
  const queryClient = useQueryClient();
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const mutation = useMutation({
    mutationFn: ({ signal, token, dto }: AddContactFetch) =>
      add_contact_fetch({ signal, token, dto }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"], exact: false });
      deactive_contact_form();
    },
  });

  return mutation;
};
