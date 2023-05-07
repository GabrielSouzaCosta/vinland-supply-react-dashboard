import React from 'react'
import { P2 } from '@/styles/common/texts'
import styled from 'styled-components'
import { FlexDiv } from '@/styles/common/layout'
import { Input } from '../../../styles/common/inputs'

const FilterByDate = () => {
  return (
    <div>
        <P2>
            Search by Date:
        </P2>
        <FlexDiv gapX="10px" mt="4px">
            <DateInput type="date" />
            <DateInput type="date" />
            <VerticalLine />
        </FlexDiv>
    </div>
  )
}

const DateInput = styled(Input)`
    height: 40px;
    padding: 4px 8px 4px 10px;
    border: 1px solid #20202040;
    box-shadow: 1px 1px 10px rgba(20, 20, 20, 0.1);
`

const VerticalLine = styled.div`
    height: 28px;
    border: 1px solid ${p => p.theme.colors.gray};
`

export default FilterByDate