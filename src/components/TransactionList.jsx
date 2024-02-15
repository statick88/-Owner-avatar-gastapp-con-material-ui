// src/components/TransactionList.jsx

import PropTypes from "prop-types";
import "./TransactionList.css";

import { forwardRef } from "react";

const TransactionList = forwardRef(({ transactions }, ref) => (
  <div id="transaction-list" ref={ref}>
    <h2>Transaction List</h2>
    <table>
      <thead>
        <tr>
          <th>Amount</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr key={index}>
            <td>{transaction.amount}</td>
            <td>{transaction.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
));

TransactionList.propTypes = {
  transactions: PropTypes.array.isRequired,
};

export default TransactionList;

TransactionList.displayName = "TransactionList"; // Add display name
