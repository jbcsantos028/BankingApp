import React from 'react'
import './BudgetAppHome.css'

const ExpenseList = () => {
  return (
    <div className="transactions transactions-expense">
      <h2>Expense List</h2>
      <ul className="transaction-list">
        <li className="transaction">
          <span className="transaction-text">Rent</span>
          <span className="transaction-amount">&#8369;10000</span>
          <button className="delete-btn">
            <i className="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default ExpenseList