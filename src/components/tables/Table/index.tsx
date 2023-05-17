import React, { useEffect } from 'react'
import MobileView from '../components/MobileView'
import TableView from '../components/TableView'
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions'
import { Column } from 'react-table'
 

export interface TableProps<T extends object>  {
    showDateFilter?: boolean;
    exportExcel?: () => void;
    showSearchFilter?: boolean;
    tableData: T[];
    tableColumns: Column<T>[];
    pagination?: boolean;
    footer?: boolean;
    CustomWrapper?: any;
    MobileCardInner?: ({data, labels} : { data: T; labels: Column<T>[]}) => JSX.Element;
}

const Table = <T extends object>({ 
    showDateFilter=false,
    exportExcel,
    showSearchFilter=true,
    tableData,
    tableColumns,
    pagination=true,
    footer,
    CustomWrapper,
    MobileCardInner,
} : TableProps<T>) => {
    const { window_width } = useGetWindowDimensions();

    const data = React.useMemo(
        () => tableData,
        [tableData]
    )

    const columns = React.useMemo(
        () => tableColumns,
        [tableColumns]
    )
    
    if (window_width < 968) return (
        <MobileView 
            data={data}
            columns={columns}
            CardInner={MobileCardInner}
        />
    )
    return (
        <TableView 
            showDateFilter={showDateFilter}
            exportExcel={exportExcel}
            showSearchFilter={showSearchFilter}
            tableData={data}
            tableColumns={columns}
            pagination={pagination}
            footer={footer}
            CustomWrapper={CustomWrapper}
        />
    )
}

export default Table