import React from 'react';

import CamcelChatroom from '../../containers/CancelChatroom';
import ChatMessages from '../../components/ChatMessages';

import './ChatroomInterface.scss';

const ChatroomInterface = () => {
  return (
    <div className="chatroomInterface">
      <div className="chatroomInterface__sidebar">

      </div>
      <div className="chatroomInterface__container">
        <div className="chatroomInterface__container--tabs">
          <CamcelChatroom />
        </div>
        <div className="chatroomInterface__container--body">
          <ChatMessages />
        </div>
      </div>
    </div>
  );
};

export default ChatroomInterface;