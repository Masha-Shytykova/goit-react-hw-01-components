import s from "./TransactionHistory.module.css";
import TransactionHistoryTr from "../TransactionHistoryTr/TransactionHistoryTr";
import PropTypes from "prop-types";

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transaction_history}>
      <thead className={s.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryTr
            key={id}
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
