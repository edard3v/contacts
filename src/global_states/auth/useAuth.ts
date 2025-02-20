import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { refresh_token_fetch } from "./refresh_token_fetch";
import { Role } from "@enums/role";

type Auth = {
  token: string | null;

  remove_token: () => void;
  update_token: (token: string) => void;
  get_token_payload: () => TokenPayload | undefined;
  refresh_token: (signal: AbortSignal) => Promise<void>;
};

export const useAuth = create<Auth>()(
  persist(
    devtools((set, get) => ({
      token: null,

      remove_token: () => {
        set({ token: null });
      },

      update_token: (token: string) => {
        set({ token });
      },

      get_token_payload() {
        const token = get().token;
        if (!token) return undefined;
        return jwtDecode(token);
      },

      refresh_token: async (signal: AbortSignal) => {
        const token = get().token; // Tomamos el token directamente del estado
        if (!token) return;

        try {
          const info_token = jwtDecode(token) as TokenPayload;
          const current_time = Math.floor(Date.now() / 1000);
          const days_in_seconds = 3 * 24 * 60 * 60;
          const is_time_to_refresh = current_time - info_token.iat > days_in_seconds;

          const { update_token } = get();
          if (!is_time_to_refresh) return update_token(token);

          const { token: new_token } = await refresh_token_fetch({ signal, token });
          return update_token(new_token);
        } catch {
          return get().remove_token();
        }
      },
    })),
    { name: "auth" } // Esta es la clave en localStorage
  )
);

export interface TokenPayload extends JwtPayload {
  id: UUID;
  role: Role;
  email: string;
  iat: number;
}
