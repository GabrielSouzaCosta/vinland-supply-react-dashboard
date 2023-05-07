import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartPalleteColors from '../../../../styles/common/chartPalleteColors';
import { sellers } from '..';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: sellers.map(item => item.name),
    datasets: [
      {
        label: "Sales by Product",
        data: sellers.map(item => item.sales),
        backgroundColor: chartPalleteColors
      }
    ]
  };

  return (
    <div style={{ maxWidth: '700px' }}>
      <Pie 
        data={data}
      />
    </div>
  )
}

export default PieChart