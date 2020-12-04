type Transaction = {
  id: number;
  text: string;
  amount: number;
};

type DeleteTransaction = (id: number) => void;

type AddTransaction = (transaction: Transaction) => void;

type ClearTransactions = () => void;
