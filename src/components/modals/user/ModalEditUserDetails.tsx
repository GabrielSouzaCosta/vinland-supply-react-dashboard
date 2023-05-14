import React from 'react'
import { FormProvider } from 'react-hook-form'
import ModalBase from '../ModalBase'
import { InputContainer, Input, InputFile } from '@/styles/common/inputs'
import { Button, ToggleButton } from '../../../styles/common/buttons'
import { IoCheckmark } from 'react-icons/io5'
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
    control, 
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
            control={control}
            name="name"
            rules={{ required: true }}
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
          <Input
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
          <Input
            placeholder="3902 Vinland Street"
            name="address"
            control={control}
            rules={{ required: true }}
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