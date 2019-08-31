import React from 'react';
import PropTypes from 'prop-types';

import './ChatSelectButton.scss';

const ChatSelectButton = ({
  className,
  fontSize = '18px',
  color = '#D4D4D4',
  displayName,
  backgroundColor = 'transparent',
  handleClick,
  children }) => (
    <button
      className={`${className} button`}
      style={{
        fontSize: fontSize,
        color: color,
        backgroundColor: backgroundColor
      }}
      onClick={handleClick}
    >
      {displayName}
      {children}
    </button>
  );

ChatSelectButton.propTypes = {
  className: PropTypes.string,
  fontSize: PropTypes.string,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  children: PropTypes.element,
  backgroundColor: PropTypes.string,
  displayName: PropTypes.string.isRequired
};

export default ChatSelectButton;