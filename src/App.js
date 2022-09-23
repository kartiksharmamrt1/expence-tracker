import React,{useState} from 'react';


import './App.css';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const dummy_expenses = [
  // {id: 'e1', title: "test case", amount: "0", date: new Date(2021, 5, 24)},
  // {id: 'e2', title: "car insurance1", amount: "0", date: new Date(2021, 5, 24)},

  ];

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses( (prevExpenses) =>  {
    return  [expense, ...prevExpenses];
    });

  };


  return (
    <div > 
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
