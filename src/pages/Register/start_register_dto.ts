import { email_zod } from "@utils/zod/email_zod";
import { password_zod } from "@utils/zod/password_zod";
import z from "zod";

export const start_register_dto = z
  .object({
    email: email_zod,
    password: password_zod,
  })
  .strict();

export type StartRegisterDto = z.infer<typeof start_register_dto>;
