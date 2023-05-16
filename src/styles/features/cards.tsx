import styled from 'styled-components'

export const Card = styled.div`
    padding: 4px 20px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 1px 1px 10px #45454522;
    border: 1px solid #40404011;
    border-radius: 8px;
    background-color: ${p => p.theme.colors.white};
    @media screen and (max-width: 968px) {
        padding: 2px 10px;
    }
`

export const CardCalloutValue = styled.p`
    color: ${p => p.theme.colors.black_extra_light};
    font-size: 32px;
    font-weight: 600;
    line-height: 32px;
    span {
        font-weight: 500;
        font-size: 16px;
        margin-left: 6px;
    }
    @media screen and (max-width: 968px) {
        font-size: 24px;
        span {
            font-size: 12px;
        }
    }
`

export const CardCaption = styled.p<{ red?: boolean }>`
    font-weight: 600;
    font-size: 16px;
    color: ${p => p.red ? p.theme.colors.danger+'ee' : p.theme.colors.gray_medium};
    @media screen and (max-width: 968px) {
        font-size: 12px;
    }
`

export const CardContent = styled.main`
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color: ${p => p.theme.colors.white_light};
    border: 1px solid #30303011;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(10, 10, 10, 0.1);
`