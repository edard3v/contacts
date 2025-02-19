import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";
import Btn from "@components/buttons/Btn/Btn";
import Email from "@components/inputs/Email/Email";
import Password from "@components/inputs/Password/Password";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        <h1>¡Hola mundo!</h1>
        <Btn>Enviar</Btn>
        <Email />
        <Password />
      </main>
    </Layout>
  );
}
