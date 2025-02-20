import css from "./Header.module.css";
import Link from "@components/links/Link/Link";
import { CONTACTS } from "@pages/Contacts/config";
import { HOME } from "@pages/Home/config";

export default function Header() {
  return (
    <header className={css.header}>
      <nav>
        <Link to={HOME.to}>{HOME.display}</Link>
        <Link to={CONTACTS.to}>{CONTACTS.display}</Link>
      </nav>
    </header>
  );
}
