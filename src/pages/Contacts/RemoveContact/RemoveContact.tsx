import Btn from "@components/buttons/Btn/Btn";
import css from "./RemoveContact.module.css";
import { useContactStore } from "../useContactStore";
import { capitalize } from "@utils/capitalize";

export default function RemoveContact() {
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const contact = useContactStore((state) => state.contact);

  return (
    <form className={css.form}>
      <h6>¿Estás seguro que deseas eliminar a {contact?.name && capitalize(contact?.name)}</h6>
      <div className={css.btns}>
        <Btn className={css.confirm}>Confirmar</Btn>
        <Btn className={css.cancel} type="button" onClick={() => deactive_contact_form()}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
