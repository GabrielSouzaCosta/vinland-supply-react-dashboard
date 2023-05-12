import React from 'react'
import { ToastContainer } from 'react-toastify'
import { useStateContext } from '../../context/ContextProvider'
import styled from 'styled-components'

const StyledToastContainer = () => {
    const { theme } = useStateContext();

    return (
        <StyledContainer
            autoClose={2000}
            hideProgressBar
        />
    )
}

const StyledContainer = styled(ToastContainer)`
  .Toastify__toast {
    background-color: ${p => p.theme.colors.white_light};
  }
  .Toastify__toast-body {
    color: ${p => p.theme.colors.black};
  }
  .Toastify__close-button {
    color: ${p => p.theme.colors.black};
  }
`;

export default StyledToastContainer