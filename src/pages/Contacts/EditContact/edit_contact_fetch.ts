import { Api } from "@api/api";
import { Err } from "@errors/Err";
import { EditContactDto } from "./edit_contact_dto";

export const edit_contact_fetch = async (params: EditContactFetch): Promise<{ msg: string }> => {
  const { signal, token, contact_id, dto } = params;

  const res = await fetch(Api.edit_contact_url(contact_id), {
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

export type EditContactFetch = {
  signal: AbortSignal;
  token: string;
  contact_id: UUID;
  dto: EditContactDto;
};
