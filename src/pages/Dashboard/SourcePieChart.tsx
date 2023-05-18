import React from 'react'
import { Pie } from 'react-chartjs-2';
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
import { P } from '@/styles/common/texts';
import useGetThemeColors from '@/hooks/useGetThemeColors';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components'


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

const SourcePieChart = () => {
    const colors = useGetThemeColors();
    
    const options = {
        responsive: true,
        plugins: {
          datalabels: {
            color: '#FCFCFC',
            font: {
              size: 16,
              weight: 'bold' as const 
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
            align: 'center' as const,
            position: 'bottom' as const,
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
    };
    
    const revenueSources = ["Online", "In-person", "wholesale"];
    const data = {
      labels: revenueSources,
      datasets: [
        {
          label: "Revenue by source",
          data: [70, 20, 10],
          backgroundColor: [colors.success, colors.warning, colors.danger],
          borderColor: colors.white_light+'77',
        }
      ]
    };
    
    return (
        <PieContainer>
          <P center>
            Revenue by Source(%)
          </P>

          <div>
            <Pie
              options={options}
              data={data}
              // @ts-ignore
              plugins={[ ChartDataLabels ]}
            />
          </div>

        </PieContainer>
    )
}

const PieContainer = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    > div {
        flex: 1;
        display :flex;
        align-items: center;
    }
`

export default SourcePieChart