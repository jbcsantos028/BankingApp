import React, { useId, useState } from 'react';

import ErrorModal from "./ErrorModal";
import "./Deposit.css";

const Transfer = props => {
    const id = useId();
    const [inputAmount, setInputAmount] = useState('');
    const [receiverAccount, setReceiverAccount] = useState('');
    const [error, setError] = useState();

    const showAmount = (e) => {
        e.preventDefault();
        const previousBalance = props.whoseAccount.balance;
        const receiver = props.owners.find(item => item.name.toLowerCase() === receiverAccount.toLowerCase());
        if (!receiver) {
            setError({
                title: 'Recipient does not exist',
                message: 'Please enter an existing account name.'
              });
              return;
        }
        const receiverPreviousBalance = receiver.balance;

        
        props.setShowResult(true);
        
        if (inputAmount !== '' && inputAmount < props.whoseAccount.balance && inputAmount > 0 && receiverAccount !== props.whoseAccount.name) {    
            //new additions for transaction history
            const addToHistory = {
                transactionType: "Sent",
                amount: inputAmount
            };
            props.whoseAccount.history.push(addToHistory);
            
            const addToHistoryReceiver = {
                transactionType: "Nice Reshivved",
                amount: inputAmount
            };
            receiver.history.push(addToHistoryReceiver);

            props.whoseAccount.balance = Number(props.whoseAccount.balance) - Number(inputAmount);
            receiver.balance = Number(receiverPreviousBalance) + Number(inputAmount);
            props.setUpdate(`The Giver: ${props.whoseAccount.name.toUpperCase()} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
            props.setTransferUpdate(`The Taker: ${receiver.name.toUpperCase()} ; Old: ${receiverPreviousBalance} ; New: ${receiver.balance}`);
            setError({
                title: 'Confirmation Message',
                message: 'Transfer successful.'
              });
        } else if (receiverAccount === props.whoseAccount.name) {
            props.setUpdate(`Invalid receiver`);
            setError({
                title: 'Invalid receiver',
                message: 'Invalid receiver.'
              });
        } else {
            props.setUpdate(`Invalid amount`);
            setError({
                title: 'Invalid amount',
                message: 'Invalid amount.'
              });
        }
    }

    const errorHandler = () => {
        setError(null);
      };

    return (
        <div className="deposit-wrapper">
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} accountList={props.owners}/>}
            <form className="input-wrapper">
                <div>
                    <label className="deposit-label">Recipient name:   </label>
                    <input className="deposit-input2" type="text" onInput={e => setReceiverAccount(e.target.value)} />
                    <label className="deposit-label" htmlFor={id}>Transfer amount:   </label>
                    <input className="deposit-input2" type="text" id={id} onInput={e => setInputAmount(e.target.value)} />
                </div>
                <button className="deposit-btn" onSubmit={showAmount} onClick={showAmount}>Submit</button>
            </form>
            {
                props.showResult ?
                <div className="new-details">
                    <div className="new-amount">{props.update}</div>
                    <div className="receiver-new-amount">{props.transferUpdate}</div>
                </div>
                : null
            }
        </div>
    )
}

export default Transfer;

// if acc === acc false
// no negative values