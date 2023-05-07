import React from 'react'
import { IoClose, IoCloseCircleOutline } from 'react-icons/io5';
import Modal from 'react-modal'
import { FlexDiv } from '@/styles/common/layout';
import { H3 } from '@/styles/common/texts';
import styled from 'styled-components'

Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(240, 240, 240, 0.75)',
        zIndex: 99999999
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '968px',
      width: '100%',
      minHeight: '600px',
      borderRadius: '8px',
      boxShadow: '2px 2px 12px rgba(30, 30, 30, 0.05)',
      padding: '10px 20px',
    },
  };

const ModalBase = ({
    isOpen,
    closeModal,
    title,
    contentLabel,
    children,
}) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={contentLabel}
        style={customStyles}
        closeTimeoutMS={200}
    >
        <Content>
            <Header>
                <H3>
                    { title }
                </H3>
                <CloseButton
                    onClick={closeModal}
                >
                    <IoClose
                        size={28}
                    />
                </CloseButton>
            </Header>

            <div>
                {children}
            </div>
        </Content>
    </Modal>
  )
}

const Content = styled.div`
    
`

const Header = styled(FlexDiv)`
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 1px solid ${p => p.theme.colors.gray+'aa'};
`

const CloseButton = styled.button`
    transition: all 0.2s;
    margin-right: -10px;
    &:hover {
        color: ${p => p.theme.colors.danger};
    }
`

export default ModalBase