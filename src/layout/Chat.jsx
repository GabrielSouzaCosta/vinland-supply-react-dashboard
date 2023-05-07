import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { IoChatboxOutline, IoChatbubbleOutline, IoChatbubblesOutline, IoCloseOutline, IoSendOutline, IoThumbsUp } from 'react-icons/io5';
import { FlexDiv } from '../styles/common/layout';
import { P2, P3 } from '../styles/common/texts';
import { css } from 'styled-components';
import { colors } from '@/styles/common/theme';
import { getCurrentTime } from '../utils/dates';

const einarMessages = [
    "Hi Thorfinn!!",
    "Hey Thorfinn, how's your day going??",
    "Agreed",
    "You are incredibly intelligent and talented",
    "Your hard work and dedication are truly inspiring",
    "You have a heart of gold and always treat others with kindness and respect",
    "You have a natural charisma and are loved by so many people",
    "Your positive attitude and infectious energy always brighten up the room",
    "Your creativity knows no bounds and you have a unique and wonderful perspective on the world",
    "You are an amazing problem-solver and always find a way to overcome any obstacle",
    <IoThumbsUp color={colors.warning} size={20} />
]


const Chat = () => {
    const chatRef = useRef();
    const inputRef = useRef('');

    const [ isChatOpen, setIsChatOpen ] = useState(false);
    const [ messages, setMessages ] = useState([]);
  
    function handleOpenChat() {
        setIsChatOpen(true);
    }

    function handleCloseChat() {
        setIsChatOpen(false);
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      const currentTime = getCurrentTime();

      if (inputRef.current.value.trim() !== '') {
        const msg = { message: inputRef.current.value, sender: 'thorfinn', time: currentTime };
        setMessages([...messages, msg]);
        inputRef.current.value = '';
      }
    };

    useEffect(() => {
        if (messages[messages.length-1]?.sender === 'thorfinn') {
            const currentTime = getCurrentTime();

            const einarMsg = { message: einarMessages[Math.floor(Math.random() * einarMessages.length)], sender: 'einar', time: currentTime };
            setMessages([...messages, einarMsg]);
            setTimeout(() => {
                chatRef.current.scrollTo(0, chatRef.current.scrollHeight + 200);
            }, 200);
        }
    }, [messages])

    useEffect(() => {
        if (isChatOpen) {
            inputRef.current?.focus();
        }
    }, [isChatOpen])
  
    return (
    <>
        <ButtonOpenChat 
            onClick={handleOpenChat}
            whileHover={{
                scale: 1.05
            }}
            whileTap={{
                scale: 0.9
            }}
        >
            <IoChatbubblesOutline
                size={25}
            />
        </ButtonOpenChat>
        
        <AnimatePresence>
            {isChatOpen &&
                <ChatContainer
                    initial={{ 
                        height: '0',
                        opacity: 0
                    }}
                    animate={{
                        height: '500px',
                        opacity: 1
                    }}
                    exit={{ 
                        height: '0',
                        opacity: 0
                    }}
                    transition={{
                        type: "timing",
                        duration: 0.25
                    }}
                >

                    <ChatHeader>
                        <FlexDiv gapX="5px">
                            <IoChatbubblesOutline />
                            Chat
                        </FlexDiv>
                        <button
                            type="button"
                            onClick={handleCloseChat}
                        >
                            <IoCloseOutline 
                                size={25}
                            />
                        </button>
                    </ChatHeader>

                    <ChatContactHeader>
                        <FlexDiv gapX="8px">
                            <img src="/images/vinland-characters/einar.jpg" />  
                            <P3>
                                Einar
                            </P3>
                        </FlexDiv>
                        <P2 className="online">
                            Online
                        </P2>
                    </ChatContactHeader>

                    <ChatBody className='custom-scrollbar' ref={chatRef}>
                    {messages.map((item, index) => (
                        <Message
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            sender={item.sender}
                        >
                            <p>
                                { item.message }
                            </p>
                            <p className="time">
                                { item.time }
                            </p>
                        </Message>
                    ))}
                    </ChatBody>

                    <form onSubmit={handleSubmit}>
                    <ChatInputContainer>
                        <ChatInput
                            type="text"
                            placeholder="Type your message"
                            ref={inputRef}
                        />
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <IoSendOutline size={20} />
                        </motion.button>
                    </ChatInputContainer>
                    </form>

                </ChatContainer>
            }
        </AnimatePresence>
    </>
    );
};
  

export default Chat

const ButtonOpenChat = styled(motion.button)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${p => p.theme.colors.primary_light};
    position: fixed;
    right: 10px;
    bottom: 5px;
`

const ChatContainer = styled(motion.div)`
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
  z-index: 1000;
`;

const ChatHeader = styled.div`
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

const ChatContactHeader = styled.div`
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

const ChatBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 16px;
  background-color: ${p => p.theme.colors.white_medium_light};
  scroll-behavior: smooth;
  overflow-anchor: none; 
`;

const Message = styled(motion.div)`
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

const ChatInputContainer = styled.div`
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

const ChatInput = styled.input`
    color: ${p => p.theme.colors.black_extra_light};
    background-color: ${p => p.theme.colors.white_medium_light};
    flex: 1;
    border: 1px solid ${p => p.theme.colors.gray_dark+'55'};
    padding: 8px;
    border-radius: 8px;
    margin-right: 8px;
    transition: all 200ms;
`;