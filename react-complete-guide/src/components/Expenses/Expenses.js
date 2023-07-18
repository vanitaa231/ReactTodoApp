import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
const Expenses = (props) => {

  const [filteredYear,setFilteredYear] = useState('2023');
  const changeFilterHandler = (selectedYear) =>{
      setFilteredYear(selectedYear);
    };
    const filterExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;
    });
  
 

    return(
    <div>
      
      <Card className="expenses">
        <ExpensesFilter selected = {filteredYear} onChangeFilter={changeFilterHandler}/>
        <ExpensesChart expenses={filterExpenses}/>
        <ExpensesList items={filterExpenses}/>
      </Card>
    </div>
)};
export default Expenses;