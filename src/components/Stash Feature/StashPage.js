import "./StashPage.css"
import { useState } from "react";
import { AddStashModal } from "./AddStashModal";

export const StashPage = props => {
    const [addStashOpen, setAddStashOpen] = useState(false);

    const stashList = props.customer.stash.map(item => {
        let icon = '';
        if (item.stashType === 'bills') {
            icon = "🧾";
        } else if (item.stashType === 'dream car') {
            icon = "🚗";
        };
        return (
            <button>
                <span>{icon}</span>
                <div>{item.stashType}</div>
            </button>
        )
    },)

    const checkModal = () => {
        console.log(addStashOpen);
        console.log(props.customer);
    }

    return (
        <div>
            <div className="stash-page-header">
                <h1>Stash</h1>
                <div>{props.customer.balance}</div>
                <button onClick={checkModal}>Check modal state</button>
            </div>
            <div className="stash-page-wrapper">
                <div className="stash-list">
                    <button onClick={() => setAddStashOpen(true)}>
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add a Stash</span>
                    </button>
                    {stashList}
                </div>
            </div>
            <AddStashModal addStashOpen={addStashOpen} setAddStashOpen={setAddStashOpen} customer={props.customer} updateStash={props.updateStash} setUpdateStash={props.setUpdateStash} />
        </div>
    )
}