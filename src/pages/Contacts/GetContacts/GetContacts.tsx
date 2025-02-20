import css from "./GetContacts.module.css";
import ContactCard from "./ContactCard/ContactCard";
import { useGetContactsQuery } from "./useGetContactsQuery";

export default function GetContacts() {
  const { isLoading, isError, data: contacts } = useGetContactsQuery();

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div className={css.contacts}>
      {contacts?.records.map((record) => (
        <ContactCard key={record.id} contact_record={record} />
      ))}
    </div>
  );
}
