import React from 'react';
import PropTypes from 'prop-types';

import './ChatInput.scss';

const ChatInput = ({ value, handleChange, name, placeholder, width = '' }) => (
  <label className='chatInput'>
    {
      name && <span>{name}</span>
    }
    <input
      type="text"
      style={{
        width: width
      }}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  </label>
);

ChatInput.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.string
};

export default ChatInput;