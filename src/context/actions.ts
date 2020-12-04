// Actions

export const deleteTransaction: DeleteTransaction = (id: number) => {
  return {
    type: 'DELETE_TRANSACTION',
    payload: id,
  };
};

export const addTransaction: AddTransaction = (transaction: Transaction) => {
  return {
    type: 'ADD_TRANSACTION',
    payload: transaction,
  };
};

export const clearTransactions: ClearTransactions = () => {
  return {
    type: 'CLEAR_TRANSACTION',
  };
};
