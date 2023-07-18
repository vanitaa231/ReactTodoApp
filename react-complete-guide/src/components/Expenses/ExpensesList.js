import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let ExpenseContent =<p>No expenses found</p>
    if(props.items.length === 0)
    {
      return <h2 className='expenses-list__fallback'>No Expenses Found</h2>;
    }
    
    return(
        <ul className='expenses-list'>
             {props.items.map((expense) => (
             <ExpenseItem key={expense.id} 
             title={expense.title} 
             date={expense.date} 
             amount={expense.amount}/>
             ))}
        </ul>
    )

};
export default ExpensesList;