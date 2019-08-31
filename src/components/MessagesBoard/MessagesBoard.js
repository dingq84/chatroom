import React from 'react';
import PropTypes from 'prop-types';

import './MessagesBoard.scss';

const MessagesBoard = ({ messages }) => (
  <div className="messagesBoard">
    {messages}
  </div>
);

MessagesBoard.propTypes = {
  message: PropTypes.string
};

export default MessagesBoard;