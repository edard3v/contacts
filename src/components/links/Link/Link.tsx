import css from "./Link.module.css";
import { cls } from "@utils/cls";
import { NavLink, NavLinkProps } from "react-router-dom";

export default function Link(props: Props) {
  const { to, children, className, ...rest } = props;

  return (
    <NavLink
      {...rest}
      to={to}
      className={({ isActive }) =>
        cls([css.link, isActive && css.isActive, className])
      }
    >
      {children}
    </NavLink>
  );
}

interface Props extends NavLinkProps {
  className?: string;
}
