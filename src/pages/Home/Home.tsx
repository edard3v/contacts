import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";
import Link from "@components/links/Link/Link";
import { LOGIN } from "@pages/Login/config";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        <h1>Bienvenido</h1>
        <Link to={LOGIN.to} className={css.link}>
          Empezar
        </Link>
      </main>
    </Layout>
  );
}
