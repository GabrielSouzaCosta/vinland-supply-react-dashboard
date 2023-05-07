import React from 'react'
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { colors } from '@/styles/common/theme';
import { sellers } from '..';
import chartPalleteColors from '../../../../styles/common/chartPalleteColors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

  const labels = sellers.map(item => item.name);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  

  const data = {
    labels,
    datasets: [
        {
          label: 'Sales',
          data: sellers.map(item => item.sales),
          borderColor: chartPalleteColors,
          backgroundColor: chartPalleteColors.map(item => item+'88'),
          borderWidth: 3,
          lineTension: 0.8,
          cubicInterpolationMode: 'monotone'
        },
    ],
  };

  return (
    <div>
      <Bar
        options={options}
        data={data}
      />
    </div>
  )

}

export default BarChart