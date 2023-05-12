import React from 'react'
import styled from 'styled-components'
import { H1, H2, P3 } from '../../styles/common/texts'
import { Div, FlexDiv } from '../../styles/common/layout'
import { motion } from 'framer-motion'
import { Card } from '../../styles/features/cards'
import { IoChevronDownOutline, IoChevronUpOutline, IoRibbon, IoRibbonOutline } from 'react-icons/io5'
import useGetThemeColors from '@/hooks/useGetThemeColors'
import { css } from 'styled-components'

const Product = ({
    product,
    img,
    sold,
    data,
    ranking
}) => {
    const colors = useGetThemeColors();

    return (
        <TopSectionCard>
            <img src={img} alt="" />
            <CardInner rank={ranking}>
                <FlexDiv gapX="5px" className="rank">
                    <P3>
                        { ranking }º
                    </P3>
                    <IoRibbon 
                        size={40}
                    />
                </FlexDiv>

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
                        color={colors.gray_extra_light}
                    />
                </Div>

                <CardHeader className="card-header">
                    <p>
                        Date
                    </p>
                    <p>
                        $ Profits
                    </p>
                </CardHeader>
                <hr />
                {data.map((item, index) => (
                        <FlexDiv key={index} between mb="5px" className='profit-item'>
                            <p>
                                { item.date }
                            </p>
                            <p>
                                {item.profits.toLocaleString()}
                            </p>
                        </FlexDiv>
                    ))
                }
                <FlexDiv between mb="5px" className='profit-item-total'>
                    <p>
                        Last 6 months
                    </p>
                    <p>
                        { data.map(item => item.profits).reduce((accumulator, value) => accumulator + value).toLocaleString() }
                    </p>
                </FlexDiv>
            </CardInner>
        </TopSectionCard>
    )
} 



const ProductsCards = () => {

    const products = [
        {
            img: "https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
            product: "Wine",
            sold: "60,400",
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
                },
                {
                    date: 'December/2022',
                    profits: 40000
                },
                {
                    date: 'November/2022',
                    profits: 31200,
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
                },
                {
                    date: 'December/2022',
                    profits: 40000
                },
                {
                    date: 'November/2022',
                    profits: 31200,
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
                },
                {
                    date: 'December/2022',
                    profits: 40000
                },
                {
                    date: 'November/2022',
                    profits: 31200,
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
                },
                {
                    date: 'December/2022',
                    profits: 40000
                },
                {
                    date: 'November/2022',
                    profits: 31200,
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
                {products.map((item, index) => (
                        <Product
                            key={index}
                            img={item.img}
                            product={item.product}
                            sold={item.sold}
                            data={item.data}
                            ranking={index+1}
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
  box-shadow: 2px 2px 12px rgba(20, 20, 20, 0.15);
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
    justify-content: center;
    border-radius: 8px;
    .rank {
        display: flex;
    }
    #arrow-down {
        display: none;
    }
  }
`

const CardInner = styled.div`
  background-color: ${p => p.theme.colors.gray_dark+'DE'};
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
	.rank {
		display: none;
		margin-bottom: 20px;
		color: ${p => p.theme.colors.primary_light};
		width: 100%;
	}
	${p => p.rank === 1 && css`
		svg, .card-header p {
			color: ${p => '#FFC312'};
		}
		hr {
			border-color: ${p => '#FFC31288'};
		}
	`}
	${p => p.rank === 2 && css`
		svg, .card-header p {
			color: ${p => p.theme.colors.primary_light};
		}
		hr {
			border-color: ${p => p.theme.colors.primary_light+'88'};
		}
	`}
	${p => p.rank === 3 && css`
		svg, .card-header p {
			color: ${p => p.theme.colors.gray_light};
		}
		hr {
			border-color: ${p => p.theme.colors.gray_light+'88'};
		}
	`}
	${p => p.rank === 4 && css`
		svg, .card-header p {
			color: ${p =>'#d39251'};
		}
		hr {
			border-color: ${p =>'#d3925188'};
		}
	`}

  .profit-item {
    border-bottom: 1px solid ${p => p.theme.colors.gray_extra_light+'88'};
    padding-bottom: 5px;
  }
  div.profit-item-total p {
    font-weight: 700;
  }
  p {
    color: ${p => p.theme.colors.gray_extra_light};
    font-weight: 500;
    font-size: 20px;
  }
  strong, p.total {
		color: ${p => p.theme.colors.white};
		font-size: 24px;
		font-weight: 600;
		text-shadow: 2px 2px 12px ${p => p.theme.colors.white_medium_light+'32'};
		font-weight: 600;
  }
  hr {
    margin: 2px 0 5px 0;
    width: 100%;
    height: 1px;
  }
`

const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    margin-bottom: 0px;
    p {
      font-weight: 700;
    }
`

export default ProductsCards