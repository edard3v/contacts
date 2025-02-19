import css from "./Header.module.css";
import Link from "@components/links/Link/Link";
import { CONTACT } from "@pages/Contact/config";
import { HOME } from "@pages/Home/config";

export default function Header() {
  return (
    <header className={css.header}>
      <nav>
        <Link to={HOME.to}>{HOME.display}</Link>
        <Link to={CONTACT.to}>{CONTACT.display}</Link>
      </nav>
    </header>
  );
}
