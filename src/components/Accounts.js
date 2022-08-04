import AccountOwner from "./AccountOwner";
import "./Accounts.css";
import Card from "./Card";

const Accounts = (props) => {
  console.log(props.owners);

  return (
    <div>
      <Card className="owners">
        {props.owners.map((account) => (
          <AccountOwner
            name={account.name}
            balance={account.balance}
            id={account.id}
          >
          </AccountOwner>
        ))}
      </Card>
    </div>
  );
};

export default Accounts;
