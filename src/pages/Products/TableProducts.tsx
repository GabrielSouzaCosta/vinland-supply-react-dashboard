import React from 'react'
import { Table } from '@/components/tables'
import styled from 'styled-components'
import { Div, FlexDiv } from '@/styles/common/layout'
import useGetThemeColors from '@/hooks/useGetThemeColors'
import { IoStarSharp } from 'react-icons/io5'
import { TableRoundedImage, TableWrapper } from '@/components/tables/styles/tableStyles'
import { CardTitle, CenteredRoundedImage, Label, Value } from '@/components/tables/components/MobileView/styles'
import { Column } from 'react-table'
import { Product } from '@/@types/product'

const productsData = [
    {
        name: 'Wine',
        sold: 60400,
        unit_price: '$12.99',
        total_revenue: 784596,
        total_profit: 400000,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
        name: 'Gorgonzola',
        sold: 29100,
        unit_price: '$25.49',
        total_revenue: 741759,
        total_profit: 390000,
        rating: 4.2,
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
        name: 'Artesanal Bread',
        sold: 28400,
        unit_price: '$5.99',
        total_revenue: 170116,
        total_profit: 135230,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1536534028025-68598ea8af44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
    },
    {
        name: 'Craft Beer',
        sold: 25000,
        unit_price: '$7.99',
        total_revenue: 199750,
        total_profit: 139400,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1597822738124-151fb72dcb79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
]

const TableProducts = () => {
    const colors = useGetThemeColors();

    const productsTableColumns: Column<Product>[] = [
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
            Cell: ({ value }) => <>${value?.toFixed(2)}</>
        },
        {
            Header: 'Total Profit',
            accessor: 'total_profit',
            Cell: ({ value }) => <>${value?.toFixed(2)}</>
        },
        {
            Header: 'Rating',
            accessor: 'rating',
            Cell: ({ value }) => value && <FlexDiv gapX="10px" style={{ color: value < 4 ? value >= 3.5 ? colors.warning : colors.danger : colors.success }}>
                <IoStarSharp />
                <p>
                    { value }
                </p>
            </FlexDiv>
        },
    ] as Column<Product>[];

    interface MobileCardProps {
        data: Product,
        labels: Column<Product>[];
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
                <Div center>
                    {secondary_data.map((value, index) => (
                            <div 
                                key={index}
                                style={{ marginBottom: '5px' }}
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
            tableData={productsData}
            tableColumns={productsTableColumns}
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

export default TableProducts