import React, { createContext, useReducer, useContext } from 'react';
import AppReducer from './AppReducer';

const dummyTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 },
];

// create initialState
const initialState: any = {
  transactions: dummyTransactions,
};

// create context
export const GlobalContext = createContext(initialState);

// create Global Provider
export const GlobalProvider: React.FC<any> = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

// create store
export const useStore = () => useContext(GlobalContext);
