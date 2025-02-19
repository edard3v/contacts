import css from "./Home.module.css";
import Layout from "@layouts/Layout/Layout";
import { HOME } from "./config";

export default function Home() {
  return (
    <Layout title={HOME.display}>
      <main className={css.home}>
        <h1>Bienvenido</h1>
      </main>
    </Layout>
  );
}
