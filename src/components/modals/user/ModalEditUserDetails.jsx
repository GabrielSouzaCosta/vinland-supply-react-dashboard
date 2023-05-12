import React from 'react'
import { FormProvider } from 'react-hook-form'
import ModalBase from '../ModalBase'
import { InputContainer, Input, InputFile } from '@/styles/common/inputs'
import { Button, ToggleButton } from '../../../styles/common/buttons'
import { IoAdd, IoCheckmark } from 'react-icons/io5'
import useEditUser from './useEditUser'
import styled from 'styled-components'
import { P } from '../../../styles/common/texts'


const ModalEditUserDetails = ({
  user,
  isOpen,
  closeModal,
  users,
  setUsers,
}) => {

  const { 
    apiManager, 
    user_type, 
    register,
    watch,
    handleSubmit,
    errors,
  } = useEditUser({ users, setUsers, user, closeModal });

  return (
    <ModalBase
      isOpen={isOpen}
      closeModal={closeModal}
      title={'Edit User - '+user.name}
      contentLabel="Modal edit user information"
    >
      <FormProvider register={register}>
        <FormEditUser onSubmit={handleSubmit(apiManager.handleUpdateUser)}>
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

          <Button 
            type="submit" 
            iconButton
            variant="success"
          >
            <IoCheckmark size={24} />
            Update User
          </Button>

        </FormEditUser>
      </FormProvider>
    </ModalBase>
  )
}

const FormEditUser = styled.form`
  margin-top: 15px;
  max-width: 100%;
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

export default ModalEditUserDetails