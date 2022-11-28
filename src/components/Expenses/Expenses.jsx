import React, { useState } from 'react'
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import './ExpenseFilter.css';
import { ExpenseFilter } from './ExpenseFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterHandler = (e) => {
    setFilteredYear(e);
  };

  const filteredExpenses = props.expenses.filter((e) => e.date.getFullYear().toString() === filteredYear)
  return (
    <div>
      <Card className='expenses'>
      <ExpenseFilter selected={filteredYear} onSelectedYear= {filterHandler}/>
        {filteredExpenses.map((e =>
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  )
}

export default Expenses