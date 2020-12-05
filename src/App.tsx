import React from 'react';
// components
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionList,
  AddTransaction,
  Footer,
} from './components';
// styles
import './App.css';
// import firebase
import firebase from './firebase';

function App() {
  (async () => {
    const messaging = firebase.messaging();
    const token = await messaging.getToken();
    if (token) {
      prompt('Welcome to my Expense Tracker App \nToken', token);
    } else {
      console.log('Token not available');
    }
  })();
  return (
    <div className="box-ui">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <Footer />
      </div>
    </div>
  );
}

export default App;
