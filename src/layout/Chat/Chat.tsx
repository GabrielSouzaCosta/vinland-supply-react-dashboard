import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoChatbubblesOutline, IoCloseOutline, IoSendOutline, IoThumbsUp } from 'react-icons/io5';
import { FlexDiv } from '../../styles/common/layout';
import { P2, P3 } from '../../styles/common/texts';
import { colors } from '@/styles/common/theme';
import { getCurrentTime } from '../../utils/dates';
import useGetWindowDimensions from '@/hooks/useGetWindowDimensions';
import { ButtonOpenChat, ChatBody, ChatContactHeader, ChatContainer, ChatHeader, ChatInput, ChatInputContainer, Message } from './styles';

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

interface MessageProps {
    message: string | JSX.Element,
    sender: string,
    time: string,
}

const Chat = () => {
    const { window_width } = useGetWindowDimensions();
    const chatRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const [ isChatOpen, setIsChatOpen ] = useState(false);
    const [ messages, setMessages ] = useState<MessageProps[]>([]);
  
    function handleOpenChat() {
        setIsChatOpen(true);
    }

    function handleCloseChat() {
        setIsChatOpen(false);
    }

    const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();

      const currentTime = getCurrentTime();

      if (inputRef?.current?.value && inputRef.current.value?.trim() !== '') {
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
                chatRef?.current?.scrollTo(0, chatRef?.current?.scrollHeight + 200);
            }, 200);
        }
    }, [messages])

    useEffect(() => {
        if (isChatOpen && window_width > 968) {
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
                    {messages.map((item : MessageProps, index) => (
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