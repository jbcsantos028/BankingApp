import React from 'react'
import './BudgetAppHome.css'

const BudgetBalance = (props) => {
  console.log(props.customerTotalBudget);
  return (
    <div className="balance">
      <h2>Your Balance</h2>
      <h3>&#8369;{props.customerTotalBudget}</h3>
      <div className="income-expense">
        <div className="plus">
          <h3>Income</h3>
          <p>+&#8369;{props.customerTotalIncome}</p>
        </div>
        <div className="minus">
          <h3>Expenses</h3>
          <p>-&#8369;{props.customerTotalExpense}</p>
        </div>
      </div>
    </div>
  )
}

export default BudgetBalance