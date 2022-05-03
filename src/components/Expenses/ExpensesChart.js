import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  // To set up the dataPoints for Chart component, lets create an array filled with objects (every dataPoint is an object)
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  // Loop through all expenses, taken via props
  // Increases the value of a given month by that expense amount

  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  // Communicates with child component Chart
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
