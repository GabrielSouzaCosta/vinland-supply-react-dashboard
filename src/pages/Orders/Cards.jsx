import React from 'react'
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoCloseOutline, IoReload, IoReloadOutline, IoSwapHorizontalOutline, IoThumbsDownOutline, IoThumbsUpOutline } from 'react-icons/io5'
import { MdOutlineLocalShipping } from 'react-icons/md';
import { css } from 'styled-components';
import { FlexDiv } from '../../styles/common/layout'
import { Card, CardCalloutValue, CardCaption } from '../../styles/features/cards'
import styled from 'styled-components'

const Cards = () => {
  return (
    <CardsContainer>
        <OrdersCard returned>
            <FlexDiv gapX="4px" mb="4px">
                <IoSwapHorizontalOutline
                    size={40}
                />
                <CardCalloutValue>
                    20
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Products returned
            </CardCaption>
        </OrdersCard>
        <OrdersCard shipped>
            <FlexDiv gapX="4px" mb="4px">
                <MdOutlineLocalShipping
                    size={40}
                />
                <CardCalloutValue>
                    600
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Shipped
            </CardCaption>
        </OrdersCard>
        <OrdersCard delivered>
            <FlexDiv gapX="4px" mb="4px">
                <IoCheckmarkCircleOutline 
                    size={40}
                />
                <CardCalloutValue>
                    390
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Delivered
            </CardCaption>
        </OrdersCard>
        <OrdersCard canceled>
            <FlexDiv gapX="4px" mb="4px">
                <IoCloseOutline
                    size={40}
                />
                <CardCalloutValue>
                    20
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Canceled Orders
            </CardCaption>
        </OrdersCard>
        <OrdersCard refunds>
            <FlexDiv gapX="4px" mb="4px">
                <IoReloadOutline
                    size={40}
                />
                <CardCalloutValue>
                    15
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Refunds
            </CardCaption>
        </OrdersCard>
        <OrdersCard problems>
            <FlexDiv gapX="4px" mb="4px">
                <IoThumbsDownOutline 
                    size={40}
                />
                <CardCalloutValue>
                    10
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Customer Complaints
            </CardCaption>
        </OrdersCard>
    </CardsContainer>
  )
}

const CardsContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 968px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const OrdersCard = styled(Card)`
    width: 100%;
    ${p => p.returned && css`
        color: ${p => p.theme.colors.blue};
    `}
    ${p => p.shipped && css`
        color: ${p => p.theme.colors.warning};
    `}
    ${p => p.delivered && css`
        color: ${p => p.theme.colors.success};
    `}
    ${p => p.canceled && css`
        color: ${p => p.theme.colors.danger_variant};
    `}
    ${p => p.reviews && css`
        color: ${p => p.theme.colors.black_extra_light};
    `}
    ${p => p.problems && css`
        color: ${p => p.theme.colors.danger};
    `}
`

export default Cards