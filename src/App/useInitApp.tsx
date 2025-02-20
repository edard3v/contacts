import { useAuth } from "@global_states/auth/useAuth";
import { useEffect, useState } from "react";

export const useInitApp = () => {
  const [loading, setLoading] = useState(true);
  const refresh_token = useAuth((state) => state.refresh_token);

  useEffect(() => {
    const controller = new AbortController();

    refresh_token(controller.signal).finally(() => setLoading(false));

    return () => controller.abort();
  }, [refresh_token]);

  return { loading };
};
