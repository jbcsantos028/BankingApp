import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = props => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  //const totalMaximum = Math.max(...dataPointValues);
  let total = dataPointValues.reduce(function(a, b){
    return a + b;
}, 0);
  

  return <div className="chart">
    {props.dataPoints.map(datapoint => <ChartBar key={datapoint.label} total={total} value={datapoint.value} label={datapoint.label} />)}
  </div>
};

export default Chart;