import { Role } from "@enums/role";
import { z } from "zod";

export const role_zod = z.nativeEnum(Role);
