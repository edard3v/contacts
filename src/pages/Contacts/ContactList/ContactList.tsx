import css from "./ContactList.module.css";
import ContactCard from "./ContactCard/ContactCard";
import { useGetContacts } from "./useGetContacts";

export default function ContactList() {
  const { isLoading, isError, data: contacts } = useGetContacts();

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={css.list}>
      {contacts?.records.map((record) => (
        <ContactCard key={record.id} contact_record={record} />
      ))}
    </div>
  );
}
