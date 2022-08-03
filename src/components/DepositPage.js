import Deposit from "./Deposit";
import { useState, useId } from "react";

import "./DepositPage.css"

const DepositPage = props => {
    const [getName, setGetName] = useState('Gek Javier')
    const whoseAccount = props.owners.find(item => item.name === getName);

    // Input name
    const id = useId();
    const [showProfile, setShowProfile] = useState('');
    const searchProfile = (e) => {
        if (getName !== '') {
            e.preventDefault();
            setShowProfile(`Name: ${getName}`);
        }  
    }
    return (
        <div className="deposit-page">
            <form>
                <label htmlFor={id}>Enter name of account: </label>
                <input type="text" id={id} value={getName} onInput={e => setGetName(e.target.value)} />
                <button onSubmit={searchProfile} onClick={searchProfile}>Submit</button>
            </form>
            <div>{showProfile}</div>
            <Deposit whoseAccount={whoseAccount} />
        </div>
    )
}

export default DepositPage;

// Goal

// Need to know whose account to access
// Use .find for finding balance