import { useId, useState } from 'react';


import "./Deposit.css";

const Transfer = props => {
    const id = useId();
    const [inputAmount, setInputAmount] = useState('');
    const [receiverAccount, setReceiverAccount] = useState('');
    const showAmount = (e) => {
        e.preventDefault();
        const previousBalance = props.whoseAccount.balance;
        const receiver = props.owners.find(item => item.name === receiverAccount);
        const receiverPreviousBalance = receiver.balance;
        
        if (inputAmount !== '' && inputAmount < props.whoseAccount.balance && inputAmount > 0 && receiverAccount !== props.whoseAccount.name) {    
            props.whoseAccount.balance = Number(props.whoseAccount.balance) - Number(inputAmount);
            receiver.balance = Number(receiverPreviousBalance) + Number(inputAmount);
            props.setUpdate(`The Giver: ${props.whoseAccount.name} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
            
            //Swal
            
            props.setTransferUpdate(`The Taker: ${receiver.name} ; Old: ${receiverPreviousBalance} ; New: ${receiver.balance}`);
        } else if (receiverAccount === props.whoseAccount.name) {
            props.setUpdate(`Invalid receiver`);
        } else {
            props.setUpdate(`Invalid amount`);
        }
    }
    return (
        <div className="deposit-wrapper">
            <form>
                <input type="text" onInput={e => setReceiverAccount(e.target.value)} />
                <label htmlFor={id}>Transfer amount: </label>
                <input type="text" id={id} onInput={e => setInputAmount(e.target.value)} />
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

// if acc === acc false
// no negative values