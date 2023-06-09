import React from 'react'
import { Container, Div, FlexDiv } from '../styles/common/layout'
import Aside from './Aside'
import Navbar from './Navbar'
import styled from 'styled-components'
import { useStateContext } from '../context/ContextProvider'
import Chat from './Chat/Chat'

type Props = {
  container: boolean,
  children: React.ReactNode
}

function Layout({ container=false, children } : Props) {
  const { isSidebarVisible, handleToggleSidebar } = useStateContext();

  return (
    <div style={{ position: 'relative' }}>
      <Navbar 
        isSidebarVisible={isSidebarVisible}
        handleToggleSidebar={handleToggleSidebar}
      />

      <ContentWrapper justify="start" alignItems="start">
        <Aside visible={isSidebarVisible} />
        <Content>
          {container ?
            <Container>
              { children }
            </Container>
          :
            children
          }
        </Content>
      </ContentWrapper>

      <Chat />
    </div>
  )
}

const Content = styled(Div)`
  flex: 1;
  min-width: 0;
  width: 100%;
`

const ContentWrapper = styled(FlexDiv)`
  min-height: calc(100vh - 20px);
  position: relative;
  background-color: ${p => p.theme.colors.background};
`

export default Layout