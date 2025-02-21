import css from "./Contacts.module.css";
import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";
import GetContacts from "./GetContacts/GetContacts";
import Btn from "@components/buttons/Btn/Btn";

export default function Contacts() {
  return (
    <Layout title={CONTACTS.display}>
      <main className={css.contacts}>
        <Btn className={css.add}>Agregar</Btn>
        <GetContacts />
      </main>
    </Layout>
  );
}
