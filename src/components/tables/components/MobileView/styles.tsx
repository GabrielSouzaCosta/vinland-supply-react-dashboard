import styled from 'styled-components'

export const CenteredRoundedImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    box-shadow: 0 2px 14px #40404066;
    object-fit: cover;
    margin: 0 auto;
    margin-bottom: 10px;
    display: block;
`

export const CardTitle = styled.p`
    font-weight: 600;
    text-align: center;
    font-size: 16px;
    margin-bottom: 10px;
    color: ${p => p.theme.colors.black};
`

export const Label = styled.p`
    font-size: 13px;
    color: ${p => p.theme.colors.gray_medium};
`

export const Value = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 600;
    color: ${p => p.theme.colors.black};
`