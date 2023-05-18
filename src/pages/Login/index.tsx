import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { P } from '../../styles/common/texts';
import { useForm } from 'react-hook-form';
import { InputContainer } from '../../styles/common/inputs';
import { Button } from '../../styles/common/buttons';
import { colors } from '../../styles/common/theme';
import { Div } from '@/styles/common/layout';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

type LoginCredentials = {
    username: string,
    password: string,
}

function Login() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);

    function handleLogin<SubmitHandler>({ username, password }: LoginCredentials) {
        navigate('/');
    }

    function handleTogglePasswordVisibility() {
        setIsPasswordVisible(!isPasswordVisible)
    }
    

    return (
        <Main>
            <div>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <img 
                        src="/images/Logo.png"
                        alt='Vinland Supply co.'
                    />

                    <h1>
                        LOGIN
                    </h1>

                    <InputContainer label="Username">
                        <Input
                            placeholder='Thorfinn'
                            invalid={!!errors.username}
                            { ...register('username', { required: true }) }
                        />
                        {errors.username && 
                            <P color={'danger'} fw={'600'} mt="4px">
                                Please enter your username to proceed.
                            </P>
                        }
                    </InputContainer>

                    <InputContainer label="Password">
                        <Div relative>
                            <Input 
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder='SuperSecretPassword'
                                invalid={!!errors.password}
                                { ...register('password', { required: true }) }
                            />
                            <PasswordButton 
                                onClick={handleTogglePasswordVisibility} 
                                type="button"
                            >
                                {isPasswordVisible ?
                                    <IoEyeOutline />
                                    :
                                    <IoEyeOffOutline />
                                }
                            </PasswordButton>
                        </Div>
                        {errors.password && 
                            <P color={'danger'} fw={'600'} mt="4px">
                                Please enter your password to proceed.
                            </P>
                        }
                    </InputContainer>

                    <KeepLoggedInBox>
                        <input type="checkbox" name="keep_logged_in" />
                        <label htmlFor="keep_logged_in">
                            Keep me logged in
                        </label>
                    </KeepLoggedInBox>


                    <Button
                        type="submit"
                        variant="black"
                    >
                        Log in
                    </Button>

                    <a id='forgot-password' href="#">
                        Forgot your password?
                    </a>
                </form>
            </div>

            <div>
                <img 
                    src="/images/Logo.png"
                    alt='Vinland Supply co.'
                />

                <img src="/images/farm.png" className='farm' alt="" />
                <a href="https://storyset.com/nature">Nature illustrations by Storyset</a>
            </div>
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    width: 100%;
    height: 100vh;
    > div:first-child {
        background-color: ${colors.primary_light};
        flex: 1;
        > form {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
            max-width: 50%;
            width: 100%;
            height: 100%;
        }
        h1 {
            color: #202020;
            font-size: 36px;
            margin-bottom: 40px;
        }
         div.input-container, div.input-container input, button[type="submit"] {
            width: 100%;
        }
        .input-container {
            margin-bottom: 10px;
            font-weight: 600;
            label {
                color: #202020;
                font-weight: 600;
            }
        }
        button[type="submit"] {
            margin-top: 10px;
            background-color: #303030;
            border: 1px solid #303030;
            color: #F7F7F7;
            &:hover {
                box-shadow: 1px 1px 12px rgba(20, 20, 20, 0.2);
            }
        }
        #forgot-password {
            color: #353535;
            margin-top: 20px;
            font-weight: 600;
        }
        img {
            display: none;
        }
        @media screen and (max-width: 968px) {
            background-color: #202020;
            img {
                display: block;
                max-width: 40%;
                object-fit: cover;
            }   
            > form {
                max-width: 90%;
                color: #F7F7F7;
                h1 {
                    color: #F2F2F2;
                    font-size: 24px;
                    margin-top: 15px;
                    margin-bottom: 15px;
                }
                .input-container label {
                    color: #F7F7F7;
                }
            }
            button[type="submit"] {
                color: #303030;
                background-color: ${colors.primary_medium};
                border: 1px solid ${colors.primary_medium};
            }
            #forgot-password {
                color: #aaa;
            }
        }
    }

    > div:nth-child(2) {
        max-width: 50%;
        width: 100%;
        height: 100%;
        background-color: #303030;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
            width: 200px;
        }
        img.farm {
            max-width: 400px;
            width: 100%;
            margin-top: 50px;
            filter: drop-shadow(1px 1px 12px rgba(240, 240, 240, 0.075));
        }
        a {
            font-size: 11px;
            color: #F7F7F7;
            margin-top: -12px;
        }
        @media screen and (max-width: 968px) {
            display: none;   
        }
    }
`

const PasswordButton = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    right: 5px;
    top: 50%;
    transform: translateY(-50%);
`

type InputProps = {
    invalid: boolean
}

const Input = styled.input<InputProps>`
    border-radius: 8px;
    border: 1px solid #20202044;
    padding: 6px 12px;
    background-color: ${colors.white};
    &:focus {
        outline-color: #454545;
    }
    &:invalid {
        border-color: ${p => p.theme.colors.danger};
    }
`

const KeepLoggedInBox = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 4px;
    input {
        accent-color: #101010;
        margin-right: 8px;
    }
    label {
        color: #202020;
        font-weight: 500;
    }
    @media screen and (max-width: 968px) {
        input, label {
            accent-color: #F7F7F7;
            color: #F7F7F7;
        } 
    }
`


export default Login