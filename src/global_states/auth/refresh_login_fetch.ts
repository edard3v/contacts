import { Api } from "@api/api";
import { Err } from "@errors/Err";

export const refresh_login_fetch = async (
  params: RefreshLoginFetch
): Promise<{ token: string }> => {
  const { signal, token } = params;

  const res = await fetch(Api.refresh_login_url, {
    method: "POST",
    signal,
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Err(res.status, await res.text());
  }

  return await res.json();
};

export type RefreshLoginFetch = {
  signal: AbortSignal;
  token: string;
};
