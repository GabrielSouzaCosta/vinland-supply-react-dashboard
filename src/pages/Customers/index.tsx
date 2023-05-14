import React from 'react'
import { Breadcrumb } from '@/components/ui'
import Layout from '@/layout'
import { CardContent } from '@/styles/features/cards'
import Cards from './Cards'
import ChartCustomers from './ChartCustomers'
import TableCustomers from './TableCustomers'

function Customers() {
  return (
    <Layout container>
        <Breadcrumb 
            currentLink={'Customers'}
        />

        <CardContent>
          <Cards />
          <ChartCustomers />
          <TableCustomers />
        </CardContent>

    </Layout>
  )
}

export default Customers