import React from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { sellers } from '.'
import { Table } from '../../../components/tables'
import styled from 'styled-components'
import { P2 } from '../../../styles/common/texts'
import { TableRoundedImage, TableWrapper } from '../../../components/tables/styles/tableStyles'
import { CardTitle, CenteredRoundedImage, Label, Value } from '@/components/tables/components/MobileView/styles'
import { Div } from '@/styles/common/layout'

const TableSellers = () => {
    const columns = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: <IoPersonOutline size={18} />,
            accessor: 'avatar',
            Cell: ({value}) => <TableRoundedImage src={value} alt="" />,
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Sales',
            accessor: 'sales',
            Cell: ({value}) => <P2> { value } sold </P2>,
        },
        {
            Header: 'Profits',
            accessor: 'profits',
            Cell: ({value}) => <P2> { value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) } </P2>,
        }
    ]

    const MobileCardInner = ({ data, labels }) => {
        const filter_data = Object.entries(data).filter(([ label ]) => !['avatar', 'name', 'id'].includes(label));
        const secondary_data = filter_data.map(([label, value]) => value);
        const filtered_labels = labels.filter((label) => !['avatar', 'name', 'id'].includes(label.accessor));

        return (
            <>
                <CenteredRoundedImage
                    src={data.avatar}
                    alt=""
                    loading="lazy"
                />
                <CardTitle>
                    { data.name }
                </CardTitle>
                <Div center>
                    {secondary_data.map((value, index) => (
                            <div style={{ marginBottom: '5px' }}>
                                <Label>
                                    { filtered_labels[index].Header }: 
                                    {" "}
                                    <Value>
                                        { value }
                                    </Value>
                                </Label>
                            </div>
                        ))
                    }
                </Div>
            </>
        )
    }


    return (
        <Table
            tableData={sellers}
            tableColumns={columns}
            showSearchFilter={false}
            pagination={false}
            CustomWrapper={CustomWrapper}
            MobileCardInner={MobileCardInner}
        />
    )
}

const CustomWrapper = styled(TableWrapper)`
    margin-top: 40px;
    td:first-child, td:nth-child(2) {
        width: 40px;
    }
`

export default TableSellers