import React, { useEffect } from 'react'
import { Table } from '../../components/tables'
import styled from 'styled-components'
import { FlexDiv } from '../../styles/common/layout'
import useGetThemeColors from '@/hooks/useGetThemeColors'
import { IoStarSharp } from 'react-icons/io5'
import { TableRoundedImage, TableWrapper } from '../../components/tables/styles/tableStyles'

const productsData = [
    {
        name: 'Wine',
        sold: 60400,
        unit_price: '$12.99',
        total_revenue: 784596,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
        name: 'Gorgonzola',
        sold: 29100,
        unit_price: '$25.49',
        total_revenue: 741759,
        rating: 4.2,
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
        name: 'Artesanal Bread',
        sold: 28400,
        unit_price: '$5.99',
        total_revenue: 170116,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1536534028025-68598ea8af44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
    },
    {
        name: 'Craft Beer',
        sold: 25000,
        unit_price: '$7.99',
        total_revenue: 199750,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1536534028025-68598ea8af44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
    },
]

const TableProducts = () => {
    const colors = useGetThemeColors();

    const productsTableColumns = [
        {
            Header: '',
            accessor: 'image',
            Cell: ({value}) => <TableRoundedImage src={value} alt="" />,
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
            Cell: ({ value }) => `$${value.toFixed(2)}` 
        },
        {
            Header: 'Rating',
            accessor: 'rating',
            Cell: ({ value }) => <FlexDiv gapX="10px" style={{ color: value < 4 ? value >= 3.5 ? colors.warning : colors.danger : colors.success }}>
                <IoStarSharp />
                <p>
                    { value }
                </p>
            </FlexDiv>
        },
    ]

    return (
        <Table
            tableData={productsData}
            tableColumns={productsTableColumns}
            CustomWrapper={CustomWrapper}
        />
    )
}

const CustomWrapper = styled(TableWrapper)`
    td:first-child {
        width: 40px;
    }
`

export default TableProducts