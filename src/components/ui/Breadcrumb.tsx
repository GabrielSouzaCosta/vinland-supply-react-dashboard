import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '@/context/ContextProvider'
import { H2 } from '@/styles/common/texts'

type Props = {
    currentLink: string,
    root?: string,
    hideFilial?: boolean,
}

const Breadcrumb = ({
    currentLink,
    root,
    hideFilial
} : Props) => {
    const { theme } = useStateContext();

    return (
        <StyledBreadcrumb lightTheme={theme === 'light'}>
            <H2>
                { currentLink }
            </H2>
        </StyledBreadcrumb>
    )
}

type BreadcrumbProps = {
    lightTheme: boolean
}

const StyledBreadcrumb = styled.div<BreadcrumbProps>`
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