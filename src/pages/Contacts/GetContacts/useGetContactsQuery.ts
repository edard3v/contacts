import { useQuery } from "@tanstack/react-query";
import { get_contacts_fetch } from "./get_contacts_fetch";
import { useAuthStore } from "@global_stores/auth/useAuthStore";
import { useGetContactsStore } from "./useGetContactsStore";
import { useEffect, useState } from "react";

export const useGetContactsQuery = () => {
  const [is_first_loading, set_is_first_loading] = useState(true);
  const token = useAuthStore((state) => state.token);
  const limit = useGetContactsStore((state) => state.limit);
  const name = useGetContactsStore((state) => state.name);
  const tel = useGetContactsStore((state) => state.tel);
  const page = useGetContactsStore((state) => state.page);
  const set_page = useGetContactsStore((state) => state.set_page);
  const set_records = useGetContactsStore((state) => state.set_records);
  const set_total_page = useGetContactsStore((state) => state.set_total_page);

  const dto = { limit, name, tel, page };

  const query = useQuery({
    queryKey: ["contacts", { token, ...dto }],
    queryFn: ({ signal }) => get_contacts_fetch({ signal, token, dto }),
    enabled: !!token,
    retry: (failureCount, error) => {
      if (failureCount >= 2) return false;

      if (error.message === "No existe esta página" && failureCount >= 1) {
        set_page(page - 1);
      }

      return true;
    },
  });

  useEffect(() => {
    if (query.data) {
      set_is_first_loading(false);
      set_records(query.data.records);
      set_total_page(query.data.total_pages);
    }
  }, [query.data, set_records, set_total_page]);

  return { ...query, is_first_loading };
};
