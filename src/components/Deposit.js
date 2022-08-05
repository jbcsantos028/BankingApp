import { useId, useState } from 'react';

import "./Deposit.css";

const Deposit = props => {
    const id = useId();
    const [input, setInput] = useState('');
    const showAmount = (e) => {
        if (input !== '') {
            e.preventDefault();
            const previousBalance = props.whoseAccount.balance; 
            console.log(props.whoseAccount.balance)
            props.whoseAccount.balance = parseInt(props.whoseAccount.balance) + parseInt(input);
            console.log(props.whoseAccount.balance);
            console.log(props.whoseAccount);
            props.setUpdate(`Name: ${props.whoseAccount.name} ; Old: ${previousBalance} ; New: ${props.whoseAccount.balance}`);
        }
    }
    return (
        <div className="deposit-wrapper">
            <form>
                <label htmlFor={id}>Deposit amount: </label>
                <input type="number" id={id} value={input} onInput={e => setInput(e.target.value)} />
                <button onSubmit={showAmount} onClick={showAmount}>Submit</button>
            </form>
            <div className="new-details">
                <div className="new-amount">{props.update}</div>
            </div>
        </div>
    )
}

export default Deposit;





// Goals
// User input deposit amount
// Display new balance
