import css from "./Password.module.css";
import { cls } from "@utils/cls";
import { InputHTMLAttributes, useState } from "react";

export default function Password(props: Props) {
  const { className, err, ...rest } = props;
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  return (
    <label className={cls([css.password, className])}>
      <input
        {...rest}
        type={!isVisiblePass ? "password" : "text"}
        placeholder="Contraseña"
        className={cls([err && css.inputErr])}
        title={err}
      />
      <span
        className={css.emoji}
        onClick={() => setIsVisiblePass(!isVisiblePass)}
      >
        {!isVisiblePass ? "😵" : "🧐"}
      </span>
    </label>
  );
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
}
