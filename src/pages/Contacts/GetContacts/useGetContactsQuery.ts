import { useQuery } from "@tanstack/react-query";
import { get_contacts_fetch } from "./get_contacts_fetch";
import { useAuthStore } from "@global_stores/auth/useAuthStore";

export const useGetContactsQuery = () => {
  const token = useAuthStore((state) => state.token);

  const query = useQuery({
    queryKey: ["contacts", { token }],
    queryFn: ({ signal }) => get_contacts_fetch({ signal, token }),
    enabled: !!token,
  });

  return query;
};
