import React, { useState } from 'react'
import { H3, P, P2, P3 } from '../../../styles/common/texts'
import styled from 'styled-components'
import { FlexDiv } from '../../../styles/common/layout'
import { Button } from '../../../styles/common/buttons'
import { IoCheckmark, IoClose, IoCreateOutline } from 'react-icons/io5'
import { toast } from 'react-toastify'
import { InputContainer, Input } from '@/styles/common/inputs'
import { useForm, useWatch } from 'react-hook-form'
import { User } from '@/@types/user'

const MyProfile = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<User>({
      defaultValues: {
        name: 'Thorfinn Karlsefni',
        username: 'thorfinn',
        email: 'thorfinn@vinland.com',
        phone: '(35) 99999-9999',
        address: '380 Vinland Street',
      }
    });
    const form = useWatch({
      control
    })

    const [ editDetails, setEditDetails ] = useState(false);

    function handleToggleEdition() {
        setEditDetails(!editDetails);
    }
        
    function handleUpdateUserDetails(data: User) {
        toast.success("User information changed successfully!", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
        handleToggleEdition();
    }
    
    return (
        <section>
            <H3>
                My Profile
            </H3>

            <FlexDiv justify="start" fullWidth gapX="10px">
                <img src={`https://i.pinimg.com/originals/d1/d3/43/d1d343e61eb866b2e3d6baf79671d305.jpg`} alt="Gabriel" style={{ borderRadius: '50%' }} width={100} />
                <div>
                <P3 fw={'600'} mb={'4px'}>
                    Thorfinn Karlsefni
                </P3>
                <P2 uppercase>
                    Manager
                </P2>
                </div>
            </FlexDiv>

            <P3 mt="15px" fw={"600"}>
                Personal Information
            </P3>

            {editDetails ?
                <FormUpdateUserDetails onSubmit={handleSubmit(handleUpdateUserDetails)}>
                  <InputContainer label="Name">
                      <Input 
                        placeholder="Thorfinn"
                        name="name"
                        rules={{ required: true }}
                        control={control}
                      />
                      {errors.name && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter a name to proceed.
                        </P>
                      }
                  </InputContainer>

                  <InputContainer label="Username">
                      <Input 
                        placeholder="thorfinn"
                        name="username"
                        rules={{ required: true }}
                        control={control}
                      />
                      {errors.username && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter an username to proceed.
                        </P>
                      }
                  </InputContainer>

                  <InputContainer label="Phone">
                      <Input 
                        placeholder="(99) 99999-9999"
                        name="phone"
                        rules={{ required: true }}
                        control={control}
                      />
                      {errors.phone && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter a phone to proceed.
                        </P>
                      }
                  </InputContainer>

                  <InputContainer label="Email">
                      <Input 
                        placeholder="thorfinn@vinland.com"
                        name="email"
                        rules={{ required: true }}
                        control={control}
                      />
                      {errors.email && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter an email to proceed.
                        </P>
                      }
                  </InputContainer>

                  <InputContainer label="Address">
                      <Input 
                        placeholder="380 Vinland Street"
                        name="address"
                        rules={{ required: true }}
                        control={control}
                      />
                      {errors.address && 
                        <P color={'danger'} fw={'600'} mt="4px">
                            Please enter an address to proceed.
                        </P>
                      }
                  </InputContainer>

                  <FlexDiv between>
                      <Button
                        variant="success"
                        type='submit'
                        iconButton
                      >
                        <IoCheckmark
                            size={28}
                        />
                        Update profile
                      </Button>
                      <Button 
                      type="button"
                      onClick={handleToggleEdition}
                      variant="danger-outline"
                      iconButton
                      >
                        <IoClose
                            size={28}
                        />
                        Cancel
                      </Button>
                  </FlexDiv>
                </FormUpdateUserDetails>
            :
                <UserDetails>
                <div>
                    <P>
                    Name
                    </P>
                    <P>
                    { form.name }
                    </P>
                </div>
                <div>
                    <P>
                    Username
                    </P>
                    <P>
                    { form.username }
                    </P>
                </div>
                <div>
                    <P>
                    Phone
                    </P>
                    <P>
                    { form.phone }
                    </P>
                </div>
                <div>
                    <P>
                    Email
                    </P>
                    <P>
                    { form.email }
                    </P>
                </div>
                <div>
                    <P>
                    Address
                    </P>
                    <P>
                    { form.address }
                    </P>
                </div>

                <Button
                  onClick={handleToggleEdition}
                  iconButton
                >
                    <IoCreateOutline 
                    size={28}
                    />
                    Edit information
                </Button>
              </UserDetails>
            }
        </section>
    )
}

const UserDetails = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 30% 30%;
  gap: 15px;
  div {
    p:first-child {
      font-size: 14px;
      color: ${p => p.theme.colors.gray_dark};
      margin-bottom: 4px;
    }
  }
  button {
    grid-column: 1 / 2; 
    width: fit-content;
    text-wrap: nowrap;
    margin-bottom: 10px;
    margin-top: 15px;
    transition: transform 200ms;
    &:hover {
      transform: scale(102%);
    }
    &:active {
      transform: scale(105%);
    }
  }
`

const FormUpdateUserDetails = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  div {
    p:first-child {
      font-size: 16px;
      color: ${p => p.theme.colors.gray_dark};
      margin-bottom: 4px;
    }
    input {
      color: ${p => p.theme.colors.black};
      font-weight: 600;
      width: 100%;
    }
  }
  button {
    width: 49%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    margin-top: 10px;
    transition: transform 200ms;
    &:hover {
      transform: scale(102%);
    }
    &:active {
      transform: scale(105%);
    }
  }
`

export default MyProfile