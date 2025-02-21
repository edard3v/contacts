import Btn from "@components/buttons/Btn/Btn";
import css from "./RemoveContact.module.css";
import { useContactStore } from "../useContactStore";
import { capitalize } from "@utils/capitalize";
import { useAuthStore } from "@global_stores/auth/useAuthStore";
import React, { useRef } from "react";
import { useRemoveContactMut } from "./useRemoveContactMut";

export default function RemoveContact() {
  const controller_ref = useRef<AbortController | null>(null);
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const contact = useContactStore((state) => state.contact);
  const token = useAuthStore((state) => state.token);
  const { mutate, isPending, isError } = useRemoveContactMut();

  const remove_contact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !contact) return;
    const controller = new AbortController();
    controller_ref.current = controller;
    mutate({ signal: controller.signal, token, id: contact.id as UUID });
  };

  return (
    <form className={css.form} onSubmit={remove_contact}>
      <h6>¿Estás seguro que deseas eliminar a {contact?.name && capitalize(contact?.name)}</h6>
      <div className={css.btns}>
        <Btn className={css.confirm} disabled={isPending} loading={isPending} err={isError}>
          Confirmar
        </Btn>
        <Btn className={css.cancel} type="button" onClick={() => deactive_contact_form()}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
