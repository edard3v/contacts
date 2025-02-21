import css from "./Contacts.module.css";
import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";
import GetContacts from "./GetContacts/GetContacts";

export default function Contacts() {
  return (
    <Layout title={CONTACTS.display}>
      <main className={css.contacts}>
        <GetContacts />
      </main>
    </Layout>
  );
}
