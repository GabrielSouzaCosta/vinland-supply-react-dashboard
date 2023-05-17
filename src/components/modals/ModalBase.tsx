import React from 'react'
import { IoClose, IoCloseCircleOutline } from 'react-icons/io5';
import Modal from 'react-modal'
import { FlexDiv } from '@/styles/common/layout';
import { H3 } from '@/styles/common/texts';
import styled from 'styled-components'
import { colors } from '../../styles/common/theme';
import { useStateContext } from '../../context/ContextProvider';
import { ModalProps } from '../../@types/modal';

Modal.setAppElement('#root');

const ModalBase = ({
    isOpen,
    closeModal,
    title,
    contentLabel,
    children,
} : ModalProps) => {
    const { theme } = useStateContext();

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(240, 240, 240, 0.75)',
            zIndex: 99999999,
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%) scale(0.97)',
            maxWidth: '768px',
            position: 'relative',
            width: '100%',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            boxShadow: '2px 2px 12px rgba(30, 30, 30, 0.05)',
            padding: '10px 20px',
            background: theme === 'dark' ? colors.black_extra_light : colors.white_medium_light
        },
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            contentLabel={contentLabel}
            // @ts-ignore
            style={styles}
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
        
                {children}
            </Content>
        </Modal>
    )
}

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Header = styled(FlexDiv)`
    justify-content: space-between;
    padding-bottom: 6px;
    border-bottom: 1px solid ${p => p.theme.colors.gray+'aa'};
`

const CloseButton = styled.button`
    margin-right: -10px;
    svg {
        transition: all 0.2s;
        color: ${p => p.theme.colors.black};
    }
    &:hover svg{
        color: ${p => p.theme.colors.danger};
    }
`

export default ModalBase