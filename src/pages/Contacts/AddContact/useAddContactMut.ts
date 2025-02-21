import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add_contact_fetch, AddContactFetch } from "./add_contact_fetch";

export const useAddContactMut = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: ({ signal, token, dto }: AddContactFetch) =>
      add_contact_fetch({ signal, token, dto }),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"], exact: false });
    },
  });

  return mutation;
};
