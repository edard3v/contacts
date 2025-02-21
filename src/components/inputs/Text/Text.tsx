import { cls } from "@utils/cls";
import css from "./Text.module.css";
import { InputHTMLAttributes } from "react";

export default function Text(props: Props) {
  const { className, err, ...rest } = props;
  return (
    <label className={cls([css.text, className])}>
      <input {...rest} type="text" className={cls([err && css.inputErr])} title={err} />
    </label>
  );
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
}
