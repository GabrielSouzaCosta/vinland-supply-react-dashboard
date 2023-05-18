import React from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import { sellers } from '.'
import { Table } from '@/components/tables'
import styled from 'styled-components'
import { P2 } from '@/styles/common/texts'
import { TableRoundedImage, TableWrapper } from '@/components/tables/styles/tableStyles'
import { CardTitle, CenteredRoundedImage, Label, Value } from '@/components/tables/components/MobileView/styles'
import { Div } from '@/styles/common/layout'
import { Column } from 'react-table'
import { User } from '@/@types/user'

const TableSellers = () => {
    const columns: Column<User>[] = [
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
            Cell: ({value}) => value && <P2> { value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) } </P2>,
        }
    ] as Column<User>[];

    interface MobileCardProps {
        data: User;
        labels: Column<User>[];
    }

    const MobileCardInner = ({ data, labels }: MobileCardProps) => {
        const filter_data = Object.entries(data).filter(([ label ]) => !['avatar', 'name', 'id'].includes(label));
        const secondary_data = filter_data.map(([label, value]) => value);
        const filtered_labels = labels?.filter((label) => {
            const accessor = String(label?.accessor);
            return accessor && !['avatar', 'name', 'id'].includes(accessor);
        });

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
                            <div 
                                style={{ marginBottom: '5px' }}
                                key={index}
                            >
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