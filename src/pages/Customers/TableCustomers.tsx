import React from 'react'
import styled from 'styled-components'
import { TableRoundedImage, TableWrapper } from '@/components/tables/styles/tableStyles'
import data from './MOCK_DATA.json'
import { FlexDiv } from '@/styles/common/layout'
import { IoPersonOutline, IoStarSharp } from 'react-icons/io5'
import { colors } from '@/styles/common/theme'
import { Table } from '@/components/tables'
import { CardTitle, CenteredRoundedImage, Label, Value } from '@/components/tables/components/MobileView/styles'
import { Column } from 'react-table'
import { Customer } from '@/@types/customer'

const TableCustomers = () => {

    const productsTableColumns: Column<Customer>[] = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: <IoPersonOutline size={16} />,
            accessor: 'image',
            Cell: ({value}) => <TableRoundedImage src={value} alt="" />,
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
            Cell: ({value}) => 
                <>
                    {'$'+ value.toFixed(2)}
                </>,
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
    ] as Column<Customer>[];

    interface MobileCardProps {
        data: Customer
        labels: Column<Customer>[];
    }

    const MobileCardInner = ({ data, labels }: MobileCardProps) => {
        const filter_data = Object.entries(data).filter(([ label ]) => !['image', 'name', 'id'].includes(label));
        const secondary_data = filter_data.map(([label, value]) => value);
        const filtered_labels = labels?.filter((label) => {
            const accessor = String(label?.accessor);
            return accessor && !['image', 'name', 'id'].includes(accessor);
        });

        return (
            <>
                <CenteredRoundedImage 
                    src={data.image}
                    alt=""
                    loading="lazy"
                />
                <CardTitle>
                    { data.name }
                </CardTitle>
                {secondary_data.map((value, index) => (
                        <div style={{ marginBottom: '5px' }}>
                            <Label>
                                { String(filtered_labels[index].Header) }: 
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
            tableData={data}
            tableColumns={productsTableColumns}
            exportExcel={() => {}}
            CustomWrapper={CustomWrapper}
            MobileCardInner={MobileCardInner}
        />
    )
}

const CustomWrapper = styled(TableWrapper)`
    td:first-child {
        width: 40px;
    }
`

export default TableCustomers