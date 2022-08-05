import React from 'react';

import Chart from './Chart';

const AccountsChart = props => {
  const chartDataPoints = [
    { label: '100k', value: 0},
    { label: '200k', value: 0},
    { label: '300k', value: 0},
    { label: '400k', value: 0},
    { label: '500k', value: 0},
    { label: '600k', value: 0},
    { label: '700k', value: 0},
    { label: '800k', value: 0},
    { label: '900k', value: 0},
    { label: '1Mil', value: 0}
  ];


  for (const account of props.accounts) {
    let bal = account.balance;
  
    switch(true) {
      case (bal > 0 && bal <= 100000):
        chartDataPoints[0].value += 1;
        break;
      case (bal > 100000 && bal <= 200000):
        chartDataPoints[1].value += 1;
        break;
      case (bal > 200000 && bal <= 300000):
        chartDataPoints[2].value += 1;
        break;
      case (bal > 300000 && bal <= 400000):
        chartDataPoints[3].value += 1;
        break;
      case (bal > 400000 && bal <= 500000):
        chartDataPoints[4].value += 1;
        break;
      case (bal > 500000 && bal <= 600000):
        chartDataPoints[5].value += 1;
        break;
      case (bal > 600000 && bal <= 700000):
        chartDataPoints[6].value += 1;
        break;
      case (bal > 700000 && bal <= 800000):
        chartDataPoints[7].value += 1;
        break;
      case (bal > 800000 && bal <= 900000):
        chartDataPoints[8].value += 1;
        break;
      case (bal > 900000 && bal <= 1000000):
        chartDataPoints[9].value += 1;
        break;
      default:
        break;
    }
  }

  return <Chart dataPoints={chartDataPoints} />
};

export default AccountsChart;