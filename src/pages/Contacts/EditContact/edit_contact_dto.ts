import z from "zod";
import { add_contact_dto } from "../AddContact/add_contact_dto.ts";

export const edit_contact_dto = add_contact_dto;

export type EditContactDto = z.infer<typeof edit_contact_dto>;
