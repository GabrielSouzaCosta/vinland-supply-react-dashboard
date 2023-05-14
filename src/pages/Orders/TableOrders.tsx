import React, { useEffect, useState } from 'react'
import { Table } from '../../components/tables'
import { TableWrapper } from '../../components/tables/styles/tableStyles'
import data from './MOCK_DATA.json'
import styled from 'styled-components'
import { useStateContext } from '../../context/ContextProvider'
import useGetThemeColors from '@/hooks/useGetThemeColors';

const TableOrders = () => {
    const colors = useGetThemeColors();

    const sortedByBillingDateData = data.sort(function(a, b) {
        const [dayA, monthA, yearA] = a.billing_date.split('/');
        const [dayB, monthB, yearB] = b.billing_date.split('/');
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateB - dateA;
    })

    const productsTableColumns = [
        {
            Header: 'Order Nº',
            accessor: 'id',
        },
        {
            Header: 'Product',
            accessor: 'product',
        },
        {
            Header: 'Quantity',
            accessor: 'quantity',
            Cell: ({ value }) => <p> { value } un </p>,
        },
        {
            Header: 'Unit Price',
            accessor: 'unit_price',
            Cell: ({ value }) => <p> ${ value } </p>,
        },
        {
            Header: 'Total',
            Cell: ({ row }) => <p> ${ (row.values.unit_price * row.values.quantity).toFixed(2) } </p>,
        },
        {
            Header: 'Payment Method',
            accessor: 'payment_method',
        },
        {
            Header: 'Billing Date',
            accessor: 'billing_date',
        },
        {
            Header: 'Status',
            accessor: 'status',
            Cell: ({ value }) => <p style={{ fontWeight: 600, color: value === 'processed' ? colors.black_extra_light : value === 'shipped' ? colors.warning : colors.success }}> { value } </p>,
        },
        {
            Header: 'Payment Date',
            accessor: 'payment_date',
            Cell: ({value}) => <p> { value ? value : '-' } </p>,
        },
    ]

    return (
        <Table
            tableData={sortedByBillingDateData}
            tableColumns={productsTableColumns}
            CustomWrapper={CustomWrapper}
            showDateFilter
            exportExcel={true}
        />
    )
}

const CustomWrapper = styled(TableWrapper)`
    td:first-child {
        width: 40px;
    }
`

export default TableOrders