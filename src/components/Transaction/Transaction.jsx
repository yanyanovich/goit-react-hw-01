import clsx from "clsx";
import css from "./Transaction.module.css";

export default function Transaction({ type, amount, currency }) {
  return (
    <tr>
      <td>{type}</td>
      <td className={clsx(css.center)}>{amount}</td>
      <td className={clsx(css.center)}>{currency}</td>
    </tr>
  );
}
