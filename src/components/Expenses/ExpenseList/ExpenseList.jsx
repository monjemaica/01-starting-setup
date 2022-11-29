import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

export const ExpenseList = (props) => {


    let checkExpense = props.filteredYear.length === 0 ? <h2 className='expenses-list__fallback'>No expenses found.</h2> :
        props.filteredYear.map((e =>
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
