import React from 'react';
// components
import { Header, Balance, IncomeExpenses } from './components';
// styles
import './App.css';

function App() {
  return (
    <div className="box-ui">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        {/* <TransactionList />
        <AddTransaction />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
