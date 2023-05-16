import React, { useEffect } from 'react'
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table'
import { IoCaretDown, IoCaretUp } from 'react-icons/io5'
import { AiFillFileExcel } from 'react-icons/ai'
import { FlexDiv } from '@/styles/common/layout'
import { P2 } from '@/styles/common/texts'
import GlobalFilterSearch from '../components/GlobalFilterSearch'
import TablePagination from '../components/TablePagination'
import FilterByDate from '../components/FilterByDate'
import {
    TableWrapper,
} from '../styles/tableStyles'
import { ButtonExportExcel } from '../../../styles/common/buttons'
import { useStateContext } from '../../../context/ContextProvider'
import MobileView from '../components/MobileView'
import TableView from '../components/TableView'
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions'
 
export type TableProps = {
    showDateFilter: boolean,
    exportExcel?: () => void,
    showSearchFilter: boolean,
    tableData: any[],
    tableColumns: [],
    pagination: boolean,
    footer?: boolean,
    CustomWrapper?: React.ReactNode,
    MobileCardInner?: any,
}

const Table = ({ 
    showDateFilter=false,
    exportExcel,
    showSearchFilter=true,
    tableData,
    tableColumns,
    pagination=true,
    footer,
    CustomWrapper,
    MobileCardInner,
} : TableProps) => {
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