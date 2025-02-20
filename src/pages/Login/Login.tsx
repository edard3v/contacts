import css from "./Login.module.css";
import Btn from "@components/buttons/Btn/Btn";
import Email from "@components/inputs/Email/Email";
import Password from "@components/inputs/Password/Password";
import Layout from "@layouts/Layout/Layout";
import { LOGIN } from "./config";
import Link from "@components/links/Link/Link";
import { REGISTER } from "@pages/Register/config";
import { useForm } from "react-hook-form";
import { login_dto, LoginDto } from "./login_dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "./useLogin";
import { useEffect, useRef } from "react";

export default function Login() {
  const controller_ref = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => controller_ref.current?.abort();
  }, [controller_ref]);

  const { mutate, isError, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({ resolver: zodResolver(login_dto) });

  const onSubmit = (dto: LoginDto) => {
    const controller = new AbortController();
    controller_ref.current = controller;
    mutate({ signal: controller.signal, dto });
  };

  return (
    <Layout title={LOGIN.display}>
      <main className={css.login}>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <Email {...register("email")} err={errors.email?.message} />
          <Password {...register("password")} err={errors.password?.message} />
          <div>
            <span>¿No tiene una cuenta?</span>
            <Link to={REGISTER.to} className={css.link}>
              Registrarse
            </Link>
          </div>

          <Btn disabled={isPending} loading={isPending} err={isError}>
            Iniciar sesión
          </Btn>
        </form>
      </main>
    </Layout>
  );
}
