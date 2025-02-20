import { Api } from "@api/api";
import { Err } from "@errors/Err";
import { LoginDto } from "./login_dto";

export const login_fetch = async (params: LoginFetch): Promise<{ token: string }> => {
  const { signal, dto } = params;

  const res = await fetch(Api.login_url, {
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

export type LoginFetch = {
  signal: AbortSignal;
  dto: LoginDto;
};
