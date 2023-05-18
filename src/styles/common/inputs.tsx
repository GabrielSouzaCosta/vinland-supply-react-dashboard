import useGetThemeColors from '@/hooks/useGetThemeColors';
import React, { InputHTMLAttributes, useState } from 'react';
import { Control, FieldPath, FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { IoAlertCircleOutline, IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
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

interface InputContainerProps extends React.HTMLAttributes<HTMLDivElement> {
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

type TextInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>
> = {
  
} & UseControllerProps<TFieldValues, TName> & InputHTMLAttributes<HTMLInputElement>

export const ControlledInput = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
>({
    name,
    rules,
    control,
    ...props
} : TextInputProps<TFieldValues, TName>) => {
    const { theme } = useStateContext();

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
        <InputRelativeDiv>
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
        </InputRelativeDiv>
    )
}

const PasswordButton = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
`

export const PasswordControlledInput = <
    TFieldValues extends FieldValues,
    TName extends FieldPath<TFieldValues>
>({
    name,
    rules,
    control,
    ...props
} : TextInputProps<TFieldValues, TName>) => {
    const { theme } = useStateContext();
    const themeColors = useGetThemeColors();
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

    function handleTogglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible)
    }

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
        <InputRelativeDiv>
            <StyledInput
                value={value}
                onChange={onChange}
                error={!!error}
                dark={theme === 'dark'}
                type={isPasswordVisible ? "text" : "password"}
                { ...props }
            />
            <PasswordButton 
                onClick={handleTogglePasswordVisibility} 
                type="button"
            >
                {isPasswordVisible ?
                    <IoEyeOutline 
                        color={themeColors.black}
                    />
                    :
                    <IoEyeOffOutline 
                        color={themeColors.black}
                    />
                }
            </PasswordButton>
            
        </InputRelativeDiv>
    )
}

interface InputProps {
    error?: boolean
}

export const Input = ({
    error,
    ...props
} : InputProps & InputHTMLAttributes<HTMLInputElement>) => {
    const { theme } = useStateContext();

    return (
        <InputRelativeDiv>
            {error &&
                <AlertIconDiv>
                    <IoAlertCircleOutline color={colors.danger} size={20} />
                </AlertIconDiv>
            }
            <StyledInput
                error={!!error}
                dark={theme === 'dark'}
                { ...props }
            />
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
`