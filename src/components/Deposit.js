import { useId, useState } from 'react';

import ErrorModal from "./ErrorModal";
import "./Deposit.css";

const Deposit = props => {
    const id = useId();
    const [input, setInput] = useState('');
    const [error, setError] = useState();
    const showAmount = (e) => {
        e.preventDefault();
        props.setShowResult(true);

        if (input !== '' && input < props.whoseAccount.balance && input > 0) {
            const previousBalance = props.whoseAccount.balance; 
            props.whoseAccount.balance = Number(props.whoseAccount.balance) + Number(input);
            props.setUpdate(`Name: ${props.whoseAccount.name} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
            setError({
                title: 'Confirmation Message',
                message: 'Deposit successful.'
              });
        } else {
            props.setUpdate(`Invalid transaction`);
            setError({
                title: 'Invalid Transaction',
                message: 'Invalid transaction.'
              });
              return;
        }
    }

    const errorHandler = () => {
        setError(null);
      };

    return (
        <div className="deposit-wrapper">
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} accountList={props.owners}/>}
            <form className='input-wrapper'>
                <div>
                    <label className="deposit-label" htmlFor={id}>Deposit amount: </label>
                    <input className="deposit-input" type="text" id={id} value={input} onInput={e => setInput(e.target.value)} />
                </div>
                <button className="deposit-btn" onSubmit={showAmount} onClick={showAmount}>Submit</button>
            </form>
            {
                props.showResult ?
                <div className="new-details">
                    <div className="new-amount">{props.update}</div>
                </div>
                : null
            }
        </div>
    )
}

export default Deposit;





// Goals
// User input deposit amount
// Display new balance
