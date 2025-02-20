import { limit_zod } from "@utils/zod/limit_zod";
import { name_zod } from "@utils/zod/name_zod";
import { page_zod } from "@utils/zod/page_zod";
import z from "zod";

export const get_contacts_dto = z
  .object({
    name: name_zod,
    tel: z.coerce.number().int(),
    page: page_zod,
    limit: limit_zod,
  })
  .partial()
  .strict();

export type GetContactsDto = z.infer<typeof get_contacts_dto>;
