import './ChooseAccount.css'

const ChooseAccount = props => {
    // At App.js
    const chosenAccount = props.owners.find(item => item.name.toLowerCase() === props.getName.toLowerCase());
    // const [showProfile, setShowProfile] = useState('');
    const searchProfile = (e) => {
        if (props.getName !== '') {
            e.preventDefault();
            console.log(props.getName)
            props.setWhoseAccount(chosenAccount);
            props.setShowProfile(`Name: ${props.getName.toUpperCase()}  Balance: ${chosenAccount.balance}`);
        }  
    }

    return (
        <div>
            <form>
                <label className="choose-account__label">Enter name of account: </label>
                <input type="text" value={props.getName} onInput={e => props.setGetName(e.target.value)} />
                <button onSubmit={searchProfile} onClick={searchProfile}>Submit</button>
            </form>
            <div className="choose-account__label">{props.showProfile}</div>
        </div>
        
    )
    
}

export default ChooseAccount;