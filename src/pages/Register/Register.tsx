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
import Popup from "@components/pop_ups/Popup/Popup";
import { useNavigate } from "react-router-dom";
import { useRegister } from "./useRegister";
import { useEffect, useRef } from "react";

export default function Register() {
  const controller_ref = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => controller_ref.current?.abort();
  }, [controller_ref]);

  const { mutate, isSuccess, isError, isPending, data, error } = useRegister();

  const is_popup = isSuccess || isError;
  const navigate = useNavigate();

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
