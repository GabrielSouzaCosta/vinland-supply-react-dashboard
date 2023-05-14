import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { IoBarChartOutline, IoBeerOutline, IoBusinessOutline, IoCashOutline, IoChevronDown, IoHomeOutline, IoPeopleOutline, IoPersonOutline, IoPieChartOutline, IoPodiumOutline, IoSettingsOutline, IoStatsChartOutline, IoStorefrontOutline } from 'react-icons/io5'
import { css } from 'styled-components'
import { useStateContext } from '../context/ContextProvider'

type Props = {
    visible: boolean
}

const Aside = ({
    visible
}: Props) => {
    const { theme } = useStateContext();
    const { pathname } = useLocation();

    return (
        <StyledAside 
            visible={visible} 
            className="custom-scrollbar thin-scrollbar"
        >
            <Links visible={visible} >
                <CategoryTitle visible={visible}>
                    <IoHomeOutline size={18}/>
                    Company
                </CategoryTitle>

                <AsideItem
                    activeLink={pathname === '/'}
                >
                    <Link to="/">
                        <IoBarChartOutline
                            size={24}
                        />
                        Overview
                    </Link>
                </AsideItem>
                <AsideItem
                    activeLink={pathname === '/products'}
                >
                    <Link to="/products">
                        <IoBeerOutline
                            size={24}
                        />
                        Products
                    </Link>
                </AsideItem>
                <AsideItem
                    activeLink={pathname === '/orders'}
                >
                    <Link to="/orders">
                        <IoStorefrontOutline
                            size={24}
                        />
                        Orders
                    </Link>
                </AsideItem>

                <AsideItem
                    activeLink={pathname === '/customers'}
                >
                    <Link to="/customers">
                        <IoPeopleOutline
                            size={24}
                        />
                        Customers
                    </Link>
                </AsideItem>

                <CategoryTitle visible={visible}>
                    <IoPieChartOutline size={18} />
                    Reports
                </CategoryTitle>

                <AsideItem
                    activeLink={pathname === '/reports/sales'}
                >
                    <Link to="/reports/sales">
                        <IoStatsChartOutline
                            size={24}
                        />  
                        Sales
                    </Link>
                </AsideItem>

                <AsideItem
                    activeLink={pathname === '/reports/users-performance'}
                >
                    <Link to="/reports/users-performance">
                        <IoPodiumOutline
                            size={24}
                        />  
                        Sellers Performance
                    </Link>
                </AsideItem>

                <CategoryTitle visible={visible}>
                    <IoBusinessOutline size={18} />
                    SYSTEM
                </CategoryTitle>

                <AsideItem
                    activeLink={pathname === '/system/users'}
                >
                    <Link to="/system/users">
                        <IoPersonOutline
                            size={20}
                        />
                        Users
                    </Link>
                </AsideItem>

                <AsideItem
                    activeLink={pathname === '/system/settings'}
                >
                    <Link to="/system/settings">
                        <IoSettingsOutline
                            size={20}
                        />
                        Settings
                    </Link>
                </AsideItem>
            </Links>

        </StyledAside>
    )
}

type StyledProps = {
    visible?: boolean,
    activeLink?: boolean
}

const StyledAside = styled.aside<StyledProps>`
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

const Links = styled.ul<StyledProps>`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 20px;
    margin: 0 auto;
    padding: 0 30px;
    ${p => p.visible === false && css`
        margin-left: 230px;
        svg {
            margin-right: 30px;
        }
    `}
`

const AsideItem = styled.li<StyledProps>`
    a {
        color: ${p => p.activeLink ? p.theme.colors.primary_dark : p.theme.colors.black_extra_light};
        display: flex;
        align-items: center;
        column-gap: 10px;
        transition: all 150ms;
        font-size: 20px;
        &:hover {
            color: ${p => p.theme.colors.primary_dark};
        }
    }
`

const CategoryTitle = styled.p<StyledProps>`
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