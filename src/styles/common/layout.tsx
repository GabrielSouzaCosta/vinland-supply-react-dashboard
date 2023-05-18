import { relative } from 'node:path/win32'
import styled from 'styled-components'
import { css } from 'styled-components'

interface LayoutProps {
    padding?: string;
    fullWidth?: boolean;
    m?: string;
    mx?: string;
    my?: string;
    mt?: string;
    mb?: string;
    ml?: string;
    mr?: string;
    relative?: boolean;
    center?: boolean;
    alignItems?: string;
    between?: boolean;
    justify?: string;
    column?: boolean;
    flexwrap?: boolean;
    gap?: string;
    gapX?: string;
    gapY?: string;
}

export const Main = styled.main`
    background-color: #F3F5F7;
`

export const Container = styled.div<LayoutProps>`
    padding: ${p => p.padding ? p.padding : '20px'};
    max-width: 1568px;
    margin: 0 auto;
    @media screen and (max-width: 968px) {
        padding: 10px;
    }
`

export const Div = styled.div<LayoutProps>`
    ${p => p.relative && css`
        position: relative;
    `}
    ${p => p.fullWidth && css`
        width: 100%;
    `}
    ${(p) => p.padding && css`
        padding: ${p.padding};
    `}
    ${(p) => p.center && css`
        text-align: center;
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

export const FlexDiv = styled(Div)<LayoutProps>`
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