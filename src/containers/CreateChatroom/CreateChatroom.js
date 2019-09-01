import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import ChatModal from '../../components/ChatModal';
import ChatSelectButton from '../../components/ChatSelectButton';
import ChatInput from '../../components/ChatInput';

const CreateChatroom = ({ handleClose }) => {
  const [chatroomName, setChatroomName] = useState('');
  const [chatroomPw, setChatroomPw] = useState('');
  const modalRef = useRef();
  useEffect(() => {
    modalRef.current.style.display = 'none';
  }, []);

  const openModal = () => {
    modalRef.current.style.display = '';
  };

  const closeModal = () => {
    modalRef.current.style.display = 'none';
    handleClose();
  };

  const handleChatroomName = e => {
    setChatroomName(e.target.value);
  };

  const handleChatroomPw = e => {
    setChatroomPw(e.target.value);
  };

  return (
    <>
      <ChatSelectButton
        displayName='新增聊天室'
        fontSize='14px'
        handleClick={openModal}
      />
      <ChatModal
        modalRef={modalRef}
        height='360px'
        children={
          <>
            <h2>新增聊天室</h2>
            <ChatInput
              value={chatroomName}
              handleChange={handleChatroomName}
              placeholder='聊天室名稱'
            />
            <h4>限制</h4>
            <span>
              設密碼
              <ChatInput
                value={chatroomPw}
                handleChange={handleChatroomPw}
                placeholder='XXXX'
                width='100px'
              />
            </span>
            <small>公開: 顯示在聊天大廳任何人都能加入</small>
            <small>私密: 只能用搜尋聊天室才能找到</small>
            <ChatSelectButton
              displayName='[確定]'
              fontSize='20px'
              handleClick={closeModal}
            />
          </>
        }
      />
    </>
  )
};

CreateChatroom.propTypes = {
  handleClose: PropTypes.func
};

export default CreateChatroom;