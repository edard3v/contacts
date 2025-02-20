import { email_zod } from "@utils/zod/email_zod";
import { password_zod } from "@utils/zod/password_zod";
import z from "zod";

export const register_dto = z
  .object({
    email: email_zod,
    password: password_zod,
  })
  .strict();

export type RegisterDto = z.infer<typeof register_dto>;
