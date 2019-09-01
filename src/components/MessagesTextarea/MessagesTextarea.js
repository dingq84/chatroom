import React from 'react';
import PropTypes from 'prop-types';

import './MessagesTextarea.scss';

const MessagesTextarea = ({ value, handleChange, textAreaRef }) => (
  <textarea
    ref={textAreaRef}
    className="messagesTextarea"
    value={value}
    onChange={handleChange}
    autoFocus={true}
  />

);

MessagesTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MessagesTextarea;