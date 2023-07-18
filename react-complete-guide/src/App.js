import React, { useState } from 'react';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

 
  const DUMMY_EXPENSES=[
    {
      id : 'e1',
      date: new Date(2023, 7, 4),
      title : "Car Insurance",
      amount : 290.30,
    },
    {
      id : 'e2',
      date: new Date(2023, 7, 4),
      title : "Home Insurance",
      amount : 290.30,
    },
    {
      id : 'e3',
      date: new Date(2023, 7, 4),
      title : "Car Insurance",
      amount : 290.30,
    },
    {
      id : 'e4',
      date: new Date(2023, 7, 4),
      title : "Car Insurance",
      amount : 290.30,
    },
    
  ];
const App = () => {
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
     setExpenses((prevExpenses)=>{
      return [expense, ...prevExpenses];

    });
   };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
    
  );
}

export default App;
