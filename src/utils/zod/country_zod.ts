import { Country } from "@enums/Country";
import { z } from "zod";

export const country_zod = z.nativeEnum(Country);
