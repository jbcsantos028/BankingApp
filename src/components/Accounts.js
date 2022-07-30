import AccountOwner from "./AccountOwner";
import './Accounts.css';
import Card from "./Card";

const Accounts = (props) => {
  return (
    <Card className="owners">
      <AccountOwner
        name={props.owners[0].name}
        balance={props.owners[0].balance}
        id={props.owners[0].id}
      />
      <AccountOwner
        name={props.owners[1].name}
        balance={props.owners[1].balance}
        id={props.owners[1].id}
      />
      <AccountOwner
        name={props.owners[2].name}
        balance={props.owners[2].balance}
        id={props.owners[2].id}
      />
      <AccountOwner
        name={props.owners[3].name}
        balance={props.owners[3].balance}
        id={props.owners[3].id}
      />
    </Card>
  );
}

export default Accounts;