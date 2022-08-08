import { useId, useState } from 'react';

import "./Deposit.css";

const Withdraw = props => {
    const id = useId();
    const [input, setInput] = useState('');
    const showAmount = (e) => {
        e.preventDefault();
        props.setShowResult(true);

        if (input !== '' && input < props.whoseAccount.balance && input > 0) {
            const previousBalance = props.whoseAccount.balance;
            props.whoseAccount.balance = Number(props.whoseAccount.balance) - Number(input);
            props.setUpdate(`Name: ${props.whoseAccount.name} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
        } else {
            props.setUpdate(`Invalid transaction`)
        }
    }
    return (
        <div className="deposit-wrapper">
            <form>
                <label className="deposit-label" htmlFor={id}>Withdraw amount: </label>
                <input className="deposit-input" type="number" id={id} value={input} onInput={e => setInput(e.target.value)} />
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

export default Withdraw;
