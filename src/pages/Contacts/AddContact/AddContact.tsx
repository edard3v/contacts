import css from "./AddContact.module.css";
import Text from "@components/inputs/Text/Text";
import { useContactStore } from "../useContactStore";
import Btn from "@components/buttons/Btn/Btn";
import Tel from "@components/inputs/Tel/Tel";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { add_contact_dto, AddContactDto } from "./add_contact_dto";
import { useAddContactMut } from "./useAddContactMut";
import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { useRef } from "react";

export default function AddContact() {
  const controller_ref = useRef<AbortController | null>(null);
  const deactive_contact_form = useContactStore((state) => state.deactive_contact_form);
  const token = useAuthStore((state) => state.token);

  const { mutate, isPending, isError } = useAddContactMut();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddContactDto>({ resolver: zodResolver(add_contact_dto) });

  const onSubmit = (dto: AddContactDto) => {
    if (!token) return;
    const controller = new AbortController();
    controller_ref.current = controller;
    mutate({ signal: controller.signal, token, dto });
  };

  return (
    <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
      <Text placeholder="Nombre" {...register("name")} err={errors.name?.message} />
      <Tel register_country={register("country")} {...register("tel")} err={errors.tel?.message} />
      <div className={css.btns}>
        <Btn className={css.confirm} disabled={isPending} loading={isPending} err={isError}>
          Crear
        </Btn>
        <Btn className={css.cancel} type="button" onClick={() => deactive_contact_form()}>
          Cancelar
        </Btn>
      </div>
    </form>
  );
}
