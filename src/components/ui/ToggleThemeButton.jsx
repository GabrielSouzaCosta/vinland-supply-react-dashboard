import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../../context/ContextProvider';
import { FlexDiv } from '../../styles/common/layout';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { colors } from '../../styles/common/theme';

const ToggleContainer = styled(motion.button)`
  background-color: transparent;
  border: 1px solid #404040;
  cursor: pointer;
  width: 60px;
  border-radius: 50px;
    padding: 0;
`;

const ToggleIcon = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #404040;
  position: relative;
`;

const ToggleThemeButton = () => {
    const { theme, toggleTheme } = useStateContext();

    const handleClick = () => {
        toggleTheme();
    };

    return (
        <FlexDiv gapX="10px" ml="15px">
            <IoMoon
                size={20}
                color={theme === "dark" ? colors.primary_dark : colors.gray_dark}
            />
            <ToggleContainer onClick={handleClick}>
                <ToggleIcon
                    animate={{ 
                        x: theme === 'light' ? 30 : 0,
                        backgroundColor: theme === 'light' ? colors.primary_medium : colors.gray_dark
                    }}
                    transition={{ type: 'timing', duration: 0.2 }}
                />
            </ToggleContainer>
            <IoSunny
                size={20}
                color={theme === "dark" ? colors.gray_medium : colors.primary_dark}
            />
        </FlexDiv>
    );
};

export default ToggleThemeButton;
