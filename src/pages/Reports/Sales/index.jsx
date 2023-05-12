import React, { useState } from 'react'
import Select from 'react-select'
import { Breadcrumb, SelectInput } from '../../../components/ui'
import Layout from '../../../layout'
import { Input, InputContainer } from '../../../styles/common/inputs'
import { H1, H2, P, P2, P3 } from '../../../styles/common/texts'
import { CardContent } from '../../../styles/features/cards'
import styled from 'styled-components'
import { Div, FlexDiv } from '../../../styles/common/layout'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import { ButtonExportExcel, ButtonExportPdf } from '../../../styles/common/buttons'

function Sales() {
  const [ currentChart, setCurrentChart ] = useState('bar');

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

  function handleChangeChartType(option) {
    setCurrentChart(option.value);
  }

  return (
    <Layout container>
      <Breadcrumb 
        currentLink={'Sales'}
      />

      <Content>
        <InputContainer label={"Reporting Period"}>
          <FlexDiv justify="start">
            <Input 
              type="date"
            />
            <Divider />
            <Input 
              type="date"
            />
          </FlexDiv>
        </InputContainer>
        
        <InputContainer label={"Visualization Type"}>
          <SelectInput
            options={charts}
            onChange={handleChangeChartType}
            defaultValue={charts.find(item => item.value === currentChart)}
          />
        </InputContainer>

        <P2 mb="2px">
          Export Report
        </P2>
        <FlexDiv gapX="10px" justify="start">
          <ButtonExportExcel />
          <ButtonExportPdf />
        </FlexDiv>

        <Div>
          <H2 m="20px 0">
            Sales($)
          </H2>
          { charts.find(item => item.value === currentChart).chart() }
        </Div>
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

export default Sales