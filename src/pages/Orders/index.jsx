import React from 'react'
import { Breadcrumb } from '../../components/ui'
import Layout from '../../layout'
import TableOrders from './TableOrders'
import { CardContent } from '@/styles/features/cards'
import Cards from './Cards'

function Orders() {
  return (
    <Layout container>
        <Breadcrumb 
            currentLink={'Orders'}
        />

        <CardContent>
          <Cards />
          <TableOrders />
        </CardContent>

    </Layout>
  )
}

export default Orders