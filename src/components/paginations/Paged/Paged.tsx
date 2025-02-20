import { cls } from "@utils/cls";
import css from "./Paged.module.css";

export default function Paged({ fn, total_page = 1, page, className }: Props) {
  const new_prev = page - 1;
  const is_valid_prev = new_prev >= 1;

  const new_next = page + 1;
  const is_valid_next = new_next <= total_page;

  const prev = () => {
    if (!is_valid_prev) return;
    fn(new_prev);
  };

  const next = () => {
    if (!total_page) return;
    if (!is_valid_next) return;

    fn(new_next);
  };

  return (
    <div className={cls([css.paged, className])}>
      <button className={css.back} onClick={prev} disabled={!is_valid_prev}>
        🠘
      </button>

      <span className={css.page}>{page}</span>

      <button className={css.next} onClick={next} disabled={!is_valid_next}>
        🠚
      </button>
    </div>
  );
}

type Props = {
  page: number;
  total_page?: number;
  fn: (new_page: number) => void;
  className?: string;
};
