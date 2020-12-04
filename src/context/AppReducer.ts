// eslint-disable-next-line
export default (state: any, action: any) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction: Transaction) => transaction.id !== action.payload
        ),
      };

    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case 'CLEAR_TRANSACTION':
      return {
        ...state,
        transactions: [],
      };

    default:
      return state;
  }
};
