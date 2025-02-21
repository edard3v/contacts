import css from "./EditContact.module.css";
import Btn from "@components/buttons/Btn/Btn";
import Tel from "@components/inputs/Tel/Tel";
import Text from "@components/inputs/Text/Text";
import { useContactStore } from "../useContactStore";
import { useEditContactMut } from "./useEditContactMut";
import { useForm } from "react-hook-form";
import { edit_contact_dto, EditContactDto } from "./edit_contact_dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { useRef } from "react";

export default function EditContact() {
  const controller_ref = useRef<AbortController | null>(null);
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const token = useAuthStore((state) => state.token);
  const contact = useContactStore((state) => state.contact);
  const set_contact_name = useContactStore((state) => state.set_contact_name);
  const { mutate, isPending, isError } = useEditContactMut();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContactDto>({ resolver: zodResolver(edit_contact_dto) });

  const edit_contact = (dto: EditContactDto) => {
    if (!token || !contact) return;
    const controller = new AbortController();
    const { id } = contact;

    controller_ref.current = controller;
    mutate({ signal: controller.signal, token, contact_id: id as UUID, dto });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(edit_contact)}>
      <Text
        placeholder="Nombre"
        value={contact?.name}
        onChange={(e) => set_contact_name(e.target.value.toLocaleLowerCase())}
      />
      <Tel register_country={register("country")} {...register("tel")} err={errors.tel?.message} />
      <div className={css.btns}>
        <Btn className={css.confirm} disabled={isPending} loading={isPending} err={isError}>
          Actualizar
        </Btn>
        <Btn className={css.cancel} type="button" onClick={deactive_contact_form}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
