import css from "./Tel.module.css";
import { cls } from "@utils/cls";
import { COUNTRIES } from "./countries";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Country } from "@enums/Country";

export default function Tel(props: Props) {
  const { className, err, register_country, value_country, on_change_country, ...rest } = props;

  return (
    <label className={cls([css.tel, className])}>
      <select
        {...register_country}
        value={value_country}
        onChange={(e) => on_change_country && on_change_country(e.target.value as Country)}
      >
        {COUNTRIES.map((country) => (
          <option key={country.dial_code} value={country.dial_code}>
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
  register_country?: UseFormRegisterReturn<"country">;
  value_country?: string;
  on_change_country?: (country: Country) => void;
}
