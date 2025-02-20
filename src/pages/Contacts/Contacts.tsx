import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";
import ContactList from "./ContactList/ContactList";

export default function Contacts() {
  return (
    <Layout title={CONTACTS.display}>
      <main>
        <ContactList />
      </main>
    </Layout>
  );
}
