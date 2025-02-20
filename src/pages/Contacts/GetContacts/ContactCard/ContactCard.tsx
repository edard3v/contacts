import css from "./ContactCard.module.css";
import { ContactRecord } from "../get_contacts_fetch";

export default function ContactCard({ contact_record }: Props) {
  return (
    <article className={css.card}>
      <div className={css.name}>{contact_record.name}</div>
      <div>{contact_record.country}</div>
      <div>{contact_record.tel}</div>
      <div>🔧</div>
      <div>🗑️</div>
    </article>
  );
}

type Props = {
  contact_record: ContactRecord;
};
