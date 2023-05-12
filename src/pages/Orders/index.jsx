import React from 'react'
import { Breadcrumb } from '../../components/ui'
import Layout from '../../layout'
import TableOrders from './TableOrders'
import { CardContent } from '@/styles/features/cards'
import Cards from './Cards'
import LastOrdersBarChart from './LastOrdersBarChart'

function Orders() {
  return (
    <Layout container>
        <Breadcrumb 
            currentLink={'Orders'}
        />

        <CardContent>
          <Cards />
          <LastOrdersBarChart />
          <TableOrders />
        </CardContent>

    </Layout>
  )
}

export default Orders