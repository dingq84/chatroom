import React from 'react';
import PropTypes from 'prop-types';

import SentMessages from '../../containers/SentMessages';
import CharroomInfoBar from '../ChatroomInfoBar';
import CharSelectButton from '../ChatSelectButton';
import CreateChatroom from '../../containers/CreateChatroom';

import './ChatMessages.scss';

const ChatMessages = ({ close, handleClose }) => (
  <div className="chatMessages">
    {
      !close ?
        <>
          <SentMessages />
          <CharroomInfoBar />
        </> :
        <div className="chatMessages__createChatroom">
          <div>
            <h3>ヽ(✿ﾟ▽ﾟ)ノ</h3>
            <h4>馬上開始你的聊天吧~</h4>
          </div>
          <CharSelectButton
            displayName='隨機一對一配對'
            fontSize='14px'
          />
          <CharSelectButton
            displayName='隨機進入群組'
            fontSize='14px'
          />
          <CreateChatroom
            handleClose={handleClose}
          />
        </div>
    }
  </div>
);

ChatMessages.propTypes = {
  close: PropTypes.bool.isRequired
}
export default ChatMessages;