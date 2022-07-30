import { useId, useState } from 'react';
import { Accounts } from './Accounts';

const Deposit = props => {
    const id = useId();
    const [input, setInput] = useState('');
    const showAmount = (e) => {
        e.preventDefault();
        const currentBalance = props.balance + parseInt(input);
        console.log(currentBalance);

        //wrong code below
        return (
            <div>
                <div>{currentBalance}</div>
            </div>
        )
    }
    return (
        <div className="deposit-wrapper">
            <form>
                <label htmlFor={id}>Deposit amount: </label>
                <input type="number" minLength="1" id={id} value={input} onInput={e => setInput(e.target.value)} />
                <button onSubmit={showAmount} onClick={showAmount}>Submit</button>
            </form>
            <div className="new-details">
                <div className="new-amount"></div>
            </div>
        </div>
    )
}

export default Deposit;





// Goals
// User input deposit amount
// Display new balance
