import React, { useState } from "react";
import "./ExpenseForm.css";

const Expenseform = (props) => {
  const [changeText, setChangeText] = useState(" ");
  const [changeAmount, setChangeAmount] = useState(" ");
  const [changedate, setChangedate] = useState(" ");
  //   const [userInput, setUserInput] = useState({
  //     changeText: "",
  //     changeAmount: "",
  //     changedate: "",
  //   });

  const textChangeHandler = (event) => {
    setChangeText(event.target.value);
    //     setUserInput({
    //     ...userInput,
    //     changeText:event.target.value

    //   })

    // setUserInput((prevState) => {
    //   return { ...prevState, changeText: event.target.value };
    // });
  };
  const amountChangeHandeler = (event) => {
    setChangeAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   changeAmount: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, changeAmount: event.target.value };
    // });
  };
  const dateChangeHandler = (event) => {
    setChangedate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   changedate: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, changedate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: changeText,
      amount: +changeAmount,
      date: new Date(changedate),
    };
   props.saveExpenseData(expenseData)
    setChangeText('');
    setChangeAmount('');
    setChangedate('');


  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={changeText} onChange={textChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={changeAmount}
            onChange={amountChangeHandeler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1999-01-01"
            max="2022-07-07"
            value={changedate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
      <button type="button" onClick={props.onCancle}>Cancle</button>
        <button type="submit">Add Expense</button>
      
      </div>
    </form>
  );
};

export default Expenseform;
