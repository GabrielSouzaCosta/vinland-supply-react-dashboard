import React from 'react'
import { Breadcrumb } from '../../components/ui'
import Layout from '../../layout'
import TableProducts from './TableProducts'
import { CardContent } from '../../styles/features/cards'
import ProductsCards from './ProductsCards'

function Products() {
  return (
    <Layout container>
        <Breadcrumb 
            currentLink={'Products'}
        />

        <CardContent>
          <ProductsCards />
          <TableProducts />
        </CardContent>

    </Layout>
  )
}

export default Products