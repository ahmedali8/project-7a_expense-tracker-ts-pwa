import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from './context/GlobalState';
import reportWebVitals from './reportWebVitals';
import swDev from './swDev';

import { set, get } from 'idb-keyval';

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
swDev();

async function testIDBKeyval() {
  await set('hello', 'world');
  const whatDoWeHave = await get('hello');
  console.log(whatDoWeHave);
}
testIDBKeyval();
