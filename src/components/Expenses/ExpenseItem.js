import React , {useState}  from "react";
import "./ExpenseItem.css";
import Expensedate from "./Expensedate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title,setTitle]= useState(props.title);
  const clickHandler = () =>{
    setTitle('Updated')
console.log(title)
  }
  return (
    <Card className="expense-item">
        <Expensedate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click here</button>
    </Card>
  );
};

export default ExpenseItem;
