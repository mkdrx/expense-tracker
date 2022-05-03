import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    /*  Communicates with parent component Expenses.js passing expenseData via props through handler onAddExpense */
    props.onAddExpense(expenseData);
    setIsEditing(false); // Sets state to false after submit
  };

  // Handler when editing
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // Handler when not editing - communicates with child component ExpenseForm
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  // Below: if isEditing is not true then it will show a button with Add New Expense
  // otherwise, it will show a button to Cancel or Add Expense (communicating with child component ExpenseForm through onCancel)

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
