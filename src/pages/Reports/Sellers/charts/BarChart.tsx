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
import chartPalleteColors, { darkChartPalleteColors } from '../../../../styles/common/chartPalleteColors';
import { useStateContext } from '../../../../context/ContextProvider';

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
  const { theme } = useStateContext();
  const chartColors = theme === 'dark' ? darkChartPalleteColors : chartPalleteColors;

  const labels = sellers.map(item => item.name);
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme === 'light' ? colors.gray_dark : colors.gray_extra_light,
        }
      },
      y: {
        ticks: {
          color: theme === 'light' ? colors.gray_dark : colors.gray_extra_light,
        }
      }
    }
  };

  const data = {
    labels,
    datasets: [
        {
          label: 'Sales',
          data: sellers.map(item => item.sales),
          borderColor: chartColors,
          backgroundColor: chartColors.map(item => item+'88'),
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