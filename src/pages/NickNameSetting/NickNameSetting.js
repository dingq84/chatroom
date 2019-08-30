import React from 'react';
import { Link } from 'react-router-dom';

import ChatModal from '../../components/ChatModal';
import ChatSelectButton from '../../components/ChatSelectButton';

const NickNameSetting = () => (
  <ChatModal
    children={
      <>
        <h3>暱稱聊天</h3>
        <Link to='/chooseChatType'>
          <ChatSelectButton
            displayName='[確定]'
          />
        </Link>
      </>
    }
  />
);

export default NickNameSetting;