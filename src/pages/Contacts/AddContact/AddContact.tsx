import css from "./AddContact.module.css";
import Text from "@components/inputs/Text/Text";
import { ContactForm, useContactStore } from "../useContactStore";
import Btn from "@components/buttons/Btn/Btn";

export default function AddContact() {
  const set_active_form = useContactStore((state) => state.set_active_form);
  return (
    <form className={css.form}>
      <Text placeholder="Nombre" />
      <div className={css.btns}>
        <Btn className={css.confir} type="button">
          Confirmar
        </Btn>
        <Btn className={css.cancel} type="button" onClick={() => set_active_form(ContactForm.None)}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
