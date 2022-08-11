import "./TransactionHistory.css";
import MainNavigation from "./MainNavigation";

export const TransactionHistory = props => {
    console.log(props.customer);
    // Trial code
    const trialName = "Timothy Coronel"
    const chosenAccount = props.owners.find(item => item.name.toLowerCase() === trialName.toLowerCase());
    console.log(chosenAccount);
    console.log(chosenAccount.history);

    const trialName2 = "Pao Landicho"
    const chosenAccount2 = props.owners.find(item => item.name.toLowerCase() === trialName2.toLowerCase());
    console.log(chosenAccount2);
    console.log(chosenAccount2.history);

    const transactionList = chosenAccount.history.map(item =>
        <li>{item.transactionType} ; {item.amount}</li>
    );

    const checkUser = () => {
        console.log(props.customer);
    }

    return (
    <div>
        <MainNavigation />
        <div className="transaction-history">
            <h1>Transaction History</h1>
            <p>This page is a history of transactions in the past</p>
            <div className="transaction-history-list">
                <div className="transaction-history-item-types">
                    <span>Type</span>
                    <span>Amount</span>
                    <span>Date</span>
                </div>
                <ul>{transactionList}</ul>
            </div>
        </div>
        <button onClick={checkUser}>Check-user</button>
    </div>
    )
}