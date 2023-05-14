import React from 'react'
import Layout from '../../layout'
import { Breadcrumb } from '../../components/ui'
import styled from 'styled-components'
import TopProductsSection from './TopProductsSection'
import CardsContainer from './CardsContainer'
import TotalSales from './TotalSales'


function Dashboard() {
  return (
    <Layout container>
      <Breadcrumb 
        currentLink={'Dashboard'}
      />

      <CardsContainer />

      <Content>
        <TotalSales />
        <TopProductsSection />
      </Content>
    </Layout>
  )
}

const Content = styled.div`
  width: 100%;
  border-radius: 8px;
  background-color: ${p => p.theme.colors.white};
  padding: 20px;
  box-shadow: 1px 1px 12px rgba(30, 30, 30, 0.075);
  section div#chart {
    height: 70vh;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
`

export default Dashboard