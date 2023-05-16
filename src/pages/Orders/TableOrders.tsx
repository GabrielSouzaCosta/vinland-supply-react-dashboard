import React, { useEffect, useState } from 'react'
import { Table } from '../../components/tables'
import { TableWrapper } from '../../components/tables/styles/tableStyles'
import data from './MOCK_DATA.json'
import styled from 'styled-components'
import { useStateContext } from '../../context/ContextProvider'
import useGetThemeColors from '@/hooks/useGetThemeColors';
import { Label, Value } from '@/components/tables/components/MobileView/styles'

const TableOrders = () => {
    const colors = useGetThemeColors();

    const sortedByBillingDateData = data.sort(function(a, b) {
        const [dayA, monthA, yearA] = a.billing_date.split('/');
        const [dayB, monthB, yearB] = b.billing_date.split('/');
        const dateA = new Date(Number(yearA), Number(monthA) - 1, Number(dayA));
        const dateB = new Date(Number(yearB), Number(monthB) - 1, Number(dayB));
        return Number(dateB) - Number(dateA);
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

    const MobileCardInner = ({ data, labels }) => {
        const filter_data = Object.entries(data);
        const secondary_data = filter_data.map(([label, value]) => value);

        return (
            <>
                {secondary_data.map((value, index) => (
                        <div style={{ marginBottom: '5px' }}>
                            <Label>
                                { labels[index].Header }: 
                                {" "}
                                <Value>
                                    { value }
                                </Value>
                            </Label>
                        </div>
                    ))
                }
            </>
        )
    }


    return (
        <Table
            tableData={sortedByBillingDateData}
            tableColumns={productsTableColumns}
            CustomWrapper={CustomWrapper}
            showDateFilter
            exportExcel={() => {}}
            MobileCardInner={MobileCardInner}
        />
    )
}

const CustomWrapper = styled(TableWrapper)`
    td:first-child {
        width: 40px;
    }
`

export default TableOrders