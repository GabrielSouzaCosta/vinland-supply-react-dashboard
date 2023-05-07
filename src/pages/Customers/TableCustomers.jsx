import React from 'react'
import { Table } from '../../components/tables'
import styled from 'styled-components'
import { TableWrapper } from '../../components/tables/styles/tableStyles'
import data from './MOCK_DATA.json'
import { FlexDiv } from '../../styles/common/layout'
import { IoPersonOutline, IoStarSharp } from 'react-icons/io5'
import { colors } from '@/styles/common/theme'
import { P } from '../../styles/common/texts'

const TableCustomers = () => {

    const productsTableColumns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: <IoPersonOutline size={16} />,
            accessor: 'image',
            Cell: ({value}) => <ProductImage src={value} alt="" />,
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Email',
            accessor: 'email',
        },
        {
            Header: 'Phone',
            accessor: 'phone',
        },
        {
            Header: 'City',
            accessor: 'city',
        },
        {
            Header: 'Products bought',
            accessor: 'products_bought',
        },
        {
            Header: 'Purchase Total',
            accessor: 'purchase_total',
            Cell: ({ value }) => `$${ value.toFixed(2) }`,
        },
        {
            Header: 'Review',
            accessor: 'review',
            Cell: ({value}) => <FlexDiv gapX="10px" style={{ color: value < 4 ? value >= 3.5 ? colors.warning : colors.danger : colors.success }}>
                <IoStarSharp />
                <p>
                    { value }
                </p>
            </FlexDiv>,
        },
    ]

    return (
        <Table
            tableData={data}
            tableColumns={productsTableColumns}
            exportExcel={true}
            CustomWrapper={CustomWrapper}
        />
    )
}


const ProductImage = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
`

const CustomWrapper = styled(TableWrapper)`
    td:first-child {
        width: 40px;
    }
`

export default TableCustomers