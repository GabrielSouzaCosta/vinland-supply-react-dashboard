import useGetThemeColors from '@/hooks/useGetThemeColors'
import { ButtonExportExcel } from '@/styles/common/buttons'
import { Input } from '@/styles/common/inputs'
import { FlexDiv } from '@/styles/common/layout'
import { P, P3 } from '@/styles/common/texts'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import styled from 'styled-components'
import Pagination from './Pagination'
import useMobilePagination from './useMobilePagination'

const ListItem = ({ children } : { children: React.ReactNode }) => (
    <Item>
        { children }
    </Item>
)

type Props = {
    data: any[],
    columns: any[],
    CardInner?: any
}

const MobileView = ({
    data,
    columns,
    CardInner,
} : Props) => {
    const colors = useGetThemeColors();
    
    const [ search, setSearch ] = useState('');

    const filteredData = getSearchItems();

    const {
        pageIndex,
        pageCount,
        canPreviousPage,
        previousPage,
        pageOptions,
        canNextPage,
        nextPage,
        handleNavigateToPage,
    } = useMobilePagination({ data: filteredData, search });

    const slicedData = filteredData.slice((pageIndex * 10),  (pageIndex * 10) + 10);

    const scrollRef = useRef();

    function getSearchItems() {
        if (search) {
            const fields = Object.keys(data[0]).filter(item => item !== 'image');

            const filteredArray = data.filter((item) => {
                for (const field of fields) {
                    const value = item[field].toString();

                    if (value.toLowerCase().includes(search.toLowerCase())) {
                        return true;
                    }
                }
                return false;
            });
            
            return filteredArray;
        }
        return data
    }

    function handleSearchChange(e: any) {
        setSearch(e.target.value);
    }
    
    useEffect(() => {
        scrollRef?.current?.scrollTo(0, 0);
    }, [slicedData])

    return (
        <Content>
            <Search>
                <IoSearchOutline 
                    size={16}
                    color={colors.black_extra_light}
                />
                <Input 
                    type={'search'}
                    placeholder="Search items"
                    value={search}
                    onChange={handleSearchChange}
                />
            </Search>

            {slicedData.length > 0 ?
                <List className='custom-scrollbar' ref={scrollRef}>
                    {slicedData.map((item, index) => (
                            <ListItem key={index}>
                                { CardInner && <CardInner data={item} labels={columns} />}
                            </ListItem>
                        ))
                    }
                </List>
            :
                <P3 center mt="15px">
                    No items found.
                </P3>
            }

            <Pagination 
                pageIndex={pageIndex}
                pageCount={pageCount}
                canPreviousPage={canPreviousPage}
                previousPage={previousPage}
                pageOptions={pageOptions}
                canNextPage={canNextPage}
                nextPage={nextPage}
                handleNavigateToPage={handleNavigateToPage}
            />
        </Content>
    )
}

const Content = styled.section`
    padding-bottom: 30px;
`

const Search = styled.div`
    position: relative;
    margin-bottom: 5px;
    svg {
        position: absolute;
        top: 50%;
        left: 10px;
        z-index: 10;
        transform: translateY(-50%);
    }
    input {
        width: 100%;
        padding: 8px 8px 8px 30px;
    }
`

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    padding: 5px 4px;
    margin-top: 10px;
    max-height: 65vh;
    overflow-y: scroll;
    @media screen and (min-width: 576px) {
        justify-content: space-between;
    }
`

const Item = styled.li`
    border-radius: 4px;
    padding: 10px;
    background-color: ${p => p.theme.colors.white};
    box-shadow: 1px 1px 6px ${p => p.theme.colors.black+'11'};
    border: 1px ${p => p.theme.colors.black+'22'};
    width: 100%;
    @media screen and (min-width: 576px) {
        width: 49%;
    }
`   

export default MobileView