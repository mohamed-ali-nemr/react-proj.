import React, { useState } from "react";
import logo from "./logo.svg";
import ExpenseItem from "./components/AllExpenses/ExpenseItem";
import "./App.css";
import Expenses from "./components/AllExpenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2019, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  //const para = document.createElement('p');
  //para.textContent='this is also visable';
  //document.getElementById('root').append(para);

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expenses) => {
    // console.log("In App.js");
    // console.log(expenseFromNewExpense);

    setExpenses((prevExpenses) => {
      return [expenses, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "let's get started"),
  //   React.createElement(Expenses, { expensesArr: expenses })
  // );

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesArr={expenses} />
    </div>
  );
}

export default App;
