import { Role } from "@enums/Role";
import { z } from "zod";

export const role_zod = z.nativeEnum(Role);
