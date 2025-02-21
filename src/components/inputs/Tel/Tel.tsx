import css from "./Tel.module.css";
import { cls } from "@utils/cls";
import { COUNTRIES } from "./countries";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export default function Tel(props: Props) {
  const { className, err, country, tel, ...rest } = props;

  return (
    <label className={cls([css.tel, className])}>
      <select {...country}>
        {COUNTRIES.map((country) => (
          <option key={country.dial_code} value={country.dial_code}>
            {country.flag}
          </option>
        ))}
      </select>
      <input
        {...tel}
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
  country?: UseFormRegisterReturn<"country">;
  tel?: UseFormRegisterReturn<"tel">;
}
