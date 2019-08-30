import React from 'react';
import PropTypes from 'prop-types';

const ChatInput = ({ value, handleChange, name }) => (
  <label>
    <span>{name}</span>
    <input
      type="text"
      value={value}
      onChange={handleChange}
    />
  </label>
);

ChatInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ChatInput;