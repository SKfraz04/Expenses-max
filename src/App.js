import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const savedData = [
  {
    id: 'e1',
    title: 'Car Repair',
    amount: 94.12,
    date: new Date(2023, 1, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Fuel',
    amount: 294.67,
    date: new Date(2023,1 , 2),
  },
  {
    id: 'e4',
    title: 'Doctor',
    amount: 450,
    date: new Date(2023,1 , 12),
  },
  {
    id: 'e5',
    title: 'Party',
    amount: 450,
    date: new Date(2023,1 , 14),
  },

];

const App = () => {

  const [expenses, setExpenses] = useState (savedData);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
