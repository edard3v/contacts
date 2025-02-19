import css from "./Layout.module.css";
import Footer from "@components/shared/Footer/Footer";
import Header from "@components/shared/Header/Header";
import { useEffect } from "react";

export default function Layout({ children, title }: Props) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <article className={css.layout}>
      <Header />
      {children}
      <Footer />
    </article>
  );
}

type Props = {
  title: string;
  children: React.ReactNode;
};
