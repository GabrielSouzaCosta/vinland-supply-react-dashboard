import React, { useState } from 'react'
import { Breadcrumb, SelectInput } from '@/components/ui'
import Layout from '@/layout'
import { CardContent } from '@/styles/features/cards'
import styled from 'styled-components'
import { ControlledInput, Input, InputContainer } from '@/styles/common/inputs'
import { Div, FlexDiv } from '@/styles/common/layout'
import { ButtonExportExcel, ButtonExportPdf } from '@/styles/common/buttons'
import { P2 } from '@/styles/common/texts'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import SellersList from './SellersList'
import TableSellers from './TableSellers'
import { useForm } from 'react-hook-form'
import { ActionMeta, OnChangeValue } from 'react-select'

export const sellers = [
    {
        id: 1,
        name: 'Thors',
        sales: 63900,
        profits: 512200,
        avatar: '/images/vinland-characters/thors.jpeg'
    },
    {
        id: 2,
        name: 'Askeladd',
        sales: 55000,
        profits: 552000,
        avatar: '/images/vinland-characters/askeladd.jpg'
    },
    {
        id: 3,
        name: 'Thorkell',
        sales: 45000,
        profits: 320000,
        avatar: '/images/vinland-characters/thorkell.png'
    },
    {
        id: 4,
        name: 'Canute',
        sales: 57000,
        profits: 380500,
        avatar: '/images/vinland-characters/canute.jpeg'
    },
    {
        id: 5,
        name: 'Snake',
        sales: 38000,
        profits: 172900,
        avatar: '/images/vinland-characters/snake.jpg'
    },
    {
        id: 6,
        name: 'Einar',
        sales: 29000,
        profits: 240480,
        avatar: '/images/vinland-characters/einar.jpg'
    },
    {
        id: 7,
        name: 'Arnheid',
        sales: 32000,
        profits: 172000,
        avatar: '/images/vinland-characters/arnheid.jpg'
    },
    {
        id: 8,
        name: 'Ylva',
        sales: 51000,
        profits: 152400,
        avatar: '/images/vinland-characters/ylva.jpeg'
    },
    {
        id: 9,
        name: 'Leif Ericson',
        sales: 120000,
        profits: 460000,
        avatar: '/images/vinland-characters/leif.jpeg'
    },
    {
        id: 10,
        name: 'Bjorn',
        sales: 28000,
        profits: 120000,
        avatar: '/images/vinland-characters/bjorn.jpeg'
    },
    {
        id: 11,
        name: 'Thorfinn',
        sales: 90000,
        profits: 420450,
        avatar: 'https://i.pinimg.com/originals/d1/d3/43/d1d343e61eb866b2e3d6baf79671d305.jpg'
    },
    {
        id: 12,
        name: 'Ketil',
        sales: 47000,
        profits: 204310,
        avatar: '/images/vinland-characters/ketil.jpg'
    },
]

type Chart = 'bar' | 'pie';
type ChartOption = {
  label: Chart;
  value: Chart;
}

function UsersPerformance() {
  const { control } = useForm();
  const [ currentChart, setCurrentChart ] = useState<Chart>('bar');

  const charts = [
    {
      label: 'Bar', 
      value: 'bar',
      chart: () => <BarChart />
    },
    {
      label: 'Pie', 
      value: 'pie',
      chart: () => <PieChart />
    },
  ]

  const handleChangeChartType = (option: OnChangeValue<ChartOption, false>) => {
    if (option) {
      setCurrentChart(option.value);
    }
  }

  return (
    <Layout container>
      <Breadcrumb 
        currentLink={'Sellers Performance'}
      />

      <Content>
        <InputContainer label={"Reporting Period"}>s
          <FlexDiv justify="start">
            <ControlledInput 
              type="date"
              name="initial_date"
              control={control}
              placeholder="Initial Date"
            />
            <Divider />
            <ControlledInput 
              type="date"
              name="final_date"
              control={control}
              placeholder="Final Date"
            />
          </FlexDiv>
        </InputContainer>
        
        <InputContainer label={"Visualization Type"}>
          <SelectInput
            options={charts}
            onChange={option => handleChangeChartType(option as ChartOption)}
            defaultValue={charts.find(item => item.value === currentChart)}
          />
        </InputContainer>

        <SellersList />

        <P2 mb="2px" mt="15px">
          Export Report
        </P2>

        <FlexDiv gapX="10px" justify="start">
          <ButtonExportExcel />
          <ButtonExportPdf />
        </FlexDiv>
        
        <Div mt="20px">
          { charts.find(item => item.value === currentChart)?.chart() }
        </Div>

        <TableSellers />

      </Content>
        
    </Layout>
  )
}

const Content = styled(CardContent)`
  .input-container {
    max-width: 400px;
    input {
      width: 100%;
    }
    label {
      font-size: 16px;
    }
  }
`

const Divider = styled.div`
  height: 30px;
  width: 1px;
  background-color: ${p => p.theme.colors.gray_medium};
  margin: 0 10px;
`


export default UsersPerformance