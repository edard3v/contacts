import Layout from "@layouts/Layout/Layout";
import { CONTACTS } from "./config";

export default function Contacts() {
  return (
    <Layout title={CONTACTS.display}>
      <main>
        <h1>📞</h1>
      </main>
    </Layout>
  );
}
