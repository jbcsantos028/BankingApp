import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import Accounts from "./components/Accounts";
import NewAccount from "./components/NewAccount";
import AccInteractPage from './components/AccInteractPage';
import ChooseAccount from './components/ChooseAccount';
import LoginForm from './components/LoginPage';
import MainNavigation from './components/MainNavigation';
import BudgetAppHome from './components/BudgetAppHome';
import Crypto from './components/Crypto';

import "./App.css";
import { TransactionHistory } from './components/TransactionHistory';
import { StashPage } from './components/Stash Feature/StashPage';

const adminUser = {
  email: "admin@admin.com",
  password: "admin123"
}

const dummyAccounts = [
  {
    name: "Timothy Coronel",
    balance: 25000,
    birthdate: "6/8/1990",
    id: 75053,
    email: "timothy@gmail.com",
    password: "pass1",
    history: [
      {
        transactionType: "Depusit",
        amount: 10001
      },
      {
        transactionType: "Widwoah",
        amount: 3000
      },
      {
        transactionType: "Transfer: Sent",
        amount: 500
      }
    ],
    income: [
      {
        description: "sell tv",
        amount: 10000,
        id: 7564
      },
      {
        description: "side hustle",
        amount: 3000,
        id: 8472
      },
      {
        description: "collect rent",
        amount: 500,
        id: 5324
      }
    ],
    expense: [
      {
        description: "buy clothes",
        amount: 8000,
        id: 4124
      },
      {
        description: "gas",
        amount: 3212,
        id: 8289
      },
      {
        description: "pay rent",
        amount: 999,
        id: 3829
      }
    ],
    totalIncome: 13500,
    totalExpense: 12211,
    totalBudget: 26289,
    stash: [
      {
        stashType: "bills",
        amount: 1000
      },
      {
        stashType: "dream car",
        amount: 2000
      }
    ]
  },
  {
    name: "Pao Landicho",
    balance: 36000,
    birthdate: "23/4/1993",
    id: 83453,
    email: "pao@gmail.com",
    password: "pass1",
    income: [
      {
        description: "sell tv",
        amount: 10000,
        id: 7564
      },
      {
        description: "side hustle",
        amount: 3000,
        id: 8472
      },
      {
        description: "collect rent",
        amount: 500,
        id: 5324
      }
    ],
    expense: [
      {
        description: "buy clothes",
        amount: 8000,
        id: 4124
      },
      {
        description: "gas",
        amount: 3212,
        id: 8289
      },
      {
        description: "pay rent",
        amount: 999,
        id: 3829
      }
    ],
    totalIncome: 13500,
    totalExpense: 12211,
    totalBudget: 37289,
    history: [
      {
        transactionType: "Depusit",
        amount: 100002
      },
      {
        transactionType: "Widwoah",
        amount: 2000
      },
      {
        transactionType: "Transfer: Reshived",
        amount: 500
      }
    ]
  },
  {
    name: "Jul Santos",
    balance: 18000,
    birthdate: "7/12/2002",
    id: 83490,
    email: "jul@gmail.com",
    password: "pass1",
    income: [
      {
        description: "sell tv",
        amount: 10000,
        id: 7564
      },
      {
        description: "side hustle",
        amount: 3000,
        id: 8472
      },
      {
        description: "collect rent",
        amount: 500,
        id: 5324
      }
    ],
    expense: [
      {
        description: "buy clothes",
        amount: 8000,
        id: 4124
      },
      {
        description: "gas",
        amount: 3212,
        id: 8289
      },
      {
        description: "pay rent",
        amount: 999,
        id: 3829
      }
    ],
    totalIncome: 13500,
    totalExpense: 12211,
    totalBudget: 19289,
    history: [
      {
        transactionType: "Depusit",
        amount: 100003
      },
      {
        transactionType: "Widwoah",
        amount: 2000
      },
      {
        transactionType: "Transfer: Sent",
        amount: 500
      }
    ]
  },
  {
    name: "Jas Santos",
    balance: 50000,
    birthdate: "31/7/1998",
    id: 89222,
    email: "jas@gmail.com",
    password: "pass1",
    income: [
      {
        description: "sell tv",
        amount: 10000,
        id: 7564
      },
      {
        description: "side hustle",
        amount: 3000,
        id: 8472
      },
      {
        description: "collect rent",
        amount: 500,
        id: 5324
      }
    ],
    expense: [
      {
        description: "buy clothes",
        amount: 8000,
        id: 4124
      },
      {
        description: "gas",
        amount: 3212,
        id: 8289
      },
      {
        description: "pay rent",
        amount: 999,
        id: 3829
      }
    ],
    totalIncome: 13500,
    totalExpense: 12211,
    totalBudget: 51289,
    history: [
      {
        transactionType: "Depusit",
        amount: 100004
      },
      {
        transactionType: "Widwoah",
        amount: 2000
      },
      {
        transactionType: "Transfer: Reshived",
        amount: 500
      }
    ]
  }
];

let localAccounts = JSON.parse(localStorage.getItem('accounts'));

if (!localAccounts) {
  localStorage.setItem('accounts', JSON.stringify(dummyAccounts));
  localAccounts = JSON.parse(localStorage.getItem('accounts'));
}

function App() {
  //crypto
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=php&order=market_cap_desc&per_page=80&page=1&sparkline=false')
    .then(res => {
      setCoins(res.data);
    }).catch(error => console.log(error))
  }, []);

  
  //bank-app
  const [accounts, setAccounts] = useState(localAccounts);
  const [update, setUpdate] = useState('');
  const [transferUpdate, setTransferUpdate] = useState('');
  
  const addAccountHandler = account => {
    setAccounts(prevAccounts => {
      return [account, ...prevAccounts];
    });
  }

  const addIncomeHandler = income => {
    setCustomerIncome(prevIncome => {
      return [income, ...prevIncome];
    });
    customer.income.unshift(income);
  }

  const addCustomerIncomeHandler = customerIncome => {
    setCustomerIncome(customerIncome);
  }

  const addExpenseHandler = expense => {
    setCustomerExpense(prevExpense => {
      return [expense, ...prevExpense];
    });
    customer.expense.unshift(expense);
  }

  const addCustomerExpenseHandler = customerExpense => {
    setCustomerExpense(customerExpense);
  }

  const totalIncomeHandler = totalIncome => {
    setCustomerTotalIncome(totalIncome);
  }

  const addCustomerTotalIncomeHandler = customerTotalIncome => {
    setCustomerTotalIncome(customerTotalIncome);
  }

  const totalExpenseHandler = totalExpense => {
    setCustomerTotalExpense(totalExpense);
  }

  const addCustomerTotalExpenseHandler = customerTotalExpense => {
    setCustomerTotalExpense(customerTotalExpense);
  }

  const totalBudgetHandler = totalBudget => {
    setCustomerTotalBudget(totalBudget);
  }

  const addCustomerTotalBudgetHandler = customerTotalBudget => {
    setCustomerTotalBudget(customerTotalBudget);
  }

  // Login Page
  const [accountType, setAccountType] = useState('');

  // Choose Acc
  const [whoseAccount, setWhoseAccount] = useState('');
  const [showProfile, setShowProfile] = useState('');
  const [getName, setGetName] = useState('');

  // Button features
  const [showNewAccForm, setShowNewAccForm] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Budget App
  const [customer, setCustomer] = useState('');
  const [customerIncome, setCustomerIncome] = useState('');
  const [customerExpense, setCustomerExpense] = useState('');
  const [customerTotalIncome, setCustomerTotalIncome] = useState('');
  const [customerTotalExpense, setCustomerTotalExpense] = useState('');
  const [customerTotalBudget, setCustomerTotalBudget] = useState('');

  const showClick = (whichButton) => {
    setShowResult(false);
    if (whichButton === 'deposit') {
      setShowDeposit(!showDeposit);
      setShowWithdraw(false);
      setShowTransfer(false);
      setShowNewAccForm(false);
      setUpdate('');
    } else if (whichButton === 'withdraw') {
      setShowDeposit(false);
      setShowWithdraw(!showWithdraw);
      setShowTransfer(false);
      setShowNewAccForm(false);
      setUpdate('');
    } else if (whichButton === 'transfer') {
      setShowDeposit(false);
      setShowWithdraw(false);
      setShowTransfer(!showTransfer);
      setShowNewAccForm(false);
      setUpdate('');
    } else if (whichButton === 'register') {
      setShowDeposit(false);
      setShowWithdraw(false);
      setShowTransfer(false);
      setShowNewAccForm(!showNewAccForm);
      setUpdate('');
    }
  }

  return (
    <div>
      <MainNavigation accountType={accountType}/>
      <Route path="/" exact>
        {/* <header className="login-header"><div>ShawnPH Bank</div></header> */}
        <div className="login">
          <LoginForm authentication={adminUser} owners={accounts} setCustomer={setCustomer} customer={customer} onAddCustomerIncome={addCustomerIncomeHandler} onAddCustomerExpense={addCustomerExpenseHandler} onAddCustomerTotalIncome={addCustomerTotalIncomeHandler} onAddCustomerTotalExpense={addCustomerTotalExpenseHandler} onAddCustomerTotalBudget={addCustomerTotalBudgetHandler} accountType={accountType} setAccountType={setAccountType} />
        </div>
      </Route>
      <Route path="/transactions">
        <div className="header-main">
          {
            showNewAccForm ?
            <NewAccount onAddAccount={addAccountHandler} owners={accounts} showNewAccForm={showNewAccForm} />
            : 
            <div className='acc-interact-wrapper'>
              <ChooseAccount  showProfile={showProfile} setShowProfile={setShowProfile} getName={getName} setGetName={setGetName} owners={accounts} whoseAccount={whoseAccount} setWhoseAccount={setWhoseAccount} />
              <AccInteractPage 
                whoseAccount={whoseAccount}
                showDeposit={showDeposit}
                showWithdraw={showWithdraw}
                showTransfer={showTransfer}
                owners={accounts} 
                update={update} 
                setUpdate={setUpdate} 
                transferUpdate={transferUpdate} 
                setTransferUpdate={setTransferUpdate} 
                showResult={showResult}
                setShowResult={setShowResult}
              />
            </div>
          }
          <div className="buttons-wrapper">
            <div className="button-set">
              <button onClick={() => showClick('deposit')} className="feature-button">Deposit</button>
              <button onClick={() => showClick('withdraw')} className="feature-button">Withdraw</button>
            </div>
            <div className="button-set">
              <button onClick={() => showClick('transfer')} className="feature-button">Transfer</button>
              <button onClick={() => setShowNewAccForm(!showNewAccForm)} className="feature-button">Register</button>
            </div>
          </div>
        </div>
      </Route>
      <Route path="/accounts">
        <Accounts owners={accounts}/>
      </Route>
      <Route path="/transaction-history">
        <TransactionHistory owners={accounts} customer={customer} accountType={accountType} />
      </Route>
      <Route path="/budgetapp">
        <BudgetAppHome owners={accounts} customer={customer} accountType={accountType} onAddIncome={addIncomeHandler} onAddExpense={addExpenseHandler} customerIncome={customerIncome} setCustomerIncome={setCustomerIncome} customerExpense={customerExpense} setCustomerExpense={setCustomerExpense} customerTotalIncome={customerTotalIncome} onAdjustTotalIncome={totalIncomeHandler} customerTotalExpense={customerTotalExpense} onAdjustTotalExpense={totalExpenseHandler} customerTotalBudget={customerTotalBudget} onAdjustTotalBudget={totalBudgetHandler} />
      </Route>
      <Route path="/crypto">
        <Crypto search={search} onCoinSearch={setSearch} coins={coins} />
      </Route>
      <Route path="/stash-page">
        <StashPage owners={accounts} customer={customer} accountType={accountType} />
      </Route>
    </div>
  );
}

export default App;