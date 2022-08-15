import React, { useState } from 'react'
import './BudgetAppHome.css'


import ErrorModalBudgetApp from './ErrorModalBudgetApp';

const AddTransaction = (props) => {
  const [incomeDescription, setIncomeDescription] = useState('');
  const [incomeAmount, setIncomeAmount] = useState('');

  const [expenseDescription, setExpenseDescription] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const [error, setError] = useState();

  const incomeDescriptionHandler = (e) => {
    setIncomeDescription(e.target.value);
  };

  const incomeAmountHandler = (e) => {
    setIncomeAmount(e.target.value);
  };

  const expenseDescriptionHandler = (e) => {
    setExpenseDescription(e.target.value);
  };

  const expenseAmountHandler = (e) => {
    setExpenseAmount(e.target.value);
  };

  const submitIncomeHandler = (e) => {
    e.preventDefault();

    const addToIncome = {
      description: incomeDescription,
      amount: +incomeAmount
  };

    setError({
      title: 'Confirmation Message',
      message: 'Adding of item was successful.'
  });
    props.onAddIncome(addToIncome);
    setIncomeDescription('');
    setIncomeAmount('');

    props.onAdjustTotalIncome(props.customer.totalIncome += (+incomeAmount));
    props.onAdjustTotalBudget(props.customer.totalBudget += (+incomeAmount));
  }

  const errorHandler = () => {
    setError(null);
};

const submitExpenseHandler = (e) => {
  e.preventDefault();

  const addToExpense = {
    description: expenseDescription,
    amount: +expenseAmount
};

  setError({
    title: 'Confirmation Message',
    message: 'Adding of item was successful.'
});
  props.onAddExpense(addToExpense);
  setExpenseDescription('');
  setExpenseAmount('');

  props.onAdjustTotalExpense(props.customer.totalExpense += (+expenseAmount));
  props.onAdjustTotalBudget(props.customer.totalBudget -= (+expenseAmount));
}

  return (
    <div className="form-wrapper">
      {error && <ErrorModalBudgetApp title={error.title} message={error.message} onConfirm={errorHandler} customer={props.customer} owners={props.owners} />}
      <form onSubmit={submitIncomeHandler}>
        <div className="input-group income">
          <input type="text" placeholder="Add Income..." autcomplete="off" value={incomeDescription} onChange={incomeDescriptionHandler} />
          <input type="number" placeholder="Amount" autcomplete="off" value={incomeAmount} onChange={incomeAmountHandler} />
          <input type="submit" value="Submit" />
        </div>
      </form>
      <form onSubmit={submitExpenseHandler}>
        <div className="input-group expense">
          <input type="text" placeholder="Add Expense..." autcomplete="off" value={expenseDescription} onChange={expenseDescriptionHandler} />
          <input type="number" placeholder="Amount" autcomplete="off" value={expenseAmount} onChange={expenseAmountHandler} />
          <input type="submit" value="Submit" />
        </div>
    </form>
    </div>
  )
}

export default AddTransaction