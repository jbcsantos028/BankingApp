import { useId, useState } from 'react';

import "./Deposit.css";

const Transfer = props => {
    const id = useId();
    const [inputAmount, setInputAmount] = useState('');
    const [receiverAccount, setReceiverAccount] = useState('');
    const showAmount = (e) => {
        if (inputAmount !== '') {
            e.preventDefault();
            const previousBalance = props.whoseAccount.balance;
            props.whoseAccount.balance = parseInt(props.whoseAccount.balance) - parseInt(inputAmount);

             // Receiver account
            const receiver = props.owners.find(item => item.name === receiverAccount);
            const receiverPreviousBalance = receiver.balance;
            receiver.balance = parseInt(receiverPreviousBalance) + parseInt(inputAmount);
            
            props.setUpdate(`The Giver: ${props.whoseAccount.name} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
            props.setTransferUpdate(`The Taker: ${receiver.name} ; Old: ${receiverPreviousBalance} ; New: ${receiver.balance}`);
        }
    }
    return (
        <div className="deposit-wrapper">
            <form>
                <label htmlFor={id}>Transfer amount: </label>
                <input type="number" id={id} onInput={e => setInputAmount(e.target.value)} />
                <input type="text" onInput={e => setReceiverAccount(e.target.value)} />
                <button onSubmit={showAmount} onClick={showAmount}>Submit</button>
            </form>
            <div className="new-details">
                <div className="new-amount">{props.update}</div>
                <div className="receiver-new-amount">{props.transferUpdate}</div>
            </div>
        </div>
    )
}

export default Transfer;