import React from 'react';
import PropTypes from 'prop-types';

import './ChatModal.scss';

const ChatModal = ({ className, children }) => (
  <div className={`${className} modal`}>
    {children}
  </div>
);

ChatModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
};

export default ChatModal;