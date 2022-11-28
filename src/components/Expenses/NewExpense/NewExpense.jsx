import React from 'react'
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm';
import { v4 as uuidv4 } from 'uuid';

export const NewExpense = (props) => {

  const saveExpenseDataHandler = (e) => {
     const expenseData = {
      ...e,
      id:uuidv4
     }
     props.onAddExpense(expenseData);
  };

  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseDate = {saveExpenseDataHandler}/>
    </div>
  )
}
