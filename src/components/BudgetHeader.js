import React from 'react'
import './BudgetAppHome.css'

const BudgetHeader = (props) => {
  return (
    <div className="budget-header">
      <h1 className="budget-header__h1">Welcome, {props.customer.name}!</h1>
    </div>
  )
}

export default BudgetHeader