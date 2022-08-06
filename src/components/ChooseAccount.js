import { useState } from "react";
import './ChooseAccount.css'

const ChooseAccount = props => {
    const [isShown, setIsShown] = useState(true);
    const chosenAccount = props.owners.find(item => item.name.toLowerCase() === props.getName.toLowerCase());
    const searchProfile = (e) => {
        e.preventDefault();
        if (!chosenAccount) {
            console.log('Account not existing');
            return;
        }
        if (props.getName !== '') {
            setIsShown(false);
            console.log(props.getName)
            props.setWhoseAccount(chosenAccount);
            props.setShowProfile(`Name: ${props.getName.toUpperCase()}  Balance: ${chosenAccount.balance}`);
        }  
    }

    return (
        <div>
            {
                isShown ?
                <form>
                    <label className="choose-account__label">Enter name of account: </label>
                    <input type="text" value={props.getName} onInput={e => props.setGetName(e.target.value)} />
                    <button onSubmit={searchProfile} onClick={searchProfile}>Submit</button>
                </form>
                :
                <div>
                    <div className="choose-account__label">{props.showProfile}</div>
                    <button onClick={() => setIsShown(true)}>Change Account</button>
                </div>
            }
        </div>
        
    )
    
}

export default ChooseAccount;