import React, { useState } from 'react';

import CancelChatroom from '../../containers/CancelChatroom';
import ChatMessages from '../../components/ChatMessages';

import './ChatroomInterface.scss';

const ChatroomInterface = () => {
  const [close, setClose] = useState(true);

  const handleClose = () => {
    setClose(!close)
  };

  return (
    <div className="chatroomInterface">
      <div className="chatroomInterface__sidebar">

      </div>
      <div className="chatroomInterface__container">
        <div className="chatroomInterface__container--tabs">
          <CancelChatroom
            close={close}
            handleClose={handleClose} />
        </div>
        <div className="chatroomInterface__container--body">
          <ChatMessages
            close={close}
            handleClose={handleClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatroomInterface;