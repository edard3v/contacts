import { useMutation } from "@tanstack/react-query";
import { login_fetch, LoginFetch } from "./login_fetch";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@global_states/auth/useAuth";

export const useLogin = () => {
  const update_token = useAuth((state) => state.update_token);
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ signal, dto }: LoginFetch) => login_fetch({ signal, dto }),
    onSuccess: ({ token }) => {
      update_token(token);
      navigate("/");
    },
  });

  return { ...mutation };
};
