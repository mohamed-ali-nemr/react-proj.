import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";


const ExpensesList = (props) => {
  if (props.expencesFilt.length === 0) {
    return <h2 className="expenses-list__fallback">NO expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.expencesFilt.map((expence) => (
        <ExpenseItem
          key={expence.id}
          title={expence.title}
          amount={expence.amount}
          date={expence.date}
        />
      ))}
    </ul>
  );
};
export default ExpensesList;
