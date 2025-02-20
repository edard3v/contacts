import { Api } from "@api/api";
import { RegisterDto } from "./register_dto";
import { Err } from "@errors/Err";

export const register_fetch = async (params: RegisterFetch): Promise<{ msg: string }> => {
  const { signal, dto } = params;

  const res = await fetch(Api.start_register_url, {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    throw new Err(res.status, await res.text());
  }

  return await res.json();
};

export type RegisterFetch = {
  signal: AbortSignal;
  dto: RegisterDto;
};
