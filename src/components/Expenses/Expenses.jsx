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

  const expenses = props.expenses;

  return (
    <div>
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onSelectedYear={filterHandler} />
        <ExpenseList expenses = {expenses} filteredYear = {filteredYear}/>
      </Card>
    </div>
  )
}

export default Expenses