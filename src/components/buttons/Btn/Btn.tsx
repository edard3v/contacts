import Cross from "@components/icons/Cross";
import css from "./Btn.module.css";
import { cls } from "@utils/cls";
import { ButtonHTMLAttributes } from "react";

export default function Btn(props: Props) {
  const { className, children, loading, err, disabled, ...rest } = props;

  return (
    <button
      {...rest}
      className={cls([css.btn, className])}
      disabled={disabled || loading}
    >
      {!loading && children}

      {loading && <div className={css.loading}></div>}

      {err && !loading && !disabled && <Cross className={css.err} />}
    </button>
  );
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  err?: boolean;
}
