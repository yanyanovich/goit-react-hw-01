import clsx from "clsx";
import css from "./TransactionHistory.module.css";
import Transaction from "../Transaction/Transaction";

export default function TransactionHistory({ items }) {
  return (
    <table className={clsx(css.table)}>
      <thead className={clsx(css.thead)}>
        <tr>
          <th className={clsx(css.th)}>Type</th>
          <th className={clsx(css.th)}>Amount</th>
          <th className={clsx(css.th)}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return <Transaction key={item.id} type={item.type} amount={item.amount} currency={item.currency} />;
        })}
      </tbody>
    </table>
  );
}
