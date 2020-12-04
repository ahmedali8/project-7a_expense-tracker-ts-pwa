import React, { useState } from 'react';

import { useStore } from '../context/GlobalState';
import { addTransaction } from '../context/actions';

const AddTransaction = () => {
  const [text, setText] = useState<string>('');
  const [amount, setAmount] = useState<number>(NaN);

  const [, dispatch] = useStore();

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (text.trim() === '') {
      alert('Add valid text');
    } else if (String(amount).trim() === '0') {
      alert('Add valid amount');
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text: text,
        amount: +amount,
      };

      dispatch(addTransaction(newTransaction));

      setText('');
      setAmount(NaN);
    }
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter Text"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount
            <br />
            (income is positive, expense is negative)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(+e.target.value)}
            placeholder="Enter Amount"
            required
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
