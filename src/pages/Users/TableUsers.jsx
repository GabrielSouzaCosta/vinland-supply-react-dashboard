import React from 'react'
import { Table } from '../../components/tables'
import styled from 'styled-components'
import { IoPersonOutline } from 'react-icons/io5'
import { TableWrapper } from '../../components/tables/styles/tableStyles'
import { P } from '../../styles/common/texts'

const TableUsers = ({
    users
}) => {

    const productsTableColumns = [
        {
            Header: <IoPersonOutline />,
            accessor: 'avatar',
            Cell: ({value}) => <ProductImage src={value} alt="" />,
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Username',
            accessor: 'username',
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
            Header: 'Address',
            accessor: 'address',
        },
        {
            Header: 'User Type',
            accessor: 'user_type',
            Cell: ({ value }) => <P style={{ textTransform: 'uppercase' }}> { value } </P>
        },
    ]

    return (
        <Table
            tableData={users}
            tableColumns={productsTableColumns}
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

export default TableUsers