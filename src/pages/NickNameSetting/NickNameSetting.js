import React from 'react';
import { Link } from 'react-router-dom';

import ChatModal from '../../components/ChatModal';
import ChatSelectButton from '../../components/ChatSelectButton';
import NickNameContainer from '../../containers/NickNameContainer';

const NickNameSetting = () => (
  <ChatModal
    children={
      <>
        <h3 style={{
          letterSpacing: '0',
          color: '#9CDCFE'
        }}>暱稱聊天</h3>
        <NickNameContainer />
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