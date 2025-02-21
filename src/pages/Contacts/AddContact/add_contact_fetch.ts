import { Api } from "@api/api";
import { Err } from "@errors/Err";
import { AddContactDto } from "./add_contact_dto";

export const add_contact_fetch = async (params: AddContactFetch): Promise<{ msg: string }> => {
  const { signal, token, dto } = params;

  const res = await fetch(Api.add_contact_url, {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dto),
  });

  if (!res.ok) {
    throw new Err(res.status, await res.text());
  }

  return await res.json();
};

export type AddContactFetch = {
  signal: AbortSignal;
  token: string;
  dto: AddContactDto;
};
