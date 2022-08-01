import React, { useState } from 'react';

import Accounts from "./components/Accounts";
import NewAccount from "./components/NewAccount";
import DepositPage from './components/DepositPage';

const dummyAccounts = [
  {
    name: "Gek Javier",
    balance: 25000,
    id: 75053,
    email: "gek@gmail.com",
    password: "pass1"
  },
  {
    name: "Pao Landicho",
    balance: 36000,
    id: 83453,
    email: "pao@gmail.com",
    password: "pass1"
  },
  {
    name: "Jul Santos",
    balance: 18000,
    id: 83490,
    email: "jul@gmail.com",
    password: "pass1"
  },
  {
    name: "Jas Santos",
    balance: 50000,
    id: 89222,
    email: "jas@gmail.com",
    password: "pass1"
  },
];

function App() {
  const [accounts, setAccounts] = useState(dummyAccounts);
  
  const addAccountHandler = account => {
    setAccounts(prevAccounts => {
      return [account, ...prevAccounts];
    });
  }

  return (
    <div>
      <NewAccount onAddAccount={addAccountHandler} />
      <Accounts owners={accounts}/>;
      <DepositPage />
    </div>
  );
}

export default App;
