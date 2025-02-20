import { Api } from "@api/api";
import { Err } from "@errors/Err";
import { GetContactsDto } from "./get_contacts_dto";

export const get_contacts_fetch = async (params: GetContactsFetch): Promise<Contacts> => {
  const { signal, token, dto = {} } = params;
  const { page, limit, name, tel } = dto;

  const url = new URL(Api.get_contacts_url);
  if (page) url.searchParams.append("page", `${page}`);
  if (limit) url.searchParams.append("limit", `${limit}`);
  if (name) url.searchParams.append("name", name);
  if (tel) url.searchParams.append("tel", String(tel));

  console.log(url.toString());

  const res = await fetch(url.toString(), {
    signal,
    method: "GET",
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

type GetContactsFetch = {
  signal: AbortSignal;
  token: string | null;
  dto?: GetContactsDto;
};

type Contacts = {
  limit: number;
  page: number;
  total_pages: number;
  records: ContactRecord[];
};

export type ContactRecord = {
  id: string;
  name: string;
  tel: number;
  country: number;
  created_at: string | null;
  updated_at: string | null;
};
