import React from 'react'
import { Button } from '../../styles/common/buttons'
import ModalBase from './ModalBase'
import styled from 'styled-components'

const ModalConfirmDecision = ({
  title,
  message,
  handleConfirm,
  confirmText,
  confirmButtonVariant,
  isOpen,
  closeModal,
}) => {
  return (
    <ModalBase
        isOpen={isOpen}
        closeModal={closeModal}
        contentLabel="Modal edit user information"
        title={title}
    >
        <Content>
            <div>
                { message }
            </div>
            <DecisionButtons>
                <Button 
                    variant="danger-outline"
                    onClick={closeModal}
                >
                    Cancel
                </Button>
                <Button
                    variant={confirmButtonVariant ? confirmButtonVariant : "success"}
                    onClick={handleConfirm}
                >
                    { confirmText ? confirmText : 'Confirm' }
                </Button>
            </DecisionButtons>
        </Content>
    </ModalBase>
  )
}

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`

const DecisionButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    button {
        width: 49%;
    }
`

export default ModalConfirmDecision