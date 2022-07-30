import Accounts from "./components/Accounts";
import NewAccount from "./components/NewAccount";

function App() {
  const accounts = [
    {
      name: "Gek Javier",
      balance: 25000,
      id: Math.floor((1 + Math.random()) * 0x10000),
    },
    {
      name: "Pao Landicho",
      balance: 36000,
      id: Math.floor((1 + Math.random()) * 0x10000),
    },
    {
      name: "Jul Santos",
      balance: 18000,
      id: Math.floor((1 + Math.random()) * 0x10000),
    },
    {
      name: "Jas Santos",
      balance: 50000,
      id: Math.floor((1 + Math.random()) * 0x10000),
    },
  ];

  const addAccountHandler = account => {
    console.log('In App.js');
    console.log(account);
  }

  return (
    <div>
      <NewAccount onAddAccount={addAccountHandler} />
      <Accounts owners={accounts}/>;
    </div>
  );
}

export default App;
