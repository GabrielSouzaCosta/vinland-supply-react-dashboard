import React, { useState } from 'react'
import { Breadcrumb } from '../../components/ui'
import Layout from '../../layout'
import { H2, H3, P } from '../../styles/common/texts'
import { CardContent } from '../../styles/features/cards'
import { InputContainer, InputFile, ControlledInput } from '../../styles/common/inputs'
import TableUsers from './TableUsers'
import styled from 'styled-components'
import { Button, ToggleButton } from '../../styles/common/buttons'
import { IoAdd } from 'react-icons/io5'
import useCreateUser from './useCreateUser'
import usersData from './usersData.json'
import StyledToastContainer from '../../components/ui/StyledToastContainer'
import { User } from '@/@types/user'

function Users() {
  const [ users, setUsers ] = useState<User[]>(usersData);
  const { 
    apiManager,
    control,
    user_type, 
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
              <ControlledInput
                placeholder="Thorkell"
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
              <ControlledInput
                placeholder="thorkell"
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
              <ControlledInput
                placeholder="(999) 9999999"
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
              <ControlledInput
                placeholder="thorkell@vinland.com"
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
              <ControlledInput
                placeholder="3902 Vinland Street"
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
    object-fit: cover;
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