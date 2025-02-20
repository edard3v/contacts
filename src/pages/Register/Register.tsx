import css from "./Register.module.css";
import Btn from "@components/buttons/Btn/Btn";
import Email from "@components/inputs/Email/Email";
import Password from "@components/inputs/Password/Password";
import Layout from "@layouts/Layout/Layout";
import { REGISTER } from "./config";
import Link from "@components/links/Link/Link";
import { LOGIN } from "@pages/Login/config";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { register_dto, RegisterDto } from "./register_dto";
import { useMutation } from "@tanstack/react-query";
import { register_fetch, RegisterFetch } from "./register_fetch";
import { useEffect, useRef } from "react";
import Popup from "@components/pop_ups/Popup/Popup";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const controller_ref = useRef<AbortController | null>(null);

  const { mutate, isPending, isError, isSuccess, error, data } = useMutation({
    mutationFn: ({ signal, dto }: RegisterFetch) => register_fetch({ signal, dto }),
  });

  const is_popup = isSuccess || isError;

  useEffect(() => {
    return () => controller_ref.current?.abort();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({ resolver: zodResolver(register_dto) });

  const onSubmit = (dto: RegisterDto) => {
    const controller = new AbortController();
    controller_ref.current = controller;
    mutate({ signal: controller.signal, dto });
  };

  const navigate = useNavigate();

  return (
    <Layout title={REGISTER.display}>
      <main className={css.register}>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          {is_popup && (
            <Popup
              msg={data?.msg || error?.message}
              fn={isSuccess ? () => navigate(LOGIN.to) : () => {}}
            />
          )}

          <Email {...register("email")} err={errors.email?.message} />
          <Password {...register("password")} err={errors.password?.message} />
          <div>
            <span>¿Ya tiene una cuenta?</span>
            <Link to={LOGIN.to} className={css.link}>
              Ir a Login
            </Link>
          </div>

          <Btn disabled={isPending} loading={isPending} err={isError}>
            Registrarse
          </Btn>
        </form>
      </main>
    </Layout>
  );
}
