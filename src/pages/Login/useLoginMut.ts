import { useMutation } from "@tanstack/react-query";
import { login_fetch, LoginFetch } from "./login_fetch";
import { useNavigate } from "react-router-dom";
import { CONTACTS } from "@pages/Contacts/config";
import { useAuthStore } from "@global_stores/auth/useAuthStore";

export const useLoginMut = () => {
  const update_token = useAuthStore((state) => state.update_token);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ signal, dto }: LoginFetch) => login_fetch({ signal, dto }),
    onSuccess: ({ token }) => {
      update_token(token);
      navigate(CONTACTS.to);
    },
  });

  return { ...mutation };
};
