import { useAuthStore } from "@global_stores/auth/useAuthStore";
import css from "./Footer.module.css";
import Btn from "@components/buttons/Btn/Btn";

export default function Footer() {
  const logout = useAuthStore((state) => state.remove_token);
  const token = useAuthStore((state) => state.token);
  return (
    <footer className={css.footer}>
      {!token ? <div>©️edard3v</div> : <Btn onClick={logout}>Cerrar sesión</Btn>}
    </footer>
  );
}
