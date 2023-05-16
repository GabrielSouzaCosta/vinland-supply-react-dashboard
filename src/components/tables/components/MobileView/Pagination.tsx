import { FlexDiv } from '@/styles/common/layout'
import { P, Span } from '@/styles/common/texts'
import React from 'react'
import { IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { PaginationContainer, PaginationLink, PreviousNextButton } from '../TablePagination'

const Pagination = ({
    pageIndex,
    pageCount,
    canPreviousPage,
    previousPage,
    pageOptions,
    canNextPage,
    nextPage,
    handleNavigateToPage,
}) => {

  return (
    <nav>
        <PaginationContainer style={{ justifyContent: 'center', marginTop: '15px' }}>

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
                    pageOptions.slice(pageIndex, pageIndex + 5).map((page) => (
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
                        Next
                    </PreviousNextButton>
                </li>
            )}
        </PaginationContainer>
        {/* <P mt="10px" center>
            Page
            {' '}
            <Span textColor={'primary_medium'}>
                { pageIndex + 1 } 
            </Span>
            {' '}
            of { pageCount }
        </P> */}
    </nav>  
  )
}

export default Pagination