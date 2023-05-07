import React from 'react'
import { H3 } from '../../styles/common/texts'
import { Table } from '@/components/tables'
import styled from 'styled-components'
import { Div } from '../../styles/common/layout'
import { TableWrapper } from '../../components/tables/styles/tableStyles'

const TopProductsSection = () => {

    const productsData = [
        {
            name: 'Wine',
            sold: 1000,
            unit_price: '$10.99',
            total_revenue: '$10990',
            rating: 4.9,
            image: 'https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
        },
        {
            name: 'Gorgonzola',
            sold: 500,
            unit_price: '$25.49',
            total_revenue: '$12740.50',
            rating: 4.2,
            image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
        },
        {
            name: 'Artesanal Bread',
            sold: 200,
            unit_price: '$5.99',
            total_revenue: '$1198',
            rating: 4.8,
            image: 'https://images.unsplash.com/photo-1536534028025-68598ea8af44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
        },
    ]

    const productsTableColumns = [
        {
            Header: '',
            accessor: 'image',
            Cell: ({value}) => <ProductImage src={value} alt="" />,
        },
        {
            Header: 'Product',
            accessor: 'name',
        },
        {
            Header: 'Sold',
            accessor: 'sold',
        },
        {
            Header: 'Unit Price',
            accessor: 'unit_price',
        },
        {
            Header: 'Total Revenue',
            accessor: 'total_revenue',
        },
        {
            Header: 'Rating',
            accessor: 'rating',
        },
    ]

    return (
        <section>
            <Div mt="40px" mb="20px">
                <H3>
                    Top Selling Products
                </H3>

                <Table
                    showSearchFilter={false}
                    pagination={false}
                    tableData={productsData}
                    tableColumns={productsTableColumns}
                    CustomWrapper={CustomTableWrapper}
                />
            </Div>
        </section>
    )
}

const ProductImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`

const CustomTableWrapper = styled(TableWrapper)`
    td:first-child {
        width: 30px;
    }
`

export default TopProductsSection