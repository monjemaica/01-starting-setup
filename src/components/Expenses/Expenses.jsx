import React, { useState } from 'react'
import Card from '../UI/Card';
import './Expenses.css';
import { ExpenseFilter } from './ExpenseFilter/ExpenseFilter';
import './ExpenseFilter/ExpenseFilter.css';
import { ExpenseList } from './ExpenseList/ExpenseList';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022')

  const filterHandler = (e) => {
    setFilteredYear(e);
  };

  const filteredExpenses = props.expenses.filter((e) => e.date.getFullYear().toString() === filteredYear)

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onSelectedYear={filterHandler} />
        <ExpenseList filteredYear = {filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses