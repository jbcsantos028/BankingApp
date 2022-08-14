import React from 'react'
import BudgetHeader from './BudgetHeader';
import BudgetBalance from './BudgetBalance';
import AddTransaction from './AddTransaction';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import './BudgetAppHome.css'
// import MainNavigation from './MainNavigation';

const BudgetAppHome = (props) => {
  console.log(props.customer);
  console.log(props.accountType);
  return (
    <div>
      <div className="budget-container">
        <div className="app-wrapper">
          <BudgetHeader customer={props.customer} />
          <BudgetBalance customer={props.customer} />
          <AddTransaction />
          <IncomeList />
          <ExpenseList />
        </div>
      </div>
    </div>
  )
}

export default BudgetAppHome