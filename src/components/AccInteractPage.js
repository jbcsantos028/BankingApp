import Deposit from "./Deposit";
import Withdraw from "./Withdraw";
import Transfer from "./Transfer";


import "./AccInteractPage.css";

const AccInteractPage = props => {
    return (
        <div className="account-interact-page">
            {
                props.showDeposit?
                <Deposit whoseAccount={props.whoseAccount} update={props.update} setUpdate={props.setUpdate} className="deposit-page" showResult={props.showResult} setShowResult={props.setShowResult} owners={props.owners} />
                :null
            }
            {
                props.showWithdraw?
                <Withdraw whoseAccount={props.whoseAccount} update={props.update} setUpdate={props.setUpdate} showResult={props.showResult} setShowResult={props.setShowResult} owners={props.owners}/>
                :null
            }
            {
                props.showTransfer?
                <Transfer 
                    whoseAccount={props.whoseAccount} 
                    owners={props.owners} 
                    update={props.update} 
                    setUpdate={props.setUpdate} 
                    transferUpdate={props.transferUpdate} 
                    setTransferUpdate={props.setTransferUpdate} 
                    showResult={props.showResult}
                    setShowResult={props.setShowResult}
                />
                :null
            }
            
            
        </div>
    )
}

export default AccInteractPage;

// Goal

// Need to know whose account to access
// Use .find for finding balance