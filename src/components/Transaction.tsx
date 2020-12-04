import React from 'react';

import { useStore } from '../context/GlobalState';
import { deleteTransaction } from '../context/actions';

interface TransactionProps {
  transaction: Transaction;
}

export const Transaction: React.FC<TransactionProps> = ({ transaction }) => {
  const [, dispatch] = useStore();

  const sign: string = transaction.amount < 0 ? '-' : '+';

  return (
    <div>
      <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => dispatch(deleteTransaction(transaction.id))}
        >
          x
        </button>
      </li>
    </div>
  );
};
