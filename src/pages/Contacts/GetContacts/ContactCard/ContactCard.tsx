import css from "./ContactCard.module.css";
import { ContactRecord } from "../get_contacts_fetch";

export default function ContactCard({ contact_record, fn_btn_remove, fn_btn_edit }: Props) {
  return (
    <article className={css.card}>
      <div className={css.name}>{contact_record.name}</div>
      <div>+{contact_record.country}</div>
      <div className={css.tel}>{contact_record.tel}</div>
      <button className={css.edit} onClick={() => fn_btn_edit(contact_record)}>
        🔧
      </button>
      <button className={css.remove} onClick={() => fn_btn_remove(contact_record)}>
        🗑️
      </button>
    </article>
  );
}

type Props = {
  contact_record: ContactRecord;
  fn_btn_remove: (contact_id: ContactRecord) => void;
  fn_btn_edit: (contact_id: ContactRecord) => void;
};
