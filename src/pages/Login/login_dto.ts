import { register_dto } from "@pages/Register/register_dto";
import z from "zod";

export const login_dto = register_dto;

export type LoginDto = z.infer<typeof login_dto>;
