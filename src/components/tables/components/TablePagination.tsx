import React from 'react'
import { P, Span } from '@/styles/common/texts'
import { FlexDiv } from '@/styles/common/layout'
import styled from 'styled-components'
import { css } from 'styled-components';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface TablePaginationProps {
    pageIndex: number;
    pageCount: number;
    pageOptions: number[];
    canPreviousPage: boolean;
    canNextPage: boolean;
    previousPage: () => void;
    nextPage: () => void;
    gotoPage: (page: number) => void;
}

const TablePagination = ({
    pageIndex,
    pageCount,
    pageOptions,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotoPage,
}: TablePaginationProps) => {

    function handleNavigateToPage(page: number) {
        gotoPage(page);
    }
    
    return (
        <nav>
            <P mb="10px" mt="15px">
                Page
                {' '}
                <Span color={'primary_medium'}>
                    { pageIndex + 1 } 
                </Span>
                {' '}
                of { pageCount }
            </P>

            <PaginationContainer>

                {canPreviousPage && (
                    <li>
                        <PreviousNextButton onClick={previousPage}>
                            Previous
                            <IoChevronBack />
                        </PreviousNextButton>
                    </li>
                )}

                <FlexDiv>
                    {
                        pageOptions.map((page) => (
                            <li key={page}>
                                <PaginationLink 
                                    currentPage={page === pageIndex} 
                                    onClick={() => handleNavigateToPage(page)}
                                >
                                    {page + 1}
                                </PaginationLink>
                            </li>
                        ))
                    }
                </FlexDiv>


                {canNextPage && (
                    <li>
                        <PreviousNextButton next onClick={nextPage}>
                            <IoChevronForward />
                            Next
                        </PreviousNextButton>
                    </li>
                )}

            </PaginationContainer>
        </nav>
    )
}

export const PaginationContainer = styled.ul`
    display: flex;
    align-items: center;
    row-gap: 15px;
`

export const PreviousNextButton = styled.button<{ next?: boolean }>`
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    column-gap: 5px;
    color: ${p => p.theme.colors.black};
    &:hover {
        color: ${p => p.next ? p.theme.colors.primary_medium : p.theme.colors.danger};
        transition: all 200ms;
    }
`

type PaginationLinkProps = {
    currentPage?: boolean,
}

export const PaginationLink = styled.button<PaginationLinkProps>`
    font-size: 16px;
    font-weight: 600;
    color: ${p => p.currentPage ? p.theme.colors.white : p.theme.colors.black};
    &:hover {
        color: ${p => !p.currentPage && p.theme.colors.primary_medium};
        transition: all 200ms;
    }
    ${p => p.currentPage && css`
        background-color: ${p.theme.colors.primary_medium};
        margin-right: 5px;
        width: 35px;
        height: 35px;
        border-radius: 100%;
    `}
`

export default TablePagination