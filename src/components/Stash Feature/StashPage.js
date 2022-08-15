import "./StashPage.css"

export const StashPage = props => {

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

    return (
        <div>
            <div className="stash-page-header">
                <h1>Stash</h1>
            </div>
            <div className="stash-page-wrapper">
                <div className="stash-list">
                    <button>
                        <i class="fa-solid fa-circle-plus"></i>
                        <span>Add a Stash</span>
                    </button>
                    {stashList}
                </div>
            </div>
        </div>
    )
}