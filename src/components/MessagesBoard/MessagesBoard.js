import React from 'react';
import PropTypes from 'prop-types';

import './MessagesBoard.scss';

const MessagesBoard = ({ messagesRef }) => (
  <div
    className="messagesBoard"
    ref={messagesRef}
  >
  </div>
);

MessagesBoard.propTypes = {
  message: PropTypes.string
};

export default MessagesBoard;