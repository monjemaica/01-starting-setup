import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

export const ExpenseList = (props) => {

    const filteredExpenses = props.expenses.filter((e) => e.date.getFullYear().toString() === props.filteredYear)

    let checkExpense = filteredExpenses.length === 0 ? <h2 className='expenses-list__fallback'>No expenses found.</h2> :
        filteredExpenses.map((e =>
            <ExpenseItem
                key={e.id}
                title={e.title}
                amount={e.amount}
                date={e.date}
            ></ExpenseItem>
        ))
    return (
        <ul className='expenses-list'>
            {checkExpense}
        </ul>
    )
}
