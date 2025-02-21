import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContactStore } from "../useContactStore";
import { remove_contact_fetch, RemoveContactFetch } from "./remove_contact_fetch";

export const useRemoveContactMut = () => {
  const queryClient = useQueryClient();
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);

  const mutation = useMutation({
    mutationFn: ({ signal, token, id }: RemoveContactFetch) =>
      remove_contact_fetch({ signal, token, id }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"], exact: false });
      deactive_contact_form();
    },
  });

  return mutation;
};
