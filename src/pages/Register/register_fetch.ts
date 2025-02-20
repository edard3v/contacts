import { Api } from "src/api/api";
import { Err } from "src/errors/Err";
import { RegisterDto } from "./register_dto";

export const register_fetch = async (params: Params): Promise<{ msg: string }> => {
  const { signal, dto } = params;

  const res = await fetch(Api.base_url, {
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

type Params = {
  signal: AbortSignal;
  dto: RegisterDto;
};
