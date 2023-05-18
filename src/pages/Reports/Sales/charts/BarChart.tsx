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
import { colors } from '@/styles/common/theme'
import { useStateContext } from '@/context/ContextProvider';
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';

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
  const { window_width } = useGetWindowDimensions();

  const labels = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const options: any = {
    responsive: true,
    plugins: {
        legend: {
          position: 'bottom',
          labels: {
              color: theme === 'light' ? colors.black : colors.white,
              padding: 20,
              boxWidth: 15,
              boxHeight: 15,
              useBorderRadius: true,
              borderRadius: 2,
              font: {
                size: 16
              }
          }
        },
    },

    scales: {
        x: {
          ticks: {
            color: theme === 'light' ? colors.gray_dark : colors.gray_extra_light,
            font: {
              size: window_width < 768 ? 10 : 14
            }
          }
        },
        y: {
          ticks: {
            color: theme === 'light' ? colors.gray_dark : colors.gray_extra_light,
            callback: function(value: number) {
                return '$' + value;
            }
          }
        }
    }
  };

  const data = {
    labels,
    datasets: [
        {
        label: 'March/2023',
        data: [1000, 1200, 800, 700, 200, 100, 2000, 300, 450, 700, 2300, 1800],
        borderColor: theme === 'light' ? colors.black_extra_light : colors.gray_light,
        backgroundColor: theme === 'light' ? colors.black_extra_light+'99' : colors.gray_light+'99',
        borderWidth: 3,
        lineTension: 0.8,
        cubicInterpolationMode: 'monotone'
        },
        {
        label: 'April/2023',
        data: [400, 800, 1500, 450, 200, 1200, 1600, 2000, 1100, 1200, 1800, 3000],
        borderColor: theme === 'light' ? colors.primary_dark : colors.primary_light,
        backgroundColor: theme === 'light' ? colors.primary_dark+'99' : colors.primary_light+'99',
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