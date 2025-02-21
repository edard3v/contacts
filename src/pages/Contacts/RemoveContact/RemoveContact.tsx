import Btn from "@components/buttons/Btn/Btn";
import css from "./RemoveContact.module.css";
import { ContactForm, useContactStore } from "../useContactStore";

export default function RemoveContact() {
  const set_active_form = useContactStore((state) => state.set_active_form);
  return (
    <form className={css.form}>
      <h6>¿Estás seguro que deseas eliminar a X?</h6>
      <div className={css.btns}>
        <Btn className={css.confirm}>Confirmar</Btn>
        <Btn className={css.cancel} type="button" onClick={() => set_active_form(ContactForm.None)}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
