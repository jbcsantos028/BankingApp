import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";
import { useState, useId } from "react";

import "./AccInteractPage.css"

const AccInteractPage = props => {
    const [getName, setGetName] = useState('Gek Javier');
    const whoseAccount = props.owners.find(item => item.name === getName);

    // Input name
    const id = useId();
    const [showProfile, setShowProfile] = useState('');
    const searchProfile = (e) => {
        if (getName !== '') {
            e.preventDefault();
            setShowProfile(`Name: ${getName}  Balance: ${whoseAccount.balance}`);
        }  
    }
    return (
        <div className="account-interact-page">
            <form>
                <label htmlFor={id}>Enter name of account: </label>
                <input type="text" id={id} value={getName} onInput={e => setGetName(e.target.value)} />
                <button onSubmit={searchProfile} onClick={searchProfile}>Submit</button>
            </form>
            <div>{showProfile}</div>
            <Deposit whoseAccount={whoseAccount} update={props.update} setUpdate={props.setUpdate} />
            <Withdraw whoseAccount={whoseAccount} update={props.update} setUpdate={props.setUpdate} />
            <Transfer 
                whoseAccount={whoseAccount} 
                owners={props.owners} 
                update={props.update} 
                setUpdate={props.setUpdate} 
                transferUpdate={props.transferUpdate} 
                setTransferUpdate={props.setTransferUpdate} 
            />
        </div>
    )
}

export default AccInteractPage;

// Goal

// Need to know whose account to access
// Use .find for finding balance