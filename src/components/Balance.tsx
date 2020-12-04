import React from 'react';
import { useStore } from '../context/GlobalState';

const Balance = () => {
  const [{ transactions }] = useStore();

  const amounts: number[] = transactions.map(
    (transaction: Transaction) => transaction.amount
  );

  const total: number = +amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};

export default Balance;
