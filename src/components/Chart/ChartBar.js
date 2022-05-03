import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  // Calculates the value divided the max value to give the percentage that the bar needs to be filled
  let barFillHeight = "0%"; // as a string since its going to be used as a css style

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    // Bunch of div responsible of rendering the chart bars correctly
    <div className="chart-bar">
      <div className="chart-bar__inner">
        {/* Height is responsible for how much its the bar filled, and that depends on the value, calculated above */}
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
