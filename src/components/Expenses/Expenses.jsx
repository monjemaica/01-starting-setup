import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    
  return (
    <Card className='expenses'>
        {props.expenses.map((e => 
        <ExpenseItem
        key = {e.id}
        title = {e.title}
        amount = {e.amount}
        date = {e.date}
        ></ExpenseItem>
      ))}
    </Card>
  )
}

export default Expenses