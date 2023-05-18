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
import chartPalleteColors, { darkChartPalleteColors } from '@/styles/common/chartPalleteColors';
import { useStateContext } from '@/context/ContextProvider';
import { User } from '@/@types/user';
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';
import { Div } from '@/styles/common/layout';

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

type Props = {
  selectedSellers: User[];
}

const BarChart = ({ selectedSellers } : Props) => {
  const { theme } = useStateContext();
  const { window_width } = useGetWindowDimensions();

  const chartColors = theme === 'dark' ? darkChartPalleteColors : chartPalleteColors;

  const labels = selectedSellers.map(item => item.name);
  
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
          font: {
            size: window_width < 768 ? 11 : 14
          }
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
          data: selectedSellers.map(item => item.sales),
          borderColor: chartColors,
          backgroundColor: chartColors.map(item => item+'88'),
          borderWidth: 3,
          lineTension: 0.8,
          cubicInterpolationMode: 'monotone'
        },
    ],
  };

  return (
    <Div mb="15px">
      <Bar
        options={options}
        data={data}
      />
    </Div>
  )

}

export default BarChart