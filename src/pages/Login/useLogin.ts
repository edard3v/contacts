import { useMutation } from "@tanstack/react-query";
import { login_fetch, LoginFetch } from "./login_fetch";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: ({ signal, dto }: LoginFetch) => login_fetch({ signal, dto }),
    onSuccess: () => navigate("/"),
  });

  return { ...mutation };
};
