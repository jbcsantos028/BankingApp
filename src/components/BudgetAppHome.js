import React from 'react'
import BudgetHeader from './BudgetHeader';
import BudgetBalance from './BudgetBalance';
import AddTransaction from './AddTransaction';
import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';
import './BudgetAppHome.css'
// import MainNavigation from './MainNavigation';

const BudgetAppHome = (props) => {

  
  const addIncomeHandler = income => {
    const incomeData = {
      ...income,
      id: (Math.floor((1 + Math.random()) * 0x1000)).toString()
    }
    props.onAddIncome(incomeData);
  }

  const addExpenseHandler = expense => {
    const expenseData = {
      ...expense,
      id: (Math.floor((1 + Math.random()) * 0x1000)).toString()
    }
    props.onAddExpense(expenseData);
  }

  const totalIncomeHandler = totalIncome => {
    props.onAdjustTotalIncome(totalIncome);
  }

  const totalExpenseHandler = totalExpense => {
    props.onAdjustTotalExpense(totalExpense);
  }

  const totalBudgetHandler = totalBudget => {
    props.onAdjustTotalBudget(totalBudget);
  }  

  return (
    <div className="budget-container">
      <div className="app-wrapper">
        <BudgetHeader customer={props.customer} />
        <BudgetBalance customer={props.customer} customerTotalIncome={props.customerTotalIncome} customerTotalExpense={props.customerTotalExpense} customerTotalBudget={props.customerTotalBudget} />
        <AddTransaction customer={props.customer} owners={props.owners} onAddIncome={addIncomeHandler} onAddExpense={addExpenseHandler} onAdjustTotalIncome={totalIncomeHandler} onAdjustTotalExpense={totalExpenseHandler} onAdjustTotalBudget={totalBudgetHandler} />
        <IncomeList customer={props.customer} customerIncome={props.customerIncome} />
        <ExpenseList customer={props.customer} customerExpense={props.customerExpense} />
      </div>
    </div>
  )
}

export default BudgetAppHome