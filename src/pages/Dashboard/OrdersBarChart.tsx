import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { colors } from '@/styles/common/theme';
import { useStateContext } from '@/context/ContextProvider';
import { P } from '@/styles/common/texts';
import styled from 'styled-components';
import getHoursUntilCurrentTime from '@/utils/getHoursUntilCurrentTime';
import getRandomNumbersArray from '@/utils/getRandomNumbersArray';
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const OrdersBarChart = () => {
  const { theme } = useStateContext();
  const { window_width } = useGetWindowDimensions();

  const labels = getHoursUntilCurrentTime();
  const ordersData = getRandomNumbersArray(1, 16, labels.length);
  
  const options: any = {
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
          label: 'Orders Today',
          data: ordersData,
          borderColor: theme === 'light' ? colors.primary_dark : colors.primary_light,
          backgroundColor: theme === 'light' ? colors.primary_dark+'99' : colors.primary_light+'99',
          borderWidth: 2,
        },
    ],
  };

  return (
    <LineContainer>
      <P>
        Last Orders
      </P>
      <div>
        <Line
          options={options}
          data={data}
        />
      </div>
    </LineContainer>
  )
}

const LineContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    > div {
        flex: 1;
        display :flex;
        align-items: center;
    }
`

export default OrdersBarChart