import React, { useState } from 'react'
import { Breadcrumb } from '@/components/ui'
import Layout from '../../layout'
import { CardContent } from '../../styles/features/cards'
import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import MyProfile from './Sections/MyProfile'
import Notifications from './Sections/Notifications'
import Security from './Sections/Security'

function Settings() {
  type Section = "MY_PROFILE" | "SECURITY" | "NOTIFICATIONS"
  const [ currSection, setCurrSection ] = useState<Section>("MY_PROFILE");

  const sections = {
    "MY_PROFILE": () => <MyProfile />,
    "SECURITY": () => <Security />,
    "NOTIFICATIONS": () => <Notifications />,
  }

  function handleSectionChange(section : Section) {
    setCurrSection(section);
  }

  return (
    <Layout container>
      <Breadcrumb 
        currentLink={'Settings'}
      />

      <Content>
        <FlexContainer>
          <nav>
            <ul>
              <li>
                <button 
                  className={currSection === "MY_PROFILE" ? "active" : ""}
                  onClick={() => handleSectionChange("MY_PROFILE")}
                >
                  My Profile
                </button>
              </li>
              <li>
                <button
                  className={currSection === "SECURITY" ? "active" : ""}
                  onClick={() => handleSectionChange("SECURITY")}
                >
                  Security
                </button>
              </li>
              <li>
                <button
                  className={currSection === "NOTIFICATIONS" ? "active" : ""}
                  onClick={() => handleSectionChange("NOTIFICATIONS")}
                >
                  Notifications
                </button>
              </li>
            </ul>
          </nav>

          { sections[currSection]() }

        </FlexContainer>
      </Content>

      <ToastContainer 
        autoClose={2000}
        hideProgressBar
      />

    </Layout>
  )
}

const Content = styled(CardContent)`
  h3 {
    margin-bottom: 15px;
  }
  padding: 10px;
`

const FlexContainer = styled.div`
  display: flex;
  column-gap: 10px;
  height: 100%;
  nav {
    max-width: 120px; 
    width: 100%;
    ul {
      display: flex;
      flex-direction: column;
      row-gap: 10px;
      li button {
        font-size: 16px;
        width: 100%;
        padding: 8px 12px;
        color: ${p => p.theme.colors.gray_medium};
        transition: all 250ms;
        &.active, &:hover {
          border-radius: 8px;
          color: ${p => p.theme.colors.primary_dark};
          background-color: ${p => p.theme.colors.primary_light+'44'};
        }
        &.active {
          font-weight: 700;
        }
      }
    }
  }
  section {
    border-left: 1px solid ${p => p.theme.colors.gray_light+'55'};
    padding-left: 20px;
    flex: 1;
  }
  @media screen and (max-width: 968px) {
    flex-direction: column;
    nav ul {
      flex-direction: row;
      li button {
        width: fit-content;
        text-wrap: nowrap;
      }
    }
    section {
      border-left: none;
      margin-top: 10px;
      padding: 0 10px;
    }
  }
`

export default Settings