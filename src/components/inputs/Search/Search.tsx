import css from "./Search.module.css";
import { cls } from "@utils/cls";
import { InputHTMLAttributes, useEffect, useRef } from "react";

export default function Search(props: Props) {
  const input_ref = useRef<HTMLInputElement>(null);
  const { className, err, placeholder, fn, ...rest } = props;

  useEffect(() => {
    input_ref.current?.focus();
  }, []);

  return (
    <label className={cls([css.search, className])}>
      <input
        {...rest}
        ref={input_ref}
        type="text"
        placeholder={placeholder || "Buscar"}
        className={cls([err && css.inputErr])}
        title={err}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            fn(e.currentTarget.value);
          }
        }}
      />
      <button
        className={css.lupe}
        onClick={() => {
          if (input_ref.current) {
            fn(input_ref.current.value);
          }
        }}
      >
        🔍
      </button>
    </label>
  );
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
  fn: (search: string) => void;
}
