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
import { useEffect, useRef } from "react";
import { Country } from "@enums/Country";

export default function EditContact() {
  const controller_ref = useRef<AbortController | null>(null);
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const token = useAuthStore((state) => state.token);
  const contact = useContactStore((state) => state.contact);
  const { mutate, isPending, isError } = useEditContactMut();

  const initial_contact_ref = useRef<{ name: string; country: Country; tel: number } | null>(null);

  useEffect(() => {
    if (contact && !initial_contact_ref.current) {
      const { name, country, tel } = contact;
      initial_contact_ref.current = { name, country, tel };
    }
  }, [contact]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditContactDto>({
    resolver: zodResolver(edit_contact_dto),
    defaultValues: { country: contact?.country, name: contact?.name, tel: contact?.tel },
  });

  const edit_contact = (dto: EditContactDto) => {
    if (!token || !contact) return;

    const initial_contact = initial_contact_ref.current;
    if (
      dto.country === initial_contact?.country &&
      dto.name === initial_contact.name &&
      dto.tel === initial_contact.tel
    )
      return;

    const controller = new AbortController();
    const { id } = contact;

    controller_ref.current = controller;

    mutate({ signal: controller.signal, token, contact_id: id as UUID, dto });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(edit_contact)}>
      <Text {...register("name")} placeholder="Nombre" err={errors.name?.message} />
      <Tel
        register_country={register("country")}
        // -----
        {...register("tel")}
        err={errors.tel?.message}
      />
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
