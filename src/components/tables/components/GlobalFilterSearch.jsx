import React, { useState } from 'react'
import styled from 'styled-components'
import { useAsyncDebounce } from 'react-table'
import { P, P2 } from '../../../styles/common/texts'
import { useStateContext } from '../../../context/ContextProvider'
import { css } from 'styled-components'

const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
}) => {
    const { theme } = useStateContext();
    const [ search, setSearch ] = useState(globalFilter);

    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 250)

    function handleChangeSearch(e) {
        setSearch(e.target.value);
        onChange(e.target.value);
    }

    return (
        <div>
            <P2>
                Search:
            </P2>
            <SearchInput 
                value={search || ""}
                onChange={handleChangeSearch}
                placeholder="Search the table"
                dark={theme === 'dark'}
            />
        </div>
    )
}

const SearchInput = styled.input`
    background-color: ${p => p.dark ? p.theme.colors.gray_light : p.theme.colors.gray_extra_light};
    margin-top: 4px;
    height: 40px;
    border-radius: 8px;
    padding: 4px 8px 4px 10px;
    border: 1px solid #20202040;
    box-shadow: 1px 1px 10px rgba(20, 20, 20, 0.1);
    &:focus {
        background-color: ${p => p.dark ? p.theme.colors.gray_light : p.theme.colors.white_medium_light};
    }
    ${p => p.dark && css`
        color: ${p => p.theme.colors.gray_dark};
        &::placeholder {
            color: ${p => p.theme.colors.gray_dark+'cc'};
        }
    `}
`

export default GlobalFilter