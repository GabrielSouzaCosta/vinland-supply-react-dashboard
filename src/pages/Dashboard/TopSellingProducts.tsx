import { Product as ProductProps } from '@/@types/product'
import useGetThemeColors from '@/hooks/useGetThemeColors'
import { FlexDiv } from '@/styles/common/layout'
import { P } from '@/styles/common/texts'
import React from 'react'
import { IoStarHalfSharp, IoStarSharp } from 'react-icons/io5'
import styled from 'styled-components'

const productsData = [
    {
        name: 'Wine',
        sold: 60400,
        unit_price: '$12.99',
        total_revenue: 784596,
        total_profit: 400000,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    {
        name: 'Gorgonzola',
        sold: 29100,
        unit_price: '$25.49',
        total_revenue: 741759,
        total_profit: 390000,
        rating: 4.2,
        image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
    },
    {
        name: 'Artesanal Bread',
        sold: 28400,
        unit_price: '$5.99',
        total_revenue: 170116,
        total_profit: 135230,
        rating: 4.8,
        image: 'https://images.unsplash.com/photo-1536534028025-68598ea8af44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80'
    },
    {
        name: 'Craft Beer',
        sold: 25000,
        unit_price: '$7.99',
        total_revenue: 199750,
        total_profit: 139400,
        rating: 4.9,
        image: 'https://images.unsplash.com/photo-1597822738124-151fb72dcb79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
]

const Product = ({
    name,
    image,
    rating,
    sold,
}: ProductProps) => 
{
    const colors = useGetThemeColors();
    let stars = [];
    for (let i=1; i < 5; i++) {
        stars.push(i);
    }

    return (
        <ProductItem>
            <img 
                src={image}
                alt=""
                loading='lazy'
            />
    
            <div>
                <p>
                    { name }
                </p>
                
                <p>
                    { sold } sold
                </p>

                <FlexDiv gapY="5px" justify="start">
                    {stars.map((item) => (
                        <IoStarSharp 
                            key={item}
                            color={colors.primary_dark}
                            size={18}
                        />
                    ))}
                    {rating && rating > 4.5 &&
                        <IoStarHalfSharp
                        color={colors.primary_dark}
                        size={18}
                        />
                    }
                </FlexDiv>
    
            </div>
        </ProductItem>
    )
}

const ProductItem = styled.div`
    width: 100%;
    display: flex;
    column-gap: 15px;
    img {
        border-radius: 8px;
        width: 100px;
        height: 100px;
        object-fit: cover;
        box-shadow: 0px 2px 12px ${p => p.theme.colors.black_extra_light+'11'};
    }
    p:first-child {
        font-size: 1.5rem;
        margin-bottom: 5px;
    }
    p:nth-child(2) {
        font-size: 1.2rem;
        color: ${p => p.theme.colors.gray_medium};
        margin-bottom: 5px;
    }
`

const TopSellingProducts = () => {
  return (
    <section>
        <P>
            Top Selling Products
        </P>

        <ProductsContainer>
            {productsData.map(item => (
                    <Product
                        key={item.name}
                        name={item.name}
                        image={item.image}
                        rating={item.rating}
                        sold={item.sold}
                    />
                ))
            }
        </ProductsContainer>
        
    </section>
  )
}

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    row-gap: 10px;
`

export default TopSellingProducts