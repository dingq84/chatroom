import React from 'react';
import { Link } from 'react-router-dom';

import ChatModal from '../../components/ChatModal';
import ChatSelectButton from '../../components/ChatSelectButton';

const SettingUp = () => {
  return (
    <ChatModal
      children={
        <>
          <Link to='/chooseChatType'>
            <ChatSelectButton
              color='#D7BA7D'
              displayName='[匿名聊天]'
            />
          </Link>
          <Link to='/nickNameSettings'>
            <ChatSelectButton
              displayName='[暱稱聊天]'
            />
          </Link>
        </>
      }
    />
  );
};

export default SettingUp;