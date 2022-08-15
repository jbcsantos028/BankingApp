import "./AddStashModal.css";
import { useState } from "react";

export const AddStashModal = props => {
    const [input, setInput] = useState('');

    const addStashSubmit = () => {
        console.log(props.customer);
        props.setAddStashOpen(false);

        const addStashToAccount = {
            stashType: "bills",
            amount: input
        };

        props.customer.balance = Number(props.customer.balance) - Number(input);

        props.customer.stash.push(addStashToAccount);
        props.setUpdateStash(`${addStashToAccount} + ${props.customer.balance} + ${props.customer.stash}`);
        localStorage.setItem('accounts', JSON.stringify(props.customer));
    }

    if (props.addStashOpen) {
        return (
            <div className="modal-overlay">
                <div className="add-stash-modal">
                    <div>
                        <button onClick={() => props.setAddStashOpen(false)}>{props.customer.name}</button>
                        <button onClick={console.log(props.customer)}>Check customer status</button>
                    </div>
                    <form>
                        <input type="text" value={input} onInput={e => setInput(e.target.value)}></input>
                        <button onClick={() => addStashSubmit()}>Add Stash</button>
                    </form>
                </div>
            </div>
        )
    } else {
        return null;
    }
}


// <label className="deposit-label" htmlFor={id}>Deposit amount: </label>
// <input className="deposit-input" type="text" id={id} value={input} onInput={e => setInput(e.target.value)} />
// <button className="deposit-btn" onSubmit={showAmount} onClick={showAmount}>Submit</button>