import React from 'react'
import ModalBase from '../ModalBase'

const ModalDetalhesVeiculo = ({
    isOpen,
    closeModal,
}) => {
  return (
    <ModalBase
        isOpen={isOpen}
        closeModal={closeModal}
        title={'Editar Veículo - QQD4590'}
        contentLabel="Modal editar informações do veículo"
    >

    </ModalBase>
  )
}

export default ModalDetalhesVeiculo