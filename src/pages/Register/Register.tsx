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

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterDto>({ resolver: zodResolver(register_dto) });

  const onSubmit = (register_dto: RegisterDto) => {
    console.log(register_dto);
  };

  return (
    <Layout title={REGISTER.display}>
      <main className={css.register}>
        <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
          <Email {...register("email")} err={errors.email?.message} />
          <Password {...register("password")} err={errors.password?.message} />
          <div>
            <span>¿Ya tiene una cuenta?</span>
            <Link to={LOGIN.to} className={css.link}>
              Ir a Login
            </Link>
          </div>

          <Btn>Registrarse</Btn>
        </form>
      </main>
    </Layout>
  );
}
