import React from 'react'
import './BudgetAppHome.css'

const IncomeList = (props) => {
  console.log(props.customerIncome);
  console.log(props.customer);
  return (
    <div className="transactions transactions-income">
      <h2>Income List</h2>
      <ul className="transaction-list">
      {props.customerIncome.map((income) => (
        <li key={income.id} className="transaction">
          <span className="transaction-text">{income.description}</span>
          <span className="transaction-amount">&#8369;{income.amount}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default IncomeList