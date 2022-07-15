import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");

  
  const filterChangeHandler = (selectfilter) => {
    setFilterYear(selectfilter);
  };

  const filteredYear = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expense={filteredYear}/>

       <ExpensesList items={filteredYear}/>

        {/* {filteredYear.length === 0 && <p>No expense data</p>}
        {filteredYear.length > 0 &&
          filteredYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredYear.length === 0 ? (
          <p>No expense data</p>
        ) : (
          filteredYear.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
      </Card>
    </div>
  );
};

export default Expenses;
