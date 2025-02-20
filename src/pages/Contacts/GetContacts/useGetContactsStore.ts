import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { GetContactsDto } from "./get_contacts_dto";

export const useGetContactsStore = create<GetContactsStore>()(
  devtools(
    (set) => ({
      page: 1,
      limit: 5,
      name: undefined,
      tel: undefined,

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
    }),
    { name: "get_contacts_store" }
  )
);

interface GetContactsStore extends GetContactsDto {
  set_page: (page: number) => void;
  set_limit: (limit: number) => void;
  set_name: (name: string | undefined) => void;
  set_tel: (tel: number | undefined) => void;
}
