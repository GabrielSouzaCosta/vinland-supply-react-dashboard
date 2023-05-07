import React from 'react'
import { Button } from '../../../styles/common/buttons'
import { Input, InputContainer } from '../../../styles/common/inputs'
import { H3, P, P2, P3 } from '../../../styles/common/texts'
import styled from 'styled-components'
import { toast } from 'react-toastify'
import { IoCheckmark, IoLockClosed } from 'react-icons/io5'
import { FlexDiv } from '../../../styles/common/layout'
import { FormProvider, useForm } from 'react-hook-form'

const Security = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    function handleUpdatePassword(data) {
        toast.success("Successfully updated password!", {
            position: toast.POSITION.BOTTOM_RIGHT
        });
    }

    return (
        <section>
            <H3>
                Security
            </H3>

            <FormProvider register={register}>
                <FormUpdatePassword onSubmit={handleSubmit(handleUpdatePassword)}>
                    <FlexDiv gapX="5px" justify="start" mb="10px" id="header">
                        <IoLockClosed />
                        <P2 fw="600">
                            Update Password
                        </P2>
                    </FlexDiv>

                    <InputContainer label="Current Password">
                        <Input 
                            type="password"
                            placeholder="Password"
                            name="current_password"
                            validation={{ required: true }}
                            error={errors.current_password}
                        />
                        {errors.current_password && 
                            <P color={'danger'} fw={'600'} mt="4px">
                                Please enter your current password.
                            </P>
                        }
                    </InputContainer>
                    <InputContainer label="New Password">
                        <Input 
                            type="password"
                            placeholder="New password"
                            name="new_password"
                            validation={{ required: true }}
                            error={errors.new_password}
                        />
                        {errors.new_password && 
                            <P color={'danger'} fw={'600'} mt="4px">
                                Please enter the new password.
                            </P>
                        }
                    </InputContainer>
                    <InputContainer label="Repeat New Password">
                        <Input 
                            type="password"
                            placeholder="Repeat password"
                            name="repeat_password"
                            validation={{ required: true }}
                            error={errors.repeat_password}
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
            </FormProvider>

        </section>
    )
}

const FormUpdatePassword = styled.form`
    width: 35%;
    > div, input, button {
        width: 100%;
    }
    button {
        margin-top: 15px;
    }
    div#header {
        color: ${p => p.theme.colors.primary_dark};
        font-size: 24px;
    }
`

export default Security