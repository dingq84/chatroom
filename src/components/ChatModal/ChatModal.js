import React from 'react';
import PropTypes from 'prop-types';

import './ChatModal.scss';

const ChatModal = ({ className, children }) => (
  <div className={`${className} modal`}>
    {children}
  </div>
);

export default ChatModal;