import css from "./Tel.module.css";
import { cls } from "@utils/cls";
import { COUNTRIES } from "./countries";
import { InputHTMLAttributes } from "react";

export default function Tel(props: Props) {
  const { className, err, ...rest } = props;

  return (
    <label className={cls([css.tel, className])}>
      <select>
        {COUNTRIES.map((country) => (
          <option key={country.code} value={country.dial_code}>
            {country.flag}
          </option>
        ))}
      </select>
      <input
        {...rest}
        id="num"
        type="number"
        placeholder="Tel"
        min={0}
        className={cls([err && css.input_err])}
      />
    </label>
  );
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  err?: string;
}
