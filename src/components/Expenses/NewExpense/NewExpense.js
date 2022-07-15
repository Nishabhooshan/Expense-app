import React,{useState} from "react";
import "./NewExpense.css";
import Expenseform from "./Expenseform";
const NewExpense = (props) => {
  const [editingButton, setEditingButton]=useState(false)
  const newExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
   props.onExpenseNewData(expenseData)
   setEditingButton(false)
  };

  const startEditingHandler = () =>{
    setEditingButton(true)
  }
  const stopEditing =() =>{
    setEditingButton(false)
  }
  return (
    <div className="new-expense">
    { !editingButton && <button onClick={startEditingHandler}>Add New Expense</button>}
      { editingButton && < Expenseform saveExpenseData={newExpenseDataHandler} onCancle={stopEditing} />}
    </div>
  );
};

export default NewExpense;
