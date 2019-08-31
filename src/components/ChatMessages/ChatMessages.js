import React from 'react';
import PropTypes from 'prop-types';

import ChatSelectButton from '../ChatSelectButton';
import SentMessages from '../../containers/SentMessages';
import CharroomInfoBar from '../ChatroomInfoBar';

import Picture from '../../assets/images/Picture free icon.svg';
import Paper from '../../assets/images/Paper clip outline free icon.svg';

import './ChatMessages.scss';

const ChatMessages = ({ }) => (
  <div className="chatMessages">
    <SentMessages />
    <CharroomInfoBar />
    <div className="chatMessages__icons">
      <img src={Paper} alt="paper" />
      <img src={Picture} alt="picture" />
      <ChatSelectButton
        fontSize='12px'
        displayName='(ﾟ∀ﾟ)'
      />
    </div>
  </div>
);

ChatMessages.propTypes = {

};

export default ChatMessages;