import { useQuery } from "@tanstack/react-query";
import { get_contacts_fetch } from "./get_contacts_fetch";
import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { useGetContactsStore } from "./useGetContactsStore";
import { useEffect } from "react";

export const useGetContactsQuery = () => {
  const token = useAuthStore((state) => state.token);
  const limit = useGetContactsStore((state) => state.limit);
  const name = useGetContactsStore((state) => state.name);
  const tel = useGetContactsStore((state) => state.tel);
  const page = useGetContactsStore((state) => state.page);
  const set_records = useGetContactsStore((state) => state.set_records);
  const set_total_page = useGetContactsStore((state) => state.set_total_page);

  const dto = { limit, name, tel, page };

  const query = useQuery({
    queryKey: ["contacts", { token, ...dto }],
    queryFn: ({ signal }) => get_contacts_fetch({ signal, token, dto }),
    enabled: !!token,
  });

  useEffect(() => {
    if (query.data) {
      set_records(query.data.records);
      set_total_page(query.data.total_pages);
    }
  }, [query.data, set_records, set_total_page]);

  return query;
};
