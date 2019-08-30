import React from 'react';
import PropTypes from 'prop-types';

import './ChatSelectButton.scss';

const ChatSelectButton = ({ className = '', color, displayName }) => (
  <button
    className={`${className} button`}
    style={{ color: color ? color : '#D4D4D4' }}
  >
    {displayName}
  </button>
);

ChatSelectButton.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  displayName: PropTypes.string.isRequired
};

export default ChatSelectButton;