import React from 'react';
import { Transaction } from './Transaction';
import { clearTransactions } from '../context/actions';

import { useStore } from '../context/GlobalState';

const TransactionList: React.FC<{}> = () => {
  const [{ transactions }, dispatch] = useStore();

  return (
    <>
      <div className="tx-history">
        <h3>Transaction History</h3>
        <button
          className="clear-btn"
          onClick={() => dispatch(clearTransactions())}
        >
          clear all
        </button>
      </div>
      <ul className="list">
        {transactions.map((transaction: Transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
