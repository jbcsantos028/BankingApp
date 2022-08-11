import React from 'react'
import './BudgetAppHome.css'

const AddTransaction = () => {
  return (
    <div className="form-wrapper">
      <form>
        <div className="input-group income">
          <input type="text" placeholder="Add Income..." autcomplete="off" />
          <input type="number" placeholder="Amount" autcomplete="off" />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense..." autcomplete="off" />
          <input type="number" placeholder="Amount" autcomplete="off" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default AddTransaction