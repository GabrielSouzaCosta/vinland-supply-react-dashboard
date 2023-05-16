import useGetWindowDimensions from '@/hooks/useGetWindowDimensions'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { IoAddOutline, IoClose } from 'react-icons/io5'
import styled from 'styled-components'
import { sellers } from '.'
import { useStateContext } from '../../../context/ContextProvider'
import { P, P2, P3 } from '../../../styles/common/texts'

const SellersList = () => {
    const { theme } = useStateContext();
    const [ selectedSellers, setSelectedSellers ] = useState([]);
    const { window_width } = useGetWindowDimensions();

    function handleSelectSeller(seller) {
        selectedSellers.some(item => item.name === seller.name) ?
            setSelectedSellers(prevState => prevState.filter(item => item.name !== seller.name))
        :
            setSelectedSellers(prevState => [ ...prevState, seller ])
    }

    function handleDeleteSeller(seller) {
        setSelectedSellers(prevState => prevState.filter(item => item.name !== seller.name))
    }

    return (
        <>
            <P3 mb="8px">
                Sellers
            </P3>
            {selectedSellers.length === sellers.length &&
                <P2 color="primary_dark">
                    All sellers selected.
                </P2>
            }
            <Grid>
                <AnimatePresence>
                    {
                        sellers
                            .filter(item => !selectedSellers.map(selected => selected.name).includes(item.name))
                            .map(item => (
                                <SellerCard
                                    key={item.name}
                                    type="button"
                                    onClick={() => handleSelectSeller(item)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        type: 'timing',
                                        duration: 0.25
                                    }}
                                    dark={theme === 'dark'}
                                >
                                    {window_width > 768 &&
                                        <IoAddOutline size={24} />
                                    }

                                    <img src={item.avatar} alt="" />
                                    <div>
                                        <P2>
                                            { item.name }
                                        </P2>
                                        <P className="sales">
                                            { item.sales } sold
                                        </P>
                                    </div>
                                </SellerCard>
                        ))
                    }
                </AnimatePresence>
            </Grid>
            
            {selectedSellers?.length > 0 &&
                <>
                    <P3 mb="8px" mt="10px" fw={'600'}>
                        Sellers selected for comparison
                    </P3>
                    <Grid>
                        {
                            selectedSellers.map(item => (
                                <SellerCard 
                                    selected
                                    key={item.name}
                                    type="button"
                                    onClick={() => handleDeleteSeller(item)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{
                                        type: 'timing',
                                        duration: 0.25
                                    }}
                                    dark={theme === 'dark'}
                                >
                                    {window_width > 768 && 
                                        <IoClose size={24} />
                                    }
                                    <img src={item.avatar} alt="" />
                                    <div>
                                        <P2>
                                            { item.name }
                                        </P2>
                                        <P className="sales">
                                            { item.sales } sold
                                        </P>
                                    </div>
                                </SellerCard>
                            ))
                        }
                    </Grid>
                </>
            }
        </>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(4, 1fr);  
    }
    @media screen and (max-width: 968px) {
        grid-template-columns: repeat(3, 1fr);  
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        max-height: 200px;
        overflow-y: scroll;
        scroll-snap-type: y mandatory;
        padding: 2px 0;
    }
`

const SellerCard = styled(motion.button)`
    display: flex;
    align-items: center;
    column-gap: 10px;
    width: 100%;
    height: 80px;
    border: 1px solid #30303001;
    box-shadow: 0 0 12px rgba(20, 20, 20, 0.1);
    background-color: ${p => p.theme.colors.white_medium_light};
    border-radius: 8px;
    cursor: pointer;
    transition: all 250ms;
    svg {
        color: ${p => p.theme.colors.black};
    }
    &:hover {
        background: ${p => p.dark ? p.theme.colors.white : p.theme.colors.black_extra_light};
        svg {
            color: ${p => p.selected ? p.theme.colors.danger : p.theme.colors.success};
            filter: brightness(125%);
        }
        p {
            color: ${p => p.dark ? p.theme.colors.black : p.theme.colors.white_medium_light};
            font-weight: 600;
        }
        p.sales {
            color: ${p => p.dark ? p.theme.colors.gray_medium : p.theme.colors.gray_light};
        }
    }
    svg {
        margin-left: 10px;
    }
    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: 1px 1px 12px rgba(20, 20, 20, 0.05);
    }
    div {
        p {
            color: ${p => p.theme.colors.black_extra_light};
            font-weight: 600;
        }
        p.sales {
            color: ${p => p.theme.colors.gray_dark};
        }
    }
    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        height: 100px;
        scroll-snap-align: start;
        flex-shrink: 0;
        img {
            width: 45px;
            height: 45px;
        }
    }
`

export default SellersList