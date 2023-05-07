import React from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { sellers } from '.'
import { Table } from '../../../components/tables'
import styled from 'styled-components'
import { P2 } from '../../../styles/common/texts'
import { TableWrapper } from '../../../components/tables/styles/tableStyles'

const TableSellers = () => {
    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: <IoPersonOutline size={18} />,
            accessor: 'avatar',
            Cell: ({value}) => <ProductImage src={value} alt="" />,
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Sales',
            accessor: 'sales',
            Cell: ({value}) => <P2> { value } sold </P2>,
        }
    ]

    return (
        <Table
            tableData={sellers}
            tableColumns={columns}
            showSearchFilter={false}
            pagination={false}
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
    margin-top: 40px;
    td:first-child, td:nth-child(2) {
        width: 40px;
    }
`

export default TableSellers