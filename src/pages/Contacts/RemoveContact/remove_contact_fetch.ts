import { Api } from "@api/api";
import { Err } from "@errors/Err";

export const remove_contact_fetch = async (
  params: RemoveContactFetch
): Promise<{ msg: string }> => {
  const { signal, token, id } = params;

  const res = await fetch(Api.remove_contact_url(id), {
    signal,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Err(res.status, await res.text());
  }

  return await res.json();
};

export type RemoveContactFetch = {
  signal: AbortSignal;
  token: string;
  id: UUID;
};
