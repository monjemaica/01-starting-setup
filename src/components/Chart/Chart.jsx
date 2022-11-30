import React from 'react'
import { ChartBar } from './CharBar/ChartBar'
import './Chart.css';
export const Chart = (props) => {
    const dataValue = props.data.map(e => e.value);
    const max = Math.max(...dataValue);

    return (
        <div className="chart">
            {props.data.map(e => <ChartBar 
            key={e.id} 
            value={e.value} 
            maxValue={max} 
            label={e.label} />)}
        </div>
    )
}
