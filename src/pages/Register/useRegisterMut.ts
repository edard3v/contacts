import { useMutation } from "@tanstack/react-query";
import { register_fetch, RegisterFetch } from "./register_fetch";

export const useRegisterMut = () => {
  const mutation = useMutation({
    mutationFn: ({ signal, dto }: RegisterFetch) => register_fetch({ signal, dto }),
  });

  return { ...mutation };
};
