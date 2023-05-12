import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import chartPalleteColors from '@/styles/common/chartPalleteColors';
import { useStateContext } from '@/context/ContextProvider';
import { H2 } from '@/styles/common/texts';
import styled from 'styled-components';
import { darkChartPalleteColors } from '../../styles/common/chartPalleteColors';
import { P3 } from '../../styles/common/texts';
import useGetThemeColors from '../../hooks/useGetThemeColors';
import { FlexDiv } from '../../styles/common/layout';
import { IoEarth, IoFunnelOutline } from 'react-icons/io5';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCustomers = () => {
  const { theme } = useStateContext();
  const colors = useGetThemeColors();

  const options = {
    responsive: true,
    datalabels: {
      color: '#FCFCFC',
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
    plugins: {
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
  };

  const countries = ["Brasil", "Iceland", "Canada", "United Kingdom", "Germany", "Japan", "Australia"];
  const countriesData = {
    labels: countries,
    datasets: [
      {
        label: "Customers by Country",
        data: [1200, 1800, 500, 900, 1100, 750, 950],
        backgroundColor: theme === 'dark' ? darkChartPalleteColors : chartPalleteColors
      }
    ]
  };

  const revenueSources = ["Online", "In-person", "wholesale"];
  const revenueSourcesData = {
    labels: revenueSources,
    datasets: [
      {
        label: "Revenue by source",
        data: [70, 20, 10],
        backgroundColor: [colors.success, colors.warning, colors.danger] 
      }
    ]
  };


  return (
    <Content>
        <div>
            <FlexDiv gapX="5px" mb="20px">
                <IoEarth
                    size={30}
                    color={colors.success}
                />
                <P3>
                    Customers By Country(%)
                </P3>
            </FlexDiv>
            <Pie 
                data={countriesData}
                options={options}
                plugins={[ChartDataLabels]}
            />
        </div>
        <div>
            <FlexDiv gapX="5px" mb="20px">
                <IoFunnelOutline
                    size={30}
                    color={colors.blue}
                />
                <P3>
                    Revenue by source(%)
                </P3>
            </FlexDiv>
            <Pie 
                data={revenueSourcesData}
                options={options}
            />
        </div>
    </Content>
  )
}

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    > div {
        width: 48%;
    }
    p {
        text-align: center;
        font-weight: 600;
        font-size: 1.5rem;
    }
`

export default ChartCustomers