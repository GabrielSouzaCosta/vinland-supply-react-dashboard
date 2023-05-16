import React from 'react'
import { CardCalloutValue } from '@/styles/features/cards'
import styled from 'styled-components'
import { IoCartOutline, IoCashOutline, IoHappyOutline, IoPeopleOutline, IoSwapVertical } from 'react-icons/io5'
import { colors } from '@/styles/common/theme'
import { useStateContext } from '@/context/ContextProvider'
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions'

const CardsContainer = () => {
    const { theme } = useStateContext();
    const { window_width } = useGetWindowDimensions();

    return (
        <Container>
            <div>
            <Circle color={'success'}>
                <IoCashOutline
                    size={window_width > 968 ? 36 : 24}
                    color={colors.gray_extra_light}
                />
            </Circle>
            <div>
                <p>
                    Total Revenue
                </p>
                <CardCalloutValue>
                $120,000
                </CardCalloutValue>
            </div>
            </div>

            <div>
                <Circle color="black">
                    <IoCartOutline
                        size={window_width > 968 ? 36 : 24}
                        color={theme === 'light' ? colors.gray_extra_light : colors.black_extra_light}
                    />
                </Circle>
                <div>
                    <p>
                        Sales
                    </p>
                    <CardCalloutValue>
                        1200
                    </CardCalloutValue>
                </div>
            </div>

            <div>
                <Circle color={"blue"}>
                    <IoSwapVertical
                    size={window_width > 968 ? 36 : 24}
                    color={colors.gray_extra_light}
                    />
                </Circle>
                <div>
                    <p>
                    Average Margin
                    </p>
                    <CardCalloutValue>
                    30%
                    </CardCalloutValue>
                </div>
            </div>

            <div>
                <Circle color='primary_medium'>
                    <IoPeopleOutline
                        size={window_width > 968 ? 36 : 24}
                        color={colors.gray_extra_light}
                    />
                </Circle>
                <div>
                    <p>
                        Customers
                    </p>
                    <CardCalloutValue>
                        2600
                    </CardCalloutValue>
                </div>
            </div>


            <div>
                <Circle color="success_variant">
                    <IoHappyOutline
                        size={window_width > 968 ? 36 : 24}
                        color={colors.gray_extra_light}
                    />
                </Circle>
                <div>
                    <p>
                        Customer Happiness
                    </p>
                    <CardCalloutValue>
                        4.7/5
                    </CardCalloutValue>
                </div>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 15px;
    margin-bottom: 20px;
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 20px;
        height: 120px;
        width: 19%;
        border-radius: 8px;
        background-color: ${p => p.theme.colors.white};
        padding: 4px;
        box-shadow: 1px 1px 12px rgba(30, 30, 30, 0.075);
        p:first-child {
            color: ${p => p.theme.colors.gray_medium};
            margin-bottom: 4px;
            font-size: 20px;
        }

        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    @media screen and (max-width: 968px) {
        justify-content: space-between;
        row-gap: 5px;
        > div {
            text-align: center;
            width: 49%;
            flex-direction: column;
            p:first-child {
                font-size: 16px;
                margin-top: 8px;
            }
            p:nth-child(2) {
                color: ${p => p.theme.colors.gray_dark};
                line-height: 18px;
                font-size: 12px;
            }
        }
    }
`

type CircleProps = {
    color: string
}

const Circle = styled.div<CircleProps>`
    width: 60px;
    height: 60px;
    background-color: ${(p) => p.theme.colors[p.color]};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    box-shadow: 1px 1px 12px rgba(30, 30, 30, 0.04);
    @media screen and (max-width: 968px) {
        width: 40px;
        height: 40px;
    }
`

export default CardsContainer