import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
import { FlexDiv } from '../../styles/common/layout';
import { P } from '../../styles/common/texts';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { InputContainer } from '../../styles/common/inputs';
import { Button } from '../../styles/common/buttons';
import { colors } from '../../styles/common/theme';

type LoginCredentials = {
    username: string,
    password: string,
}

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<LoginCredentials>();
    const navigate = useNavigate();

    function handleLogin<SubmitHandler>({ username, password }: LoginCredentials) {
        console.log(username, password);
        navigate('/');
    }

    return (
        <Main>
            <div>
                <form onSubmit={handleSubmit(handleLogin)}>
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
                        <Input 
                            type="password"
                            placeholder='SuperSecretPassword'
                            invalid={!!errors.password}
                            { ...register('password', { required: true }) }
                        />
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
         div.input-container, div.input-container input, button {
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
        button {
            margin-top: 10px;
            background-color: #303030;
            border: 1px solid #303030;
            color: #F7F7F7;
            &:hover {
                box-shadow: 1px 1px 12px rgba(20, 20, 20, 0.2);
            }
        }
        #forgot-password {
            color: ${p => p.theme.colors.danger};
            margin-top: 20px;
            font-weight: 600;
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
    }
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
`


export default Login