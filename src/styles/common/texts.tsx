import styled, { css } from 'styled-components';

interface TextProps {
    m?: string,
    mx?: string,
    my?: string,
    mt?: string,
    mb?: string,
    ml?: string,
    mr?: string,
    fw?: string,
    center?: boolean,
    color?: string,
    right?: boolean,
    uppercase?: boolean
}

export const StyledText = styled.p<TextProps>`
    color: ${p => p.color ? p.theme.colors[p.color] : p.theme.colors.black};
    font-weight: 500;
    ${p => p.fw && css`
        font-weight: ${p.fw};
    `}

    ${p => p.center && css`
        text-align: center;
    `}

    ${p => p.right && css`
        text-align: right;
    `}

    ${p => p.uppercase && css`
        text-transform: uppercase;
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

export const H1 = styled.h1<TextProps>`
    color: ${p => p.theme.colors.black};
    font-size: 30px;
    font-weight: 600;
    ${(p) => p.m && css`
        margin: ${p.m};
    `}
    ${p => p.center && css`
        text-align: center;
    `}
    @media screen and (max-width: 968px) {
        font-size: 26px;
    }
`;

export const H2 = styled.h2<TextProps>`
    color: ${p => p.theme.colors.black};
    font-size: 24px;
    font-weight: 600;
    ${(p) => p.m && css`
        margin: ${p.m};
    `}
    ${p => p.center && css`
        text-align: center;
    `}
    @media screen and (max-width: 968px) {
        font-size: 20px;
    }
`;

export const H3 = styled.h3<TextProps>`
    color: ${p => p.theme.colors.black};
    font-size: 20px;
    font-weight: 600;
    ${(p) => p.m && css`
        margin: ${p.m};
    `}
    ${p => p.center && css`
        text-align: center;
    `}
    @media screen and (max-width: 968px) {
        font-size: 16px;
    }
`;


export const P = styled(StyledText)`
    font-size: 14px;
    @media screen and (max-width: 1400px) {
        font-size: 12px
    }
`;

export const P2 = styled(StyledText)`
    font-size: 16px;
    @media screen and (max-width: 1400px) {
        font-size: 14px
    }
`;

export const P3 = styled(StyledText)`
    font-size: 18px;
    @media screen and (max-width: 1400px) {
        font-size: 16px
    }
`;

export const Span = styled.span<TextProps>`
    color: ${p => p.color ? p.theme.colors[p.color] : p.theme.colors.black};
    font-size: 14px;
    @media screen and (max-width: 1400px) {
        font-size: 12px
    }
`;