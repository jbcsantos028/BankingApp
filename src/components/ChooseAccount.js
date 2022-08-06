const ChooseAccount = props => {
    // At App.js
    const chosenAccount = props.owners.find(item => item.name === props.getName);
    // const [showProfile, setShowProfile] = useState('');
    const searchProfile = (e) => {
        if (props.getName !== '') {
            e.preventDefault();
            console.log(props.getName)
            props.setWhoseAccount(chosenAccount);
            props.setShowProfile(`Name: ${props.getName}  Balance: ${chosenAccount.balance}`);
        }  
    }

    return (
        <div>
            <form>
                <label>Enter name of account: </label>
                <input type="text" value={props.getName} onInput={e => props.setGetName(e.target.value)} />
                <button onSubmit={searchProfile} onClick={searchProfile}>Submit</button>
            </form>
            <div>{props.showProfile}</div>
        </div>
        
    )
    
}

export default ChooseAccount;