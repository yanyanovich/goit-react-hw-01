import clsx from "clsx";
import css from "./Section.module.css";

export default function Section({ children }) {
  return (
    <section className={clsx(css.section)}>
      <div className={clsx(css.container)}>{children}</div>
    </section>
  );
}
