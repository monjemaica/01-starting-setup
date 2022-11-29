import React, { useState } from 'react'
import './NewExpense.css';
import { ExpenseForm } from './ExpenseForm/ExpenseForm';
import { v4 as uuidv4 } from 'uuid';

export const NewExpense = (props) => {
  const [isToggle, setIsToggle] = useState(false);
  const saveExpenseDataHandler = (e) => {
     const expenseData = {
      ...e,
      id:uuidv4
     }
     props.onAddExpense(expenseData);
  };

  const isToggleHandler = () => {
    setIsToggle(true);
  }

  return (
    <div className='new-expense'>
        {isToggle ? <ExpenseForm toggle={setIsToggle} onSaveExpenseDate = {saveExpenseDataHandler}/> : <button onClick={isToggleHandler}>Add Change</button>}
    </div>
  )
}
