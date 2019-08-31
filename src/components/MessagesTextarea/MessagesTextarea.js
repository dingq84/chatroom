import React from 'react';
import PropTypes from 'prop-types';

import './MessagesTextarea.scss';

const MessagesTextarea = ({ value, handleChange }) => (
  <textarea
    className="messagesTextarea"
    value={value}
    onChange={handleChange}
  />

);

MessagesTextarea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default MessagesTextarea;