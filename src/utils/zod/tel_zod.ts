import { z } from "zod";

export const tel_zod = z.coerce.number().int().min(1);
