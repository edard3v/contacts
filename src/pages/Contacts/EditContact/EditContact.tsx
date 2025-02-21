import css from "./EditContact.module.css";
import Btn from "@components/buttons/Btn/Btn";
import Tel from "@components/inputs/Tel/Tel";
import Text from "@components/inputs/Text/Text";
import { useContactStore } from "../useContactStore";

export default function EditContact() {
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  return (
    <form className={css.form}>
      <Text />
      <Tel />
      <div className={css.btns}>
        <Btn className={css.confirm}>Actualizar</Btn>
        <Btn className={css.cancel} type="button" onClick={deactive_contact_form}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
