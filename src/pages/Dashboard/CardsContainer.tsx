import React from 'react'
import { CardCalloutValue } from '@/styles/features/cards'
import styled from 'styled-components'
import { IoCartOutline, IoCashOutline, IoHappyOutline, IoPeopleOutline, IoSwapVertical } from 'react-icons/io5'
import { colors } from '@/styles/common/theme'
import { useStateContext } from '@/context/ContextProvider'

const CardsContainer = () => {
    const { theme } = useStateContext();

    return (
        <Container>
            <div>
            <Circle color={'success'}>
                <IoCashOutline
                    size={36}
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
                <Circle color='primary_medium'>
                    <IoPeopleOutline
                        size={36}
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
                <Circle color="black">
                    <IoCartOutline
                        size={36}
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
                    size={36}
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
                <Circle color="success_variant">
                    <IoHappyOutline
                        size={36}
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
    p:nth-child(3) {
      color: ${p => p.theme.colors.gray_dark};
      margin-top: 8px;
      font-size: 16px;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
`

export default CardsContainer