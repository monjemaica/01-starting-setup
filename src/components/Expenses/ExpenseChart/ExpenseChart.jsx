import React from 'react';
import {Chart} from '../../Chart/Chart'

export const ExpenseChart = (props) => {
    const chartData = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dev', value: 0}
    ];

    for(const e of props.expense){
        const expenseMonth = e.date.getMonth();
        chartData[expenseMonth].value += e.amount;
    }

  return (
    <Chart data={chartData}/>
  )
}
