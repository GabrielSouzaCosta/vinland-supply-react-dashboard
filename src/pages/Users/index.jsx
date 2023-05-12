import React, { useState } from 'react'
import { Breadcrumb } from '../../components/ui'
import Layout from '../../layout'
import { H2, H3, P } from '../../styles/common/texts'
import { CardContent } from '../../styles/features/cards'
import { InputContainer, Input, InputFile } from '../../styles/common/inputs'
import TableUsers from './TableUsers'
import styled from 'styled-components'
import { Button, ToggleButton } from '../../styles/common/buttons'
import { ToastContainer } from 'react-toastify'
import { IoAdd } from 'react-icons/io5'
import { FormProvider } from 'react-hook-form'
import useCreateUser from './useCreateUser'
import usersData from './usersData.json'
import StyledToastContainer from '../../components/ui/StyledToastContainer'

function Users() {
  const [ users, setUsers ] = useState(usersData);
  const { 
    apiManager, 
    user_type, 
    register,
    watch,
    handleSubmit,
    errors,
  } = useCreateUser({ setUsers });

  return (
    <Layout container>
        <Breadcrumb 
          currentLink='Users'
        />

        <Content>
          <H2>
            Registered Users
          </H2>

          <TableUsers 
            users={users}
            setUsers={setUsers}
          />

          <H3>
            Create New User
          </H3>

          <FormProvider register={register}>
            <FormCreateUser onSubmit={handleSubmit(apiManager.handleCreateNewUser)}>
              <InputContainer label="Profile picture">
                {watch().avatar &&
                  <img src={watch().avatar} alt="" />
                }
                <InputFile>
                  <input type="file" accept="image/*" onChange={apiManager.handleUploadPicture}/>
                </InputFile>
              </InputContainer>

              <InputContainer label="Name">
                <Input
                  placeholder="Thorkell"
                  name="name"
                  validation={{ required: true }}
                  error={errors.name}
                />
                {errors.name && 
                  <P color={'danger'} fw={'600'} mt="4px">
                      Please enter a name to proceed.
                  </P>
                }
              </InputContainer>
              <InputContainer label="Username">
                <Input
                  placeholder="thorkell"
                  name="username"
                  validation={{ required: true }}
                  error={errors.username}
                />
                {errors.username && 
                  <P color={'danger'} fw={'600'} mt="4px">
                      Please enter an username to proceed.
                  </P>
                }
              </InputContainer>
              <InputContainer label="Phone">
                <Input
                  placeholder="(999) 9999999"
                  name="phone"
                  validation={{ required: true }}
                  error={errors.phone}
                />
                {errors.phone && 
                  <P color={'danger'} fw={'600'} mt="4px">
                      Please enter a phone to proceed.
                  </P>
                }
              </InputContainer>
              <InputContainer label="Email">
                <Input
                  placeholder="thorkell@vinland.com"
                  name="email"
                  validation={{ required: true }}
                  error={errors.email}
                />
                {errors.email && 
                  <P color={'danger'} fw={'600'} mt="4px">
                      Please enter an email to proceed.
                  </P>
                }
              </InputContainer>
              <InputContainer label="Address">
                <Input
                  placeholder="3902 Vinland Street"
                  name="address"
                  validation={{ required: true }}
                  error={errors.address}
                />
                {errors.address && 
                  <P color={'danger'} fw={'600'} mt="4px">
                      Please enter an address to proceed.
                  </P>
                }
              </InputContainer>

              <InputContainer label="User Type" id="user-type">
                <div>
                  <ToggleButton
                    type="button"
                    toggled={user_type === 'seller'}
                    onClick={() => apiManager.handleChangeUserType('seller')}
                  >
                    Seller
                  </ToggleButton>
                  <ToggleButton
                    type="button"
                    toggled={user_type === 'manager'}
                    onClick={() => apiManager.handleChangeUserType('manager')}
                  >
                    Manager
                  </ToggleButton>
                </div>
              </InputContainer>

              <Button type="submit" iconButton>
                <IoAdd size={24} />
                Create New User
              </Button>

            </FormCreateUser>
          </FormProvider>
        </Content>

        <StyledToastContainer />
    </Layout>
  )
}

const Content = styled(CardContent)`
  h2 {
    margin-bottom: 20px;
  }
  h3 {
    margin-top: 20px;
  }
`

const FormCreateUser = styled.form`
  margin-top: 15px;
  max-width: 468px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 15px;
  }
  input, button, .input-container {
    width: 100%;
  }
  button[type="submit"] {
    margin-top: 20px;
  }
  div#user-type div {
    display: flex;
    column-gap: 10px;
    button {
      width: 30%;
    }
  } 
`

export default Users