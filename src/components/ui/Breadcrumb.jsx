import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../../context/ContextProvider'
import { H2, P2 } from '../../styles/common/texts'

const Breadcrumb = ({
    currentLink,
    root,
    hideFilial
}) => {
    const { theme } = useStateContext();

    return (
        <StyledBreadcrumb lightTheme={theme === 'light'}>
            <H2>
                { currentLink }
            </H2>
        </StyledBreadcrumb>
    )
}

const StyledBreadcrumb = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid ${p => p.theme.colors.gray_light};
    h2 {
        color: ${p => p.theme.colors.dark_extra_light};
    }
`

export default Breadcrumb