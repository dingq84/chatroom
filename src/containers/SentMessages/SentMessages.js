import React, { useState, useRef, useEffect } from 'react';

import MessagesTextarea from '../../components/MessagesTextarea';
import ChatSelectButton from '../../components/ChatSelectButton';
import MessagesBoard from '../../components/MessagesBoard';

import SENTENCE from '../../constance/RandomConmunication';

import RightArrow from '../../assets/images/right-arrow.svg';
import Picture from '../../assets/images/Picture free icon.svg';
import Paper from '../../assets/images/Paper clip outline free icon.svg';

const SentMessages = () => {
  const [value, setValue] = useState('  Dean >  ');
  const textAreaRef = useRef();
  const messagesRef = useRef();
  useEffect(() => {
    textAreaRef.current.selectionStart = 10;
  }, [textAreaRef]);

  const randomSentence = () => {
    setTimeout(() => {
      const p = document.createElement('p');
      const randonIndex = Math.floor(Math.random() * SENTENCE.length);
      p.innerHTML = `Test : ${SENTENCE[randonIndex]}`;
      p.style.color = 'blue';
      messagesRef.current.appendChild(p);
    }, 500);
  }

  const handleUpload = e => {
    const file = e.target.files[0];
    const p = document.createElement("p");
    const a = document.createElement("a");
    a.href = window.URL.createObjectURL(file);
    a.target = '_blank';
    a.style.color = 'green';
    a.innerHTML = file.name;
    p.innerHTML = '  Dean >  ';
    p.style.color = 'green';
    p.appendChild(a);
    messagesRef.current.appendChild(p);
    randomSentence();
  }

  const handleChange = e => {
    setValue(e.target.value);
  }

  const handleClick = e => {
    if (value.split('>')[1] !== '  ') {
      const textDOM = textAreaRef.current;
      textDOM.focus();
      setValue('  Dean >  ');
      const p = document.createElement('p');
      p.innerHTML = value.replace('>', ":");
      p.style.color = 'green';
      messagesRef.current.appendChild(p);
      randomSentence();
    }
  }

  return (
    <>
      <MessagesBoard
        messagesRef={messagesRef}
      />
      <MessagesTextarea
        textAreaRef={textAreaRef}
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
      <div className="chatMessages__icons">
        <input
          id='uploadFile'
          type='file'
          onChange={handleUpload}
        />
        <label htmlFor="uploadFile">
          <img src={Paper} alt="paper" />
        </label>
        <img src={Picture} alt="sticky" />
        <ChatSelectButton
          fontSize='12px'
          displayName='(ﾟ∀ﾟ)'
        />
      </div>
    </>
  );
};

export default SentMessages;