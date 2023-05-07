import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { IoCheckmark, IoClose } from 'react-icons/io5';
import styled from 'styled-components';
import { css } from 'styled-components';
import { useStateContext } from '../../../context/ContextProvider';
import { FlexDiv } from '../../../styles/common/layout';
import { colors } from '../../../styles/common/theme';

const BinaryButton = ({
    isToggled,
    handleToggle,
}) => {
    const { theme } = useStateContext();

    return (
        <BinaryButtonContainer darkMode={theme === 'dark'}>
            <ActiveButton 
                initial={{ left: isToggled ? '0' : '121px', backgroundColor: isToggled ? colors.success : colors.danger }}
                animate={{ 
                    left: isToggled ? '0' : '121px',
                    transitionEnd: {
                        backgroundColor: isToggled ? colors.success : colors.danger
                    }
                }}
                transition={{ type: "timing", duration: 0.25 }}
                isToggled={isToggled}
            />
            <Inner>
                <button 
                    type="button" 
                    style={{ color: isToggled ? '#F7F7F7' : '#202020' }}
                    onClick={() => handleToggle(true)}
                >
                    <IoCheckmark size={20} />
                    Activated
                </button>
                <button
                    type="button" 
                    style={{ color: isToggled ? '#202020' : '#F7F7F7'}}
                    onClick={() => handleToggle(false)}
                >
                    <IoClose size={20} />
                    Not activated
                </button>
            </Inner>
        </BinaryButtonContainer>
    )
}

const BinaryButtonContainer = styled.div`
    width: 260px;
    padding: 0;
    border: 2px solid ${p => p.theme.colors.black_extra_light};
    border-radius: 50px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    ${p => p.darkMode && css`
        background-color: ${p => p.theme.colors.black};
    `}
`

const Inner = styled.div`
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: auto;
        font-weight: 600;
        :first-child {
            margin-right: 30px;
        }
    }
`

const ActiveButton = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: 100%;
    border-radius: 50px;
    width: 135px;
    z-index: 1;
`

export default BinaryButton