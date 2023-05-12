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
 
const Table = ({ 
    showDateFilter,
    exportExcel,
    showSearchFilter=true,
    tableData,
    tableColumns,
    pagination=true,
    footer,
    CustomWrapper
}) => {
    const { theme } = useStateContext();

    const data = React.useMemo(
        () => tableData,
        [tableData]
    )

    const columns = React.useMemo(
        () => tableColumns,
        [tableColumns]
    )
    
    const tableInstance = useTable(
        { 
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: pagination ? 50 : data.length },
            key: data.length
        }, 
        useGlobalFilter, 
        useSortBy,
        usePagination,
    );
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    // UseGlobalFilter plugin variables
    const {
        preGlobalFilteredRows,
        globalFilter,
        setGlobalFilter,
    } = tableInstance;

    // UsePagination plugin variables
    const {
        state: { pageIndex },
        page,
        pageCount,
        pageOptions,
        canPreviousPage,
        canNextPage,
        previousPage,
        nextPage,
        gotoPage,
    } = tableInstance;

    const TableContent = () => (    
        <table {...getTableProps()}>
            <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                    // Apply the header cell props
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                        {column.render('Header')}
                        {column.isSorted ? (column.isSortedDesc ?  <IoCaretDown /> : <IoCaretUp />) : ""}
                    </th>
                ))}
                </tr>
            ))}
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows?.length === 0 ? 
                    (
                        <tr>
                            <td colSpan={columns.length}>No rows found</td>
                        </tr>
                    ) 
                    : 
                    (
                        page.map(row => {
                            prepareRow(row)
                            return (
                                <tr 
                                    {...row.getRowProps()}
                                >
                                    {
                                        row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps()}>
                                                    {cell.render('Cell')}
                                                </td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    )
                }
            </tbody>

            {footer &&
                <tfoot>
                    {footerGroups.map(group => (
                    <tr {...group.getFooterGroupProps()}>
                        {group.headers.map(column => (
                        <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                        ))}
                    </tr>
                    ))}
                </tfoot>
            }

        </table>
    )

    return (
        <div id="table">
            <FlexDiv between mb="15px" alignItems="end">
                {exportExcel &&
                    <div>
                        <P2>
                            Export 
                        </P2>
                        <ButtonExportExcel />
                    </div>
                }

                <FlexDiv gapX="10px">
                    {showDateFilter &&
                        <FilterByDate />
                    }

                    {showSearchFilter &&
                        <GlobalFilterSearch
                            preGlobalFilteredRows={preGlobalFilteredRows}
                            globalFilter={globalFilter}
                            setGlobalFilter={setGlobalFilter}
                        />
                    }
                </FlexDiv>
            </FlexDiv>

            {CustomWrapper ? 
                <CustomWrapper className='custom-scrollbar' darkMode={theme === 'dark'}>
                    <TableContent />
                </CustomWrapper>
            :
                <TableWrapper className='custom-scrollbar' darkMode={theme === 'dark'}>
                    <TableContent />
                </TableWrapper>
            }


            {pagination &&
                <TablePagination 
                    pageIndex={pageIndex}
                    page={page}
                    pageCount={pageCount}
                    pageOptions={pageOptions}
                    canPreviousPage={canPreviousPage}
                    canNextPage={canNextPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    gotoPage={gotoPage}
                />
            }
        </div>
    )
}

export default Table