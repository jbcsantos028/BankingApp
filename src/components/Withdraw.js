import { useId, useState } from 'react';

import "./Deposit.css";

const Withdraw = props => {
    const id = useId();
    const [input, setInput] = useState('');
    const showAmount = (e) => {
        e.preventDefault();
        if (input !== '' && input < props.whoseAccount.balance) {
            const previousBalance = props.whoseAccount.balance;
            props.whoseAccount.balance = parseInt(props.whoseAccount.balance) - parseInt(input);
            props.setUpdate(`Name: ${props.whoseAccount.name} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
        } else {
            props.setUpdate(`Invalid transaction`)
        }
    }
    return (
        <div className="deposit-wrapper">
            <form>
                <label htmlFor={id}>Withdraw amount: </label>
                <input type="number" id={id} value={input} onInput={e => setInput(e.target.value)} />
                <button onSubmit={showAmount} onClick={showAmount}>Submit</button>
            </form>
            <div className="new-details">
                <div className="new-amount">{props.update}</div>
            </div>
        </div>
    )
}

export default Withdraw;
