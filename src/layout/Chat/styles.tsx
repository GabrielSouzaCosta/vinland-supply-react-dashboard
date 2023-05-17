import { colors } from "@/styles/common/theme";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const ButtonOpenChat = styled(motion.button)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${colors.primary_light};
    position: fixed;
    right: 10px;
    bottom: 5px;
`

export const ChatContainer = styled(motion.div)`
  position: fixed;
  right: 10px;
  bottom: 5px;
  background-color: ${p => p.theme.colors.white};
  box-shadow: -2px 2px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid ${p => p.theme.colors.gray_medium+'22'};
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: hidden;
  z-index: 5000;
  @media screen and (max-width: 768px) {
    width: 300px;
    right: 5px;
  } 
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${p => p.theme.colors.white};
  padding: 8px 16px;
  color: ${p => p.theme.colors.black};
  font-size: 18px;
  font-weight: 600;
  border-bottom: 1px solid ${p => p.theme.colors.gray_dark+'22'};
  button {
    padding: 0;
    svg {
        color: ${p => p.theme.colors.black};
        vertical-align: middle;
        transition: all 250ms;
    }
    &:hover {
        svg {
            color: ${p => p.theme.colors.danger}
        }
    }
  }
`;

export const ChatContactHeader = styled.div`
    padding: 4px 16px;
    height: 50px;
    background-color: ${p => p.theme.colors.white+'dd'};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 12px rgba(90, 90, 90, 0.2);
    border-bottom: 1px solid ${p => p.theme.colors.black+'22'};
    img {
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }
    p {
        font-weight: 700;
        &.online {
            color: ${p => p.theme.colors.success};
        }
    }
`

export const ChatBody = styled.div<React.HTMLAttributes<HTMLDivElement>>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 16px;
  background-color: ${p => p.theme.colors.white_medium_light};
  scroll-behavior: smooth;
  overflow-anchor: none; 
`;

type MessageProps = {
    sender: string,
}

export const Message = styled(motion.div)<MessageProps>`
    margin-bottom: 5px;
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
    border-radius: ${p => p.sender === 'thorfinn' ? "20px 0px 20px 20px" :  "0px 20px 20px 20px"} ;
    border: 1px solid ${p => p.theme.colors.gray_dark+'55'};
    box-shadow: 1px 1px 12px rgba(30, 30, 30, 0.1);
    font-weight: 600;
    padding: 10px 20px;
    max-width: 70%;
    p {
        word-break: break-word;
    }
    ${p => p.sender === 'thorfinn' && css
    `
        margin-left: auto;
    `}
    p.time {
        margin-top: 5px;
        font-size: 11px;
        text-align: right;
        color: ${p => p.theme.colors.gray_medium};
    }
`

export const ChatInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  border-top: 1px solid ${p => p.theme.colors.gray_dark+'44'};
  box-shadow: 0 -2px 10px rgba(20, 20, 20, 0.05);
  button {
    height: 40px;
    width: 40px;
    border-radius: 50px;
    padding: 8px 12px;
    font-weight: 600;
    color: #101010;
    background-color: ${p => p.theme.colors.primary_medium};
    svg {
        vertical-align: middle;
    }
  }
`;

export const ChatInput = styled.input`
    color: ${p => p.theme.colors.black_extra_light};
    background-color: ${p => p.theme.colors.white_medium_light};
    flex: 1;
    border: 1px solid ${p => p.theme.colors.gray_dark+'55'};
    padding: 8px;
    border-radius: 8px;
    margin-right: 8px;
    transition: all 200ms;
`;