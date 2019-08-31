import React, { useState } from 'react';

import MessagesTextarea from '../../components/MessagesTextarea';
import ChatSelectButton from '../../components/ChatSelectButton';
import MessagesBoard from '../../components/MessagesBoard';
import RightArrow from '../../assets/images/right-arrow.svg';

const SentMessages = () => {
  const [messages, setMessages] = useState('');
  const [value, setValue] = useState('');
  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleClick = e => {
    setValue('');
    if (messages)
      setMessages(
        <>
          {messages}
          <p>{value}</p>
        </>
      )
    else
      setMessages(<p>{value}</p>);
  }

  return (
    <>
      <MessagesBoard
        messages={messages}
      />
      <MessagesTextarea
        value={value}
        handleChange={handleChange}
      />
      <ChatSelectButton
        className="chatMessages__send"
        fontSize='12px'
        displayName='傳送'
        handleClick={handleClick}
        children={<img src={RightArrow} alt='right arrow' />}
        backgroundColor="#2A2A2A"
      />
    </>
  );
};

export default SentMessages;