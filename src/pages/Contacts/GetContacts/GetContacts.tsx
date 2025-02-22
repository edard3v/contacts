import css from "./GetContacts.module.css";
import ContactCard from "./ContactCard/ContactCard";
import { useGetContactsQuery } from "./useGetContactsQuery";
import Paged from "@components/paginations/Paged/Paged";
import { useGetContactsStore } from "./useGetContactsStore";
import Search from "@components/inputs/Search/Search";
import Btn from "@components/buttons/Btn/Btn";
import Loading from "@components/loaders/Loading/Loading";
import { ContactForm, useContactStore } from "../useContactStore";

export default function GetContacts() {
  const { isLoading, is_first_loading, isError, data: contacts, error } = useGetContactsQuery();
  const page = useGetContactsStore((state) => state.page);
  const set_page = useGetContactsStore((state) => state.set_page);
  const total_page = useGetContactsStore((state) => state.total_page);
  const set_name = useGetContactsStore((state) => state.set_name);
  const name = useGetContactsStore((state) => state.name);
  const active_add_contact_form = useContactStore((state) => state.active_add_contact_form);
  const active_remove_contact_form = useContactStore((state) => state.active_remove_contact_form);
  const active_edit_contact_form = useContactStore((state) => state.active_edit_contact_form);
  const contact_form = useContactStore((state) => state.contact_form);

  return (
    <div className={css.get_contacts}>
      {contact_form === ContactForm.None && (
        <Btn className={css.add} onClick={() => active_add_contact_form()}>
          Agregar
        </Btn>
      )}

      <Search placeholder="Nombre" fn={set_name} defaultValue={name} />

      <div className={css.records}>
        {isLoading && is_first_loading && <Loading />}
        {isError && <div className={css.err}>{error.message}</div>}

        {contacts?.records.map((record) => (
          <ContactCard
            key={record.id}
            contact_record={record}
            fn_btn_remove={active_remove_contact_form}
            fn_btn_edit={active_edit_contact_form}
          />
        ))}
      </div>

      <Paged page={page} total_page={total_page} fn={set_page} />
    </div>
  );
}
