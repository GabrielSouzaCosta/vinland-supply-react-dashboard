import React from 'react'
import { IoCheckmarkCircleOutline, IoCloseCircleOutline, IoCloseOutline, IoExitOutline, IoHappyOutline, IoPeopleOutline, IoSwapHorizontalOutline, IoThumbsDownOutline, IoThumbsUpOutline, IoTicketOutline } from 'react-icons/io5'
import { MdOutlineLocalShipping } from 'react-icons/md';
import { css } from 'styled-components';
import { FlexDiv } from '../../styles/common/layout'
import { Card, CardCalloutValue, CardCaption } from '../../styles/features/cards'
import styled from 'styled-components'

const Cards = () => {
  return (
    <CardsContainer>
        <CustomersCard newCustomers>
            <FlexDiv gapX="4px" mb="4px">
                <IoPeopleOutline
                    size={40}
                />
                <CardCalloutValue>
                    20
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                New customers
            </CardCaption>
        </CustomersCard>
        <CustomersCard lostCustomers>
            <FlexDiv gapX="4px" mb="4px">
                <IoExitOutline
                    size={40}
                />
                <CardCalloutValue>
                    2
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Lost customers
            </CardCaption>
        </CustomersCard>
        <CustomersCard tickets>
            <FlexDiv gapX="4px" mb="4px">
                <IoTicketOutline
                    size={40}
                />
                <CardCalloutValue>
                    4
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Open support tickets
            </CardCaption>
        </CustomersCard>
        <CustomersCard happiness>
            <FlexDiv gapX="4px" mb="4px">
                <IoHappyOutline
                    size={40}
                />
                <CardCalloutValue>
                    4.7
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Customer Happiness
            </CardCaption>
        </CustomersCard>
        <CustomersCard reviews>
            <FlexDiv gapX="4px" mb="4px">
                <IoThumbsUpOutline
                    size={40}
                />
                <CardCalloutValue>
                    920
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Positive Reviews
            </CardCaption>
        </CustomersCard>
        <CustomersCard problems>
            <FlexDiv gapX="4px" mb="4px">
                <IoThumbsDownOutline 
                    size={40}
                />
                <CardCalloutValue>
                    10
                </CardCalloutValue>
            </FlexDiv>
            <CardCaption>
                Negative Reviews
            </CardCaption>
        </CustomersCard>
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

const CustomersCard = styled(Card)`
    width: 100%;
    ${p => p.tickets && css`
        color: ${p => p.theme.colors.blue};
    `}
    ${p => p.shipped && css`
        color: ${p => p.theme.colors.warning};
    `}
    ${p => p.newCustomers && css`
        color: ${p => p.theme.colors.success};
    `}
    ${p => p.lostCustomers && css`
        color: ${p => p.theme.colors.danger_variant};
    `}
    ${p => p.happiness && css`
        color: ${p => p.theme.colors.primary_medium};
    `}
    ${p => p.reviews && css`
        color: ${p => p.theme.colors.success_variant};
    `}
    ${p => p.problems && css`
        color: ${p => p.theme.colors.danger};
    `}
`

export default Cards