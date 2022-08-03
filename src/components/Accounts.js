import AccountOwner from "./AccountOwner";
import "./Accounts.css";
import Card from "./Card";
import DepositPage from "./Deposit";
import { useState } from "react";

const Accounts = (props) => {
  // Shawn Code
  const [targetName, setTargetName] = useState('');
  const allAccounts = props.owners;
  const tryButton = (buttonItem) => {
    alert(`${buttonItem}`);
    setTargetName(buttonItem);
    console.log(`${targetName}`);
  }
  return (
    <div>
      <Card className="owners">
        {props.owners.map((account) => (
          <AccountOwner
            name={account.name}
            balance={account.balance}
            id={account.id}
            tryModal={tryButton}
          >
          </AccountOwner>
        ))}
      </Card>
      {/*<DepositPage allAccounts={allAccounts} getName={targetName} />*/}
    </div>
  );
};

export default Accounts;
