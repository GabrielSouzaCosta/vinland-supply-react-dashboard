import styled from 'styled-components'
import { css } from 'styled-components'

export const Main = styled.main`
    background-color: #F3F5F7;
`

export const Container = styled.div`
    padding: ${p => p.padding ? p.padding : '20px'};
    max-width: 1568px;
    margin: 0 auto;
`

export const Div = styled.div`
    ${p => p.fullWidth && css`
        width: 100%;
    `}
    ${(p) => p.padding && css`
        padding: ${p.padding};
    `}
    ${(p) => p.m && css`
        margin: ${p.m};
    `}
    ${(p) => p.mx && css`
        margin: 0 ${p.mx};
    `}
    ${(p) => p.my && css`
        margin: ${p.my} 0;
    `}
    ${(p) => p.mt && css`
        margin-top: ${p.mt};
    `}
    ${(p) => p.mb && css`
        margin-bottom: ${p.mb};
    `}
    ${(p) => p.ml && css`
        margin-left: ${p.ml};
    `}
    ${(p) => p.mr && css`
        margin-right: ${p.mr};
    `}
`

export const FlexDiv = styled(Div)`
    display: flex;
    ${p => p.column && css`
        flex-direction: column;
    `}
    align-items: ${p => p.alignItems ? p.alignItems : 'center'};
    justify-content: ${p => p.between ? 'space-between' : 'center'};
    ${p => p.justify && css`
        justify-content: ${p.justify};
    `}
    ${p => !!p.flexwrap && css`
        flex-wrap: wrap;
        row-gap: 15px;
    `}
    ${p => p.gap && css`
        gap: ${p.gap};
    `}
    ${p => p.gapX && css`
        column-gap: ${p.gapX};
    `}
    ${p => p.gapY && css`
        row-gap: ${p.gapY};
    `}
`