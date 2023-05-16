import React, { InputHTMLAttributes } from 'react';
import { FieldValues, RegisterOptions, useController, UseControllerProps, useFormContext, UseFormProps, UseFormRegister, UseFormReturn, ValidationRule } from 'react-hook-form';
import { IoAlertCircleOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { css } from 'styled-components';
import { useStateContext } from '../../context/ContextProvider';
import { colors } from './theme';

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

type InputContainerProps = {
    label: string,
    children: React.ReactNode,
}

export const InputContainer = ({
    label,
    children,
    ...props
} : InputContainerProps) => (
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

interface StyledInputProps {
    dark?: boolean,
    error?: boolean
}

export const StyledInput = styled.input<StyledInputProps>`
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
    @media screen and (max-width: 968px) {
        padding: 6px 8px 6px 8px;
    }
`

interface InputProps extends Omit<UseControllerProps, 'name'> {
    name?: string,
}

export const Input = ({
    name,
    rules,
    control,
    ...props
} : InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const { theme } = useStateContext();

    const FormInput = ({ name, rules, control } : UseControllerProps) => {
        const { 
            field: { 
                value,
                onChange,
            },
            fieldState: {
                error
            }
        } = useController({
            name,
            control,
            rules,
        });

        return (
            <>
                {error &&
                    <AlertIconDiv>
                        <IoAlertCircleOutline color={colors.danger} size={20} />
                    </AlertIconDiv>
                }
                <StyledInput
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    dark={theme === 'dark'}
                    { ...props }
                />
            </>
        )
    }

    return (
        <InputRelativeDiv>
            {name ?
                <FormInput 
                    name={name}
                    rules={rules}
                    control={control}
                />
            :
                <StyledInput 
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
        color: ${p => p.theme.colors.black_extra_light};
        padding: 5px;
        background: ${p => p.theme.colors.white_medium_light};
        border-radius: 10px;
        border: 1px solid #555;
        &::file-selector-button {
            margin-right: 20px;
            border: none;
            background: ${p => p.theme.colors.black_extra_light};
            padding: 10px 20px;
            border-radius: 10px;
            color: ${p => p.theme.colors.white_medium_light};
            cursor: pointer;
            transition: background .2s ease-in-out;
        }
        &::file-selector-button:hover {
            background: ${p => p.theme.colors.black_extra_light+'cc'};
        }
    }
    input[type="file"]
`