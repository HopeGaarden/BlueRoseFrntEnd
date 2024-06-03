import React, { useState } from "react";
import { motion } from "framer-motion"; 
import styles from "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";

import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Avatar,
} from "@chatscope/chat-ui-kit-react";
import classes from './ChatPage.module.css'
import Header from "../components/ChatPageComponents/Header";
import Footer from "../layouts/Footer";
import ChatDate from "../components/ChatPageComponents/ChatDate";
const PROFIL_IMAGE =
  "/images/Feed/profil.png";

const defaultMessage = [
  {
    model: {
      message: "안녕하세요?",
      direction: "incoming",
    },
    avatar: {
      src: PROFIL_IMAGE,
      name: "miracle",
    },
  },
  {
    model: {
      message: "반갑습니다 신입이에요!",
      direction: "outgoing",
    },
  },
  {
    model: {
      message: "잘지내봐요 ^^",
      direction: "incoming",
    },
    avatar: {
      src: PROFIL_IMAGE,
      name: "miracle",
    },
  },
];

const getMessageComponent = (data) => {
  return data.map((item, index) => {
    return (
      <Message key={index} model={item.model}>
        {item.avatar ? (
          <Avatar src={item.avatar.src} name={item.avatar.name} />
        ) : null}
      </Message>
    );
  });
};

const ChatPage = () => {
  const [messages, setMessages] = useState(defaultMessage);

  const handleSend = (input) => {
    let newMessage = {
      model: {
        message: input,
        direction: "outgoing",
      },
    };

    setMessages([...messages, newMessage]);
  };
  const animationVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <div className={classes.container}>
        <Header />
        <motion.div variants={animationVariants}
        initial="initial"
        animate="animate">
          <ChatDate />
          <ChatContainer className={classes.chatContainer} >
            <MessageList>{getMessageComponent(messages)}</MessageList>
            <MessageInput className={classes.messageInput} placeholder="Type message here" onSend={handleSend} />
            
          </ChatContainer>
          </motion.div>
          <Footer />

      </div>
    </div>
  );
};

export default ChatPage;