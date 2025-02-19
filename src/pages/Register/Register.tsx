import css from "./Register.module.css";
import Btn from "@components/buttons/Btn/Btn";
import Email from "@components/inputs/Email/Email";
import Password from "@components/inputs/Password/Password";
import Layout from "@layouts/Layout/Layout";
import { REGISTER } from "./config";
import Link from "@components/links/Link/Link";
import { LOGIN } from "@pages/Login/config";

export default function Register() {
  return (
    <Layout title={REGISTER.display}>
      <main className={css.register}>
        <form className={css.form}>
          <Email />
          <Password />
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
