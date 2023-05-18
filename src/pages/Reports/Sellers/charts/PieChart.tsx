import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartPalleteColors, { darkChartPalleteColors } from '@/styles/common/chartPalleteColors';
import { useStateContext } from '@/context/ContextProvider';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useGetThemeColors from '@/hooks/useGetThemeColors';
import { User } from '@/@types/user';
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';

ChartJS.register(ArcElement, Tooltip, Legend);

type Props = {
  selectedSellers: User[];
}

const PieChart = ({ selectedSellers } : Props) => {
  const { theme } = useStateContext();
  const { window_width } = useGetWindowDimensions();

  const colors = useGetThemeColors();
  const chartColors = theme === 'dark' ? darkChartPalleteColors : chartPalleteColors;

  const data = {
    labels: selectedSellers.map(item => item.name),
    datasets: [
      {
        label: "Sales by Product",
        data: selectedSellers.map(item => item.sales),
        backgroundColor: chartColors,
        borderColor: colors.white_light+'77',
      }
    ]
  };

  const options: any = {
    responsive: true,
    plugins: {
      datalabels: {
        color: '#F7F7F7',
        font: {
          size: window_width < 768 ? 11 : 13,
          weight: 'bold'
        },
        padding: 6,
        formatter: function(value: number, context: any) {
          let data = context.dataset.data;
          let total = data.reduce((accumulator: number, value: number) => accumulator + value);
          const percentage = (value / total) * 100
          return '%'+percentage.toFixed(1);
        }
      },
      legend: {
        maxHeight: 500,
        align: 'start',
        position: 'bottom',
        labels: {
          padding:  window_width < 768 ? 15 : 20,
          boxWidth: 18,
          color: colors.black,
          font: {
            size: window_width < 768 ? 14 : 16,
          },
        } 
      },
    },
  }

  return (
    <div style={{ maxWidth: '750px', marginBottom: '15px' }}>
      <Pie 
        data={data}
        options={options}
        // @ts-ignore
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default PieChart