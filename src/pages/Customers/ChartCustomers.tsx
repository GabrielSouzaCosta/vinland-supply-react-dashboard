import React from 'react'
import { Pie } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useStateContext } from '@/context/ContextProvider';
import styled from 'styled-components';
import { P3 } from '@/styles/common/texts';
import useGetThemeColors from '@/hooks/useGetThemeColors';
import { FlexDiv } from '@/styles/common/layout';
import { IoEarth, IoFunnelOutline } from 'react-icons/io5';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import chartPalleteColors, { darkChartPalleteColors } from '@/styles/common/chartPalleteColors';

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartCustomers = () => {
  const { theme } = useStateContext();
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

  const countries = ["Brasil", "Iceland", "Canada", "United Kingdom", "Germany", "Japan", "Australia"];
  const countriesData = {
    labels: countries,
    datasets: [
      {
        label: "Customers by Country",
        data: [1200, 1800, 500, 900, 1100, 750, 950],
        backgroundColor: theme === 'dark' ? darkChartPalleteColors : chartPalleteColors,
        borderColor: colors.white_light+'77',
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
        backgroundColor: [colors.success, colors.warning, colors.danger],
        borderColor: colors.white_light+'77',
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
                // @ts-ignore
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
                // @ts-ignore
                plugins={[ChartDataLabels]}
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
    @media screen and (max-width: 968px) {
      > div{
        width: 100%;
        &:first-child {
          margin-bottom: 15px;
        }
      }
      p {
        font-size: 1.2rem;
      }
      flex-direction: column;
    }
`

export default ChartCustomers