import React from 'react'
import styled from 'styled-components'
import { H1, H2 } from '../../styles/common/texts'
import { Div, FlexDiv } from '../../styles/common/layout'
import { motion } from 'framer-motion'
import { Card } from '../../styles/features/cards'
import { IoChevronDownOutline, IoChevronUpOutline, IoRibbonOutline } from 'react-icons/io5'
import { colors } from '../../styles/common/theme'

const Product = ({
    product,
    img,
    sold,
    data,
}) => (
    <TopSectionCard>
        <img src={img} alt="" />
        <CardInner>
            <FlexDiv between mb="5px">
                <strong>
                    { product }
                </strong>
                <p className='total'>
                    { sold } sold
                </p>
            </FlexDiv>

            <Div m="0 auto" id="arrow-down">
                <IoChevronUpOutline 
                    size={24}
                    color={colors.gray_medium}
                />
            </Div>

            <FlexDiv between mb="5px">
                <p>
                    Date
                </p>
                <p>
                    Profits
                </p>
            </FlexDiv>
            <hr />
            {data.map(item => (
                    <FlexDiv between mb="5px">
                        <p>
                            { item.date }
                        </p>
                        <p>
                            ${item.profits}
                        </p>
                    </FlexDiv>
                ))
            }
        </CardInner>
    </TopSectionCard>
)

const ProductsCards = () => {
    const products = [
        {
            img: "https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            product: "Wine",
            sold: "33,400",
            data: [
                {
                    date: 'April/2023',
                    profits: 14000
                },
                {
                    date: 'March/2023',
                    profits: 10000
                },
                {
                    date: 'February/2023',
                    profits: 14000
                },
                {
                    date: 'January/2023',
                    profits: 20000
                }
            ]
        },
        {
            img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
            product: "Gorgonzola",
            sold: "29,100",
            data: [
                {
                    date: 'April/2023',
                    profits: 14000
                },
                {
                    date: 'March/2023',
                    profits: 10000
                },
                {
                    date: 'February/2023',
                    profits: 14000
                },
                {
                    date: 'January/2023',
                    profits: 20000
                }
            ]
        },
        {
            img: "https://images.unsplash.com/photo-1536534028025-68598ea8af44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80",
            product: "Artesanal Bread",
            sold: "28,400",
            data: [
                {
                    date: 'April/2023',
                    profits: 14000
                },
                {
                    date: 'March/2023',
                    profits: 10000
                },
                {
                    date: 'February/2023',
                    profits: 14000
                },
                {
                    date: 'January/2023',
                    profits: 20000
                }
            ]
        },
        {
            img: "https://images.unsplash.com/photo-1597822738124-151fb72dcb79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            product: "Craft Beer",
            sold: "25,000",
            data: [
                {
                    date: 'April/2023',
                    profits: 14000
                },
                {
                    date: 'March/2023',
                    profits: 10000
                },
                {
                    date: 'February/2023',
                    profits: 14000
                },
                {
                    date: 'January/2023',
                    profits: 20000
                }
            ]
        }
    ]

    return (
        <>
            <Header>
                <IoRibbonOutline 
                    size={24}
                />
                <H2>
                    Most Valuable Products
                </H2>
            </Header>
            <CardsContainer>
                {products.map(item => (
                        <Product
                            img={item.img}
                            product={item.product}
                            sold={item.sold}
                            data={item.data}
                        />
                    ))
                }
            </CardsContainer>
        </>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    svg, h2 {
        color: ${p => p.theme.colors.primary_dark};
    }
`

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  flex: 1;
  grid-gap: 10px;
  margin-bottom: 40px;
  margin-top: 10px;
`

const TopSectionCard = styled(Card)`
  position: relative;
  justify-content: start;
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #50505022;
  margin-top: 10px;
  box-shadow: 2px 2px 12px rgba(20, 20, 20, 0.1);
  img {
    &:first-child {
      object-position: 50% 25%;
    }
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  &:hover > div {
    height: 100%;
    border-radius: 8px;
    #arrow-down {
        display: none;
    }
  }
`

const CardInner = styled.div`
  background-color: ${p => p.theme.colors.gray_dark+'cc'};
  position: absolute;
  overflow: hidden;
  right: 0;
  left: 0;
  bottom: 0;
  height: 75px;
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  transition: all 500ms;
  p {
    color: ${p => p.theme.colors.gray_extra_light};
    font-weight: 500;
    font-size: 20px;
  }
  strong {
    background: linear-gradient(135deg, ${p => p.theme.colors.gray_light}, ${p => p.theme.colors.white});
    font-size: 24px;
    font-weight: 600;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
  p.total {
    font-size: 24px;
    background: linear-gradient(135deg, ${p => p.theme.colors.primary_dark}, ${p => p.theme.colors.danger}, ${p => p.theme.colors.white});
    -webkit-background-clip: text;
    text-shadow: 2px 2px 5px rgba(20, 20, 20, 0.2);
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
  hr {
    margin: 2px 0 5px 0;
    width: 100%;
    height: 1px;
  }
`

export default ProductsCards