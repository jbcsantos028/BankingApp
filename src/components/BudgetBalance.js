import React from 'react'
import './BudgetAppHome.css'

const BudgetBalance = (props) => {
  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>&#8369;{props.customer.balance}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+&#8369;0.00</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-&#8369;0.00</p>
        </div>
      </div>
    </div>
  )
}

export default BudgetBalance