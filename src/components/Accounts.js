import AccountOwner from "./AccountOwner";
import "./Accounts.css";
import Card from "./Card";

const Accounts = (props) => {
  return (
    <Card className="owners">
      {props.owners.map((account) => (
        <AccountOwner
          name={account.name}
          balance={account.balance}
          id={account.id}
        />
      ))}
    </Card>
  );
};

export default Accounts;
