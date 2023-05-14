import React from 'react';
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
import { useStateContext } from '@/context/ContextProvider';
import { H2 } from '../../styles/common/texts';
import styled from 'styled-components';
import getHoursUntilCurrentTime from '@/utils/getHoursUntilCurrentTime';
import getRandomNumbersArray from '@/utils/getRandomNumbersArray';

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

const LastOrdersBarChart = () => {
  const { theme } = useStateContext();

  const labels = getHoursUntilCurrentTime();
  const ordersData = getRandomNumbersArray(1, 16, labels.length);
  
  const options = {
    responsive: true,
    plugins: {
        legend: {
          display: false
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
          label: 'Orders Today',
          data: ordersData,
          borderColor: theme === 'light' ? colors.primary_dark : colors.primary_light,
          backgroundColor: theme === 'light' ? colors.primary_dark+'99' : colors.primary_light+'99',
          borderWidth: 3,
          lineTension: 0.8,
          cubicInterpolationMode: 'monotone'
        },
    ],
  };

  return (
    <Content>
      <H2>
        Orders Today
      </H2>
      <div id="chart">
        <Bar
          options={options}
          data={data}
        />
      </div>
    </Content>
  )
}

const Content = styled.div`
  #chart {
    margin: 20px 0 40px 0;
  }
`

export default LastOrdersBarChart