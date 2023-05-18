import React from 'react'
import { Button } from '@/styles/common/buttons'
import { ControlledInput, InputContainer, PasswordControlledInput } from '@/styles/common/inputs'
import { H3, P, P2 } from '@/styles/common/texts'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { IoCheckmark, IoLockClosed } from 'react-icons/io5'
import { FlexDiv } from '@/styles/common/layout'
import { useForm } from 'react-hook-form'

type FormValues = {
    current_password: string,
    new_password: string,
    repeat_password: string
}

const Security = () => {
    const { control, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
        defaultValues: {
            current_password: '',
            new_password: '',
            repeat_password: '',
        }
    });
  
    function handleUpdatePassword(data: FormValues) {
        reset();
        toast.success("Successfully updated password!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (
        <section>
            <H3>
                Security
            </H3>

            <FormUpdatePassword onSubmit={handleSubmit(handleUpdatePassword)}>
                <FlexDiv gapX="5px" justify="start" mb="10px" id="header">
                    <IoLockClosed />
                    <P2 fw="600">
                        Update Password
                    </P2>
                </FlexDiv>

                <InputContainer label="Current Password">
                    <PasswordControlledInput
                        placeholder="Password"
                        name="current_password"
                        rules={{ required: true }}
                        control={control}
                    />
                    {errors.current_password && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter your current password.
                        </P>
                    }
                </InputContainer>
                <InputContainer label="New Password">
                    <PasswordControlledInput
                        placeholder="New password"
                        name="new_password"
                        rules={{ required: true }}
                        control={control}
                    />
                    {errors.new_password && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter the new password.
                        </P>
                    }
                </InputContainer>
                <InputContainer label="Repeat New Password">
                    <PasswordControlledInput
                        placeholder="Repeat password"
                        name="repeat_password"
                        rules={{ required: true }}
                        control={control}
                    />
                    {errors.repeat_password && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please confirm the new password.
                        </P>
                    }
                </InputContainer>
                <Button variant="success" type="submit" iconButton>
                    <IoCheckmark size={24} />
                    Update password
                </Button>
            </FormUpdatePassword>

        </section>
    )
}

const FormUpdatePassword = styled.form`
    width: 35%;
    > div, input, button[type="submit"] {
        width: 100%;
    }
    button[type="submit"] {
        margin-top: 15px;
    }
    div#header {
        color: ${p => p.theme.colors.primary_dark};
        font-size: 24px;
    }
    @media screen and (max-width: 968px) {
        width: 100%;
    }
`

export default Security