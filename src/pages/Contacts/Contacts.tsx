import css from "./Contacts.module.css";
import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";
import GetContacts from "./GetContacts/GetContacts";
import AddContact from "./AddContact/AddContact";
import { ContactForm, useContactStore } from "./useContactStore";
import RemoveContact from "./RemoveContact/RemoveContact";

export default function Contacts() {
  const contact_form = useContactStore((state) => state.contact_form);

  return (
    <Layout title={CONTACTS.display}>
      <main className={css.contacts}>
        {contact_form === ContactForm.Add && <AddContact />}
        {contact_form === ContactForm.Remove && <RemoveContact />}
        <GetContacts />
      </main>
    </Layout>
  );
}
