import React from 'react'
import { AiFillFileExcel, AiFillFilePdf } from 'react-icons/ai'
import styled from 'styled-components'
import { css } from 'styled-components'
import { colors } from './theme'

interface ButtonProps {
    fullWidth?: boolean,
    iconButton?: boolean,
    variant?: string,
    toggled?: boolean
}

export const Button = styled.button<ButtonProps>`
    border-radius: 8px;
    padding: 8px;
    font-size: 16px;
    font-weight: 600;

    ${p => p.fullWidth && css`
        width: 100%;
    `}

    ${p => p.iconButton && css`
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 5px;
    `}

    color: ${colors.black_extra_light};
    background-color: ${p => p.theme.colors.primary_medium};
    transition: all 300ms;

    ${p => p.variant === 'danger' && css`
        background-color: ${p => p.theme.colors.danger};
        color: #F7F7F7;
        border: 1.5px solid ${p => p.theme.colors.danger};
        
    `}
    ${p => p.variant === 'danger-outline' && css`
        background-color: transparent;
        color: ${p => p.theme.colors.danger};
        border: 1.5px solid ${p => p.theme.colors.danger};
        &:hover {
            background-color: ${p => p.theme.colors.danger};
            color: #F7F7F7;
        }
    `}
    ${p => p.variant === 'success' && css`
        background-color: ${p => p.theme.colors.success};
        color: #F7F7F7;
        border: 1px solid ${p => p.theme.colors.success};
    `}

    ${p => p.variant === 'black' && css`
        background-color: ${p => p.theme.colors.black_extra_light};
        color: ${p => p.theme.colors.white_medium};
        border: 1px solid ${p => p.theme.colors.black_extra_light};
        &:hover {
            border: 1px solid ${p => p.theme.colors.primary_medium};
            color: ${p => p.theme.colors.white_medium_light};
        }
    `}
`

export const ToggleButton = styled(Button)`
    background-color: ${p => p.toggled ? p.theme.colors.success : 'transparent'};
    color: ${p => p.toggled ? p.theme.colors.white : p.theme.colors.success};
    border: 1.5px solid ${p => p.theme.colors.success};
    transition: all 250ms;
    &:hover {
        background-color: ${p => p.theme.colors.success};
        color: ${p => p.theme.colors.white};
    }
    &:active {
        transform: scale(104%);
    }
`

export const ButtonExportExcel = () => (
    <ButtonExcel>
        <AiFillFileExcel size={16} />
        Excel
    </ButtonExcel>
)

const ButtonExcel = styled.button`
    border-radius: 4px;
    width: fit-content;
    padding: 8px 20px;
    margin-top: 4px;
    background-color: ${p => p.theme.colors.success};
    color: #F7F7F7;
    font-size: 14px;
    display: flex;
    align-items: center;
    column-gap: 6px;
    font-weight: 600;
    transition: all 250ms;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid ${p => p.theme.colors.black_extra_light};
        background-color: #202020;
    }
`

export const ButtonExportPdf = () => (
    <ButtonPdf>
        <AiFillFilePdf size={16} />
        PDF
    </ButtonPdf>
)

const ButtonPdf = styled.button`
    border-radius: 4px;
    width: fit-content;
    padding: 8px 20px;
    margin-top: 4px;
    background-color: ${p => p.theme.colors.warning};
    color: #353535;
    font-size: 14px;
    display: flex;
    align-items: center;
    column-gap: 6px;
    font-weight: 600;
    transition: all 250ms;
    border: 1px solid transparent;
    &:hover {
        color: ${p => p.theme.colors.white_medium_light};
        background-color: ${p => p.theme.colors.black_extra_light};
    }
`