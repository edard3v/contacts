import css from "./GetContacts.module.css";
import ContactCard from "./ContactCard/ContactCard";
import { useGetContactsQuery } from "./useGetContactsQuery";
import Paged from "@components/paginations/Paged/Paged";
import { useGetContactsStore } from "./useGetContactsStore";
import Search from "@components/inputs/Search/Search";

export default function GetContacts() {
  const { isLoading, isError, data: contacts, error } = useGetContactsQuery();
  const page = useGetContactsStore((state) => state.page);
  const set_page = useGetContactsStore((state) => state.set_page);
  const total_page = useGetContactsStore((state) => state.total_page);
  const set_name = useGetContactsStore((state) => state.set_name);
  const name = useGetContactsStore((state) => state.name);

  if (isLoading) return <div className={css.contacts}>Cargando...</div>;

  return (
    <div className={css.contacts}>
      <Search placeholder="Nombre" fn={set_name} defaultValue={name} />

      {isError && <div>{error.message}</div>}

      {contacts?.records.map((record) => (
        <ContactCard key={record.id} contact_record={record} />
      ))}

      <Paged page={page} total_page={total_page} fn={set_page} />
    </div>
  );
}
