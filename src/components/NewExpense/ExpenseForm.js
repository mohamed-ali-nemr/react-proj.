import React, { useState } from "react";
import "./ExpenseForm.css";


function ExpenseForm(prop) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });


  const titleChangeHandler = (eventWeEntered) => {
    setEnteredTitle(eventWeEntered.target.value);
    //technically not work
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: eventWeEntered.target.value,
    // });

    //other solve for3method change handler
    // setUserInput((prevState) => {
    //     return {...prevState,  enteredTitle: eventWeEntered.target.value};
    // });
  };


  const amountChangeHandler = (eventWeEntered) => {
    setEnteredAmount(eventWeEntered.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: eventWeEntered.target.value,
    // });
  };


  const dateChangeHandler = (eventWeEntered) => {
    setEnteredDate(eventWeEntered.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: eventWeEntered.target.value,
    // });
  };


  const submitHandler = (eventWeEntered) => {
    eventWeEntered.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // console.log(expenseData);
    prop.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };


  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Title </label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            step="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={prop.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
