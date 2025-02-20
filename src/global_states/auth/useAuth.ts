import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { refresh_token_fetch } from "./refresh_token_fetch";
import { Role } from "@enums/role";

type Auth = {
  token: null | string;

  remove_token: () => void;
  update_token: (token: string) => void;
  get_token_payload: () => TokenPayload | void;
  refresh_token: (signal: AbortSignal) => Promise<void>;
};

export const useAuth = create<Auth>()(
  devtools(
    (set, get) => ({
      token: null,
      remove_token: () => {
        set({ token: null });
        localStorage.removeItem("token");
      },
      update_token: (token: string) => {
        set({ token });
        localStorage.setItem("token", token);
      },
      get_token_payload() {
        const { token } = get();
        if (!token) return;
        return jwtDecode(token);
      },
      refresh_token: async (signal: AbortSignal) => {
        const token = localStorage.getItem("token");
        if (!token) return;

        try {
          const info_token = jwtDecode(token) as TokenPayload;
          const current_time = Math.floor(Date.now() / 1000);
          const days_in_seconds = 3 * 24 * 60 * 60;
          const is_time_to_refresh = current_time - info_token.iat > days_in_seconds;

          const { update_token } = get();
          if (!is_time_to_refresh) return update_token(token);

          const { token: new_token } = await refresh_token_fetch({
            signal,
            token,
          });
          return update_token(new_token);
        } catch {
          return get().remove_token();
        }
      },
    }),
    { name: "auth" }
  )
);

export interface TokenPayload extends JwtPayload {
  id: UUID;
  role: Role;
  email: string;
  iat: number;
}
