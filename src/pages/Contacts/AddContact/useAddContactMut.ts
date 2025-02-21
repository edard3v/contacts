import { useMutation } from "@tanstack/react-query";

import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { add_contact_fetch, AddContactFetch } from "./add_contact_fetch";

export const useAddContactMut = () => {
  const token = useAuthStore((state) => state.token) as string;

  const mutation = useMutation({
    mutationFn: ({ signal, dto }: AddContactFetch) => add_contact_fetch({ signal, token, dto }),
  });

  return mutation;
};
