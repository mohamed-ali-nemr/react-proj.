import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(prop) {
  //const expenseDate = new Date(2021, 3, 28);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = "294.67";

  // const [title, setTitle] = useState(prop.title);

  // const clickHandler = () => {
  //   setTitle('updated!');
  //   console.log(title);
  // };

  return (
    //wrap div
    <Card className="expense-item">
      <ExpenseDate date={prop.date} />
      <div className="expense-item__description">
        <h2>{prop.title}</h2>
        <div className="expense-item__price">${prop.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}
export default ExpenseItem;
