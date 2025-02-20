import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";
import GetContacts from "./GetContacts/GetContacts";

export default function Contacts() {
  return (
    <Layout title={CONTACTS.display}>
      <main>
        <GetContacts />
      </main>
    </Layout>
  );
}
