import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleHandler = (e) => {
    setEnteredTitle(e.target.value);
  }

  const amountHandler = (e) => {
    setEnteredAmount(e.target.value);
  }

  const dateHandler = (e) => {
    setEnteredDate(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }

    props.onSaveExpenseDate(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  const cancelHandler = () => {
    props.toggle(false)
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-12-31" max='2022-12-31' value={enteredDate} onChange={dateHandler} />
        </div>
      </div>
        <div className="new_expense__actions">
          <button onClick={cancelHandler}>Cancel</button>
          <button type="submit">Add Expenses</button>
        </div>
    </form>
  )
}

