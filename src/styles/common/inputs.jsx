import React from 'react';
import { useFormContext } from 'react-hook-form';
import { IoAlertCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { css } from 'styled-components';
import { P } from './texts';
import { colors } from './theme';
import { useStateContext } from '@/context/ContextProvider';

const InputView = styled.div`
    margin-bottom: 15px;
`;

const InputLabel = styled.label`
    color: ${p => p.theme.colors.black};
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 500;
    display: block;
`;

export const InputContainer = ({
    label,
    children,
    ...props
}) => (
    <InputView { ...props } className="input-container">
        <InputLabel>
            { label }
        </InputLabel>
        { children }
    </InputView>
);


const InputRelativeDiv = styled.div`
    position: relative;
`

const AlertIconDiv = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
`

export const StyledInput = styled.input`
    color: ${p => p.theme.colors.black};
    padding: 8px 12px 8px 8px;
    background-color: ${p => p.theme.colors.gray_extra_light};
    border-radius: 8px;
    border: 1px solid ${p => p.theme.colors.black+'22'};
    box-shadow: 1px 1px 8px rgba(10, 10, 10, 0.05);
    &::placeholder {
        color: ${p => p.theme.colors.black_extra_light+'aa'};        
    }
    ${p => !p.dark && css`
        &:focus {
            background-color: ${p => p.theme.colors.white_medium_light};
        }
    `}
    ${p => p.error && css`
        border: 2px solid ${p => p.theme.colors.danger};
    `}
`

export const Input = ({
    name,
    validation,
    error,
    ...props
}) => {
    const { theme } = useStateContext();
    const form = useFormContext();
    const register = form?.register;

    return (
        <InputRelativeDiv>
            {error &&
                <AlertIconDiv>
                    <IoAlertCircleOutline color={colors.danger} size={20} />
                </AlertIconDiv>
            }
            {register && name ?
                <StyledInput 
                    error={error}
                    dark={theme === 'dark'}
                    { ...props }
                    { ...register(name, validation) }
                />
            :
                <StyledInput 
                    error={error}
                    dark={theme === 'dark'}
                    { ...props }
                />
            }
        </InputRelativeDiv>
    )
}

export const InputFile = styled.div`
    input[type="file"] {
        width: 350px;
        max-width: 100%;
        color: #444;
        padding: 5px;
        background: #fff;
        border-radius: 10px;
        border: 1px solid #555;
        &::file-selector-button {
            margin-right: 20px;
            border: none;
            background: ${p => p.theme.colors.black_extra_light};
            padding: 10px 20px;
            border-radius: 10px;
            color: #fff;
            cursor: pointer;
            transition: background .2s ease-in-out;
        }
        &::file-selector-button:hover {
            background: ${p => p.theme.colors.black_extra_light+'cc'};
        }
    }

    input[type="file"]
`