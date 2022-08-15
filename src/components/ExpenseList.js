import React from 'react'
import './BudgetAppHome.css'

const ExpenseList = (props) => {
  console.log(props.customerExpense);
  console.log(props.customer);
  return (
    <div className="transactions transactions-expense">
      <h2>Expense List</h2>
      <ul className="transaction-list">
      {props.customerExpense.map((expense) => (
        <li key={expense.id} className="transaction">
          <span className="transaction-text">{expense.description}</span>
          <span className="transaction-amount">&#8369;{expense.amount}</span>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default ExpenseList