import css from "./Contacts.module.css";
import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";
import GetContacts from "./GetContacts/GetContacts";
import AddContact from "./AddContact/AddContact";
import { ContactForm, useContactStore } from "./useContactStore";

export default function Contacts() {
  const active_form = useContactStore((state) => state.active_form);

  return (
    <Layout title={CONTACTS.display}>
      <main className={css.contacts}>
        {active_form === ContactForm.Add && <AddContact />}
        <GetContacts />
      </main>
    </Layout>
  );
}
