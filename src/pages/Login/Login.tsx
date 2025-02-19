import css from "./Login.module.css";
import Btn from "@components/buttons/Btn/Btn";
import Email from "@components/inputs/Email/Email";
import Password from "@components/inputs/Password/Password";
import Layout from "@layouts/Layout/Layout";
import { LOGIN } from "./config";

export default function Login() {
  return (
    <Layout title={LOGIN.display}>
      <main className={css.login}>
        <form className={css.form}>
          <Email />
          <Password />

          <Btn>Iniciar sesión</Btn>
        </form>
      </main>
    </Layout>
  );
}
