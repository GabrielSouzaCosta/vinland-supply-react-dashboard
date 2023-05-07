import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FlexDiv } from '../styles/common/layout'
import styled from 'styled-components'
import { IoArrowForward, IoBarChartOutline, IoBeerOutline, IoBusinessOutline, IoCashOutline, IoChevronDown, IoHomeOutline, IoPeopleOutline, IoPersonOutline, IoPieChartOutline, IoPodiumOutline, IoSettingsOutline, IoStatsChartOutline, IoStorefrontOutline } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { css } from 'styled-components'
import { useStateContext } from '../context/ContextProvider'


const Menu = ({ title, icon, items }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    function toggleMenu() {
      setIsOpen(!isOpen);
    }
  
    return (
        <>
            <li>
                <AsideNavItem menu>
                    <AsideNavButton
                        onClick={toggleMenu}
                    >
                        <FlexDiv fullWidth between>

                            <FlexDiv gapX="15px" className='title'>
                                <span>
                                    { icon }
                                </span>
                                <AsideLinkText>
                                    { title }
                                </AsideLinkText>
                            </FlexDiv>

                            <motion.div
                                animate={{
                                    rotate: isOpen ? 180 : 0
                                }}
                                style={{ display: 'flex', alignItems: 'center' }}
                            >
                                <IoChevronDown 
                                    size={18}
                                />
                            </motion.div>
                        </FlexDiv>
                    </AsideNavButton>
                </AsideNavItem>
            </li>
            
            <AnimatePresence>
                {isOpen &&
                    <motion.ul 
                        style={{ width: '100%' }}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        {
                            items.map(item => (
                                <motion.div
                                    whileHover={{ transform: 'translateX(10px)' }}
                                >
                                    <li>
                                        <AsideNavItem menuItem>
                                            <AsideNavLink to={item.route}>
                                                <IoArrowForward 
                                                    size={20}
                                                />
                                                <AsideLinkText menuItem>
                                                    { item.name }
                                                </AsideLinkText>
                                            </AsideNavLink>
                                        </AsideNavItem>
                                    </li>
                                </motion.div>
                            ))
                        }
                    </motion.ul>
                }
            </AnimatePresence>
        </>
    );
}

const Aside = ({
    visible
}) => {
    const { theme } = useStateContext();

    return (
        <StyledAside 
            visible={visible} 
            className="custom-scrollbar thin-scrollbar"
            dark={theme === 'dark'}
        >
            <Links visible={visible} >
                <CategoryTitle visible={visible}>
                    <IoHomeOutline size={18}/>
                    Company
                </CategoryTitle>

                <li>
                    <Link to="/">
                        <IoBarChartOutline
                            size={24}
                        />
                        Overview
                    </Link>
                </li>
                <li>
                    <Link to="/products">
                        <IoBeerOutline
                            size={24}
                        />
                        Products
                    </Link>
                </li>
                <li>
                    <Link to="/orders">
                        <IoStorefrontOutline
                            size={24}
                        />
                        Orders
                    </Link>
                </li>

                <li>
                    <Link to="/customers">
                        <IoPeopleOutline
                            size={24}
                        />
                        Customers
                    </Link>
                </li>

                <CategoryTitle visible={visible}>
                    <IoPieChartOutline size={18} />
                    Reports
                </CategoryTitle>

                <li>
                    <Link to="/reports/sales">
                        <IoStatsChartOutline
                            size={24}
                        />  
                        Sales
                    </Link>
                </li>

                <li>
                    <Link to="/reports/users-performance">
                        <IoPodiumOutline
                            size={24}
                        />  
                        Sellers Performance
                    </Link>
                </li>

                <CategoryTitle visible={visible}>
                    <IoBusinessOutline size={18} />
                    SYSTEM
                </CategoryTitle>

                <li>
                    <Link to="/system/users">
                        <IoPersonOutline
                            size={20}
                        />
                        Users
                    </Link>
                </li>

                <li>
                    <Link to="/system/settings">
                        <IoSettingsOutline
                            size={20}
                        />
                        Settings
                    </Link>
                </li>
            </Links>

        </StyledAside>
    )
}

const StyledAside = styled.aside`
    overflow-x: hidden;
    position: sticky;
    top: 80px;
    margin-left: ${p => p.visible ? '0' : '-245px'};
    width: 300px;
    height: calc(100vh - 90px);
    background-color: ${p => p.theme.colors.white};
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.3s;
    box-shadow: 2px 0 12px rgba(10, 10, 10, 0.04);
    border-right: 1px solid #20202011;
`

const Links = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
    margin: 0 auto;
    padding: 0 30px;
    li a {
        color: ${p => p.theme.colors.black_extra_light};
        display: flex;
        align-items: center;
        column-gap: 10px;
        transition: all 150ms;
        font-size: 20px;
        &:hover {
            color: ${p => p.theme.colors.primary_dark};
        }
    }

    ${p => p.visible === false && css`
        margin-left: 230px;
        svg {
            margin-right: 30px;
        }
    `}
`

const CategoryTitle = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    color: ${p => p.theme.colors.gray_medium};
    margin-top: 15px;
    margin-bottom: 5px;
    display: ${p => p.visible === false ? 'none' : 'flex'};
    align-items: center;
    column-gap: 10px;
`

export default Aside