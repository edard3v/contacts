import { useAuth } from "@global_states/auth/useAuth";
import { useQuery } from "@tanstack/react-query";
import { get_contacts_fetch } from "./get_contacts_fetch";

export const useGetContacts = () => {
  const token = useAuth((state) => state.token);

  const query = useQuery({
    queryKey: ["contacts", { token }],
    queryFn: ({ signal }) => get_contacts_fetch({ signal, token }),
    enabled: !!token,
  });

  return query;
};
