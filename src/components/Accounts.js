import AccountOwner from "./AccountOwner";
import "./Accounts.css";
import Card from "./Card";

const Accounts = (props) => {
  console.log(props.owners);
  localStorage.setItem('accounts', JSON.stringify(props.owners));
  return (
    <Card className="owners">
      <Card className="header">
        <div className="header-account__id">Account #</div>
        <div className="header-account-owner__detail">
          <h2>Account Name</h2>
          <div className="header-account-owner__balance">Balance</div>
        </div>
      </Card>
      {props.owners.map((account) => (
        <AccountOwner
          key={account.id}
          name={account.name}
          balance={account.balance}
          id={account.id}
        />
      ))}
    </Card>
  );
};

export default Accounts;
