import React, { useState } from "react";
import './ChooseAccount.css'
import ErrorModal from "./ErrorModal";

const ChooseAccount = props => {
    const [isShown, setIsShown] = useState(true);
    const [error, setError] = useState();
    const chosenAccount = props.owners.find(item => item.name.toLowerCase() === props.getName.toLowerCase());
    const searchProfile = (e) => {
        e.preventDefault();
        if (!chosenAccount) {
            setError({
                title: 'User does not exist',
                message: 'Please enter an existing account name.'
              });
              return;
        }
        if (props.getName !== '') {
            setIsShown(false);
            console.log(props.getName)
            props.setWhoseAccount(chosenAccount);
            props.setShowProfile(`Name: ${props.getName.toUpperCase()}  Balance: ${chosenAccount.balance}`);
            
        }  
    }

    const displayChange = () => {
        setIsShown(true);
        props.setShowDeposit(false);
        props.setShowWithdraw(false);
        props.setShowTransfer(false);
    }

    const errorHandler = () => {
        setError(null);
      };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            {
                isShown ?
                <form>
                    <label className="choose-account__label">Enter name of account: </label>
                    <input className="choose-account__input" type="text" value={props.getName} onInput={e => props.setGetName(e.target.value)} />
                    <button className="choose-account__btn" onSubmit={searchProfile} onClick={searchProfile}>Submit</button>
                </form>
                :
                <div>
                    <div className="choose-account__label">{props.showProfile}<button className="choose-account__btn2" onClick={displayChange}>Change Account</button></div>
                </div>
            }
        </div>
        
    )
    
}

export default ChooseAccount;