import css from "./Popup.module.css";
import Btn from "@components/buttons/Btn/Btn";
import { useState } from "react";

export default function Popup(props: Props) {
  const { msg, fn } = props;
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;
  return (
    <article className={css.popup}>
      <div>{msg}</div>
      <Btn
        onClick={() => {
          if (fn) fn();
          setIsVisible(false);
        }}
      >
        Ok
      </Btn>
    </article>
  );
}

type Props = {
  msg?: string;
  fn?: () => void;
};
