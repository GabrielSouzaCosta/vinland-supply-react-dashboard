import React from 'react'
import Layout from '../layout'
import styled from 'styled-components'
import { H1, P3 } from '../styles/common/texts'
import { Button } from '../styles/common/buttons'
import { Link } from 'react-router-dom'


function NotFound() {
  return (
    <Layout container>

      <Content>
        <img 
          src="/images/404.png"
        />
        <a href="https://storyset.com/internet">Internet illustrations by Storyset</a>

        <H1>
          Page Not Found
        </H1>

        <P3>
          Back to Home page or navigate to another page
        </P3>

        <Link to="/">
          <Button>
            Back to Home Page
          </Button>
        </Link>

      </Content>

    </Layout>
  )
}

const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 200px);
  a {
    font-size: 11px;
    color: ${p => p.theme.colors.primary_dark};
    margin-bottom: 8px;
  }
  img {
    max-width: 350px;
  }
  p {
    margin-bottom: 20px;
    margin-top: 10px;
    color: ${p => p.theme.colors.gray_dark};
  }
  button {
    padding: 10px 20px;
  }
`

export default NotFound