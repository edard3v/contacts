import { useQuery } from "@tanstack/react-query";
import { get_contacts_fetch } from "./get_contacts_fetch";
import { useAuth } from "@global_stores/auth/useAuth";

export const useGetContactsQuery = () => {
  const token = useAuth((state) => state.token);

  const query = useQuery({
    queryKey: ["contacts", { token }],
    queryFn: ({ signal }) => get_contacts_fetch({ signal, token }),
    enabled: !!token,
  });

  return query;
};
