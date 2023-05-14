import React from 'react'
import { P, Span } from '../../../styles/common/texts'
import { FlexDiv } from '../../../styles/common/layout'
import styled from 'styled-components'
import { css } from 'styled-components';
import { IoArrowBack, IoArrowForward, IoChevronBack, IoChevronForward } from 'react-icons/io5';

const TablePagination = ({
    pageIndex,
    pageCount,
    pageOptions,
    page,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    gotoPage,
}) => {

    function handleNavigateToPage(page) {
        gotoPage(page);
    }
    
    return (
        <nav>
            <P mb="10px" mt="15px">
                Página
                {' '}
                <Span textColor={'primary_medium'}>
                    { pageIndex + 1 } 
                </Span>
                {' '}
                de { pageCount }
            </P>

            <PaginationContainer>

                {canPreviousPage && (
                    <li>
                        <PreviousNextButton onClick={previousPage}>
                            Anterior
                            <IoChevronBack />
                        </PreviousNextButton>
                    </li>
                )}

                <FlexDiv>
                    {
                        pageOptions.map((page) => (
                            <li key={page}>
                                <PaginationLink currentPage={page === pageIndex} onClick={() => handleNavigateToPage(page)}>
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
                            Próxima
                        </PreviousNextButton>
                    </li>
                )}

            </PaginationContainer>
        </nav>
    )
}

const PaginationContainer = styled.ul`
    display: flex;
    align-items: center;
    row-gap: 15px;
`

const PreviousNextButton = styled.button`
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

const PaginationLink = styled.button`
    font-size: 16px;
    font-weight: 600;
    color: ${p => p.currentPage ? p.theme.colors.white : p.theme.colors.black};
    &:hover {
        color: ${p => !p.currentPage && p.theme.colors.primary_medium};
        transition: all 200ms;
    }
    ${p => p.currentPage && css`
        background-color: ${p.theme.colors.primary_medium};
        margin-left: ${p.index === 0 ? '0' : '5px'};
        margin-right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 100%;
    `}
`

export default TablePagination