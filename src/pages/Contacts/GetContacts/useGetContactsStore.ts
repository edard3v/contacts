import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { ContactRecord } from "./get_contacts_fetch";

export const useGetContactsStore = create<GetContactsStore>()(
  devtools(
    (set) => ({
      page: 1,
      limit: 5,
      name: undefined,
      tel: undefined,

      total_page: undefined,
      records: undefined,

      set_page(page) {
        set({ page });
      },
      set_limit(limit) {
        set({ limit });
      },
      set_name(name) {
        set({ name });
      },
      set_tel(tel) {
        set({ tel });
      },
      set_total_page(total_page) {
        set({ total_page });
      },
      set_records(records) {
        set({ records });
      },
    }),
    { name: "get_contacts_store" }
  )
);

interface GetContactsStore {
  page: number;
  limit: number;
  name?: string;
  tel?: number;
  total_page?: number;
  records?: ContactRecord[];
  set_page: (page: number) => void;
  set_limit: (limit: number) => void;
  set_name: (name: string | undefined) => void;
  set_tel: (tel: number | undefined) => void;
  set_total_page: (total_page: number) => void;
  set_records: (records: ContactRecord[]) => void;
}
