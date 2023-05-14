import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartPalleteColors, { darkChartPalleteColors } from '../../../../styles/common/chartPalleteColors';
import { sellers } from '..';
import { useStateContext } from '../../../../context/ContextProvider';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import useGetThemeColors from '../../../../hooks/useGetThemeColors';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { theme } = useStateContext();
  const colors = useGetThemeColors();
  const chartColors = theme === 'dark' ? darkChartPalleteColors : chartPalleteColors;

  const data = {
    labels: sellers.map(item => item.name),
    datasets: [
      {
        label: "Sales by Product",
        data: sellers.map(item => item.sales),
        backgroundColor: chartColors
      }
    ]
  };

  const options = {
    plugins: {
      datalabels: {
        color: '#F7F7F7',
        font: {
          size: 14,
          weight: 'bold'
        },
        padding: 6,
        formatter: function(value, context) {
          let data = context.dataset.data;
          let total = data.reduce((accumulator, value) => accumulator + value) - value;
          const percentage = (value / total) * 100
          return '%'+percentage.toFixed(1);
        }
      },
      legend: {
        align: 'center',
        position: 'bottom',
        labels: {
          padding: 20,
          boxWidth: 18,
          color: colors.black,
          font: {
            size: 16,
          },
        } 
      },
    },
  }

  return (
    <div style={{ maxWidth: '700px' }}>
      <Pie 
        data={data}
        options={options}
        plugins={[ChartDataLabels]}
      />
    </div>
  )
}

export default PieChart