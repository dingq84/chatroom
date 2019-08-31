import React from 'react';
import { Link } from 'react-router-dom';

import ChatModal from '../../components/ChatModal';
import ChatSelectButton from '../../components/ChatSelectButton';

const ChatType = () => (
  <ChatModal
    children={
      <>
        <Link to='/chatroomInterface'>
          <ChatSelectButton
            displayName='[隨機配對1對1聊天]'
          />
        </Link>
        <Link to='/chatroomInterface'>
          <ChatSelectButton
            displayName='[進入聊天大廳]'
          />
        </Link>
      </>
    }
  />
);

export default ChatType;