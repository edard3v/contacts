import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContactStore } from "../useContactStore";
import { edit_contact_fetch, EditContactFetch } from "./edit_contact_fetch";

export const useEditContactMut = () => {
  const queryClient = useQueryClient();
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const mutation = useMutation({
    mutationFn: ({ signal, token, contact_id, dto }: EditContactFetch) =>
      edit_contact_fetch({ signal, token, contact_id, dto }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"], exact: false });
      deactive_contact_form();
    },
  });

  return mutation;
};
