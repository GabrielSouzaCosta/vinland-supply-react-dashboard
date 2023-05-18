import React from 'react'
import Layout from '../../layout'
import { Breadcrumb } from '../../components/ui'
import styled from 'styled-components'
import CardsContainer from './CardsContainer'
import TotalSalesBarChart from './TotalSalesBarChart'
import SourcePieChart from './SourcePieChart'
import OrdersBarChart from './OrdersBarChart'
import TopSellingProducts from './TopSellingProducts'


function Dashboard() {
  return (
    <Layout container>
      <Breadcrumb 
        currentLink={'Dashboard'}
      />

      <CardsContainer />

      <Content>
        <Charts>
          <TotalSalesBarChart />  
          <SourcePieChart />
          <OrdersBarChart />
          <TopSellingProducts />
        </Charts>
      </Content>
    </Layout>
  )
}

const Content = styled.main`
  width: 100%;
`

const Charts = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  justify-content: space-between;
  gap: 10px;
  > section {
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
    padding: 20px;
    box-shadow: 1px 1px 12px rgba(30, 30, 30, 0.075);
    p {
      margin-bottom: 20px;
      font-size: 24px;
      font-weight: 600;
      color: ${p => p.theme.colors.gray_dark};
    }
  }
  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    section {
      width: 100%;
    }
  }
 
`

export default Dashboard