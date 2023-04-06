import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expences(prop) {
  const [filteredYear, setfilteredYear] = useState("2019");

  const filterChangeHandler = (selectedYear) => {
    // console.log("Expences.js");
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = prop.expensesArr.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expencesFilt={filteredExpenses} />

        {/* <ExpenseItem
          title={prop.expensesArr[0].title}
          amount={prop.expensesArr[0].amount}
          date={prop.expensesArr[0].date}
        />
        <ExpenseItem
          title={prop.expensesArr[1].title}
          amount={prop.expensesArr[1].amount}
          date={prop.expensesArr[1].date}
        />
        <ExpenseItem
          title={prop.expensesArr[2].title}
          amount={prop.expensesArr[2].amount}
          date={prop.expensesArr[2].date}
        />
        <ExpenseItem
          title={prop.expensesArr[3].title}
          amount={prop.expensesArr[3].amount}
          date={prop.expensesArr[3].date}
        /> */}
      </Card>
    </div>
  );
}
export default Expences;
