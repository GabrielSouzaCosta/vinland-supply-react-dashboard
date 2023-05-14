import React, { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'
import { colors } from '@/styles/common/theme'
import { P, P2, H3 } from '@/styles/common/texts'
import { Container, Div, FlexDiv } from '../styles/common/layout'
import { Link, useNavigate } from 'react-router-dom'
import Hamburger from 'hamburger-react'
import { useStateContext } from '../context/ContextProvider'
import { AnimatePresence, motion } from 'framer-motion'
import { IoChevronDown, IoExitOutline } from 'react-icons/io5'
import ToggleThemeButton from '../components/ui/ToggleThemeButton'

type Props = {
  isSidebarVisible: boolean,
  handleToggleSidebar: () => void,
}

const Navbar = ({
  isSidebarVisible,
  handleToggleSidebar
} : Props) => {

  const { theme } = useStateContext();
  const navigate = useNavigate();

  const [ isDropdownVisible, setIsDropdownVisible ] = useState(false);

  function handleShowDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  function handleLogout() {
    navigate('/login')
  }

  return (
    <>
      <Nav>
        <FlexDiv>
          <div>
            <Hamburger 
              toggled={isSidebarVisible} 
              toggle={handleToggleSidebar}
              color={theme === 'light' ? colors.black_extra_light : colors.white_medium_light}
            />
          </div>
          <NavContainer>
            <img src="/images/Logo.png" alt="Vinland Supply Co." style={{ height: '75px' }} />
          </NavContainer>
        </FlexDiv>

        <FlexDiv 
          gapX={'10px'} 
        >
          <img src={`https://i.pinimg.com/originals/d1/d3/43/d1d343e61eb866b2e3d6baf79671d305.jpg`} alt="Gabriel" style={{ borderRadius: '50%' }} width={50} />

          <UserDetails 
            onClick={handleShowDropdown}
            type="button"
          >
            <P2 fw={600} mb={'4px'}>
              Thorfinn Karlsefni
            </P2>
            <FlexDiv between>
              <P uppercase>
                Manager
              </P>
              <motion.div
                animate={{ rotate: isDropdownVisible ? '180deg' : '0deg' }}
                transition={{ type: "timing", duration: 0.2 }}
              >
                <IoChevronDown />
              </motion.div>
            </FlexDiv>
          </UserDetails>

          {theme &&
            <ToggleThemeButton />
          }


          <AnimatePresence>
            {isDropdownVisible && (
              <NavbarMenu
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <NavbarMenuItem 
                  onClick={handleLogout}
                  whileHover={{ color: colors.danger }} 
                  style={{ fontSize: '16px' }}
                >
                  <IoExitOutline />
                  Logout
                </NavbarMenuItem>
              </NavbarMenu>
            )}
          </AnimatePresence>
        </FlexDiv>


      </Nav>
    </>
  )
}

const Nav = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${p => p.theme.colors.navbar};
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(10, 10, 10, 0.02);
  height: 90px;
  z-index: 100;
  border-bottom: 1px solid #20202011;
`

const NavContainer = styled(Container)`
  margin: 0;
  h3 {
    color: ${p => p.theme.colors.primary_medium};
  }
`

const UserDetails = styled.button`
  cursor: pointer;
  > div > div {
    height: 15px;
  }
  svg {
    transition: all 200ms;
    color: ${p => p.theme.colors.black};
  }
  &:hover {
    svg {
      color: ${p => p.theme.colors.primary_dark};
    }
  }
`

const NavbarMenu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 100%;
  background-color: ${p => p.theme.colors.white+'ee'};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 150px;
  border-radius: 8px;
  border: 1px solid #40404022;
  button {
    color: ${p => p.theme.colors.dark};
  }
`

const NavbarMenuItem = styled(motion.button)`
  color: ${p => p.theme.colors.black};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`

export default Navbar