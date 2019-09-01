import React from 'react';
import PropTypes from 'prop-types';

import './ChatModal.scss';

const ChatModal = ({ className = '', height = '250px', children, modalRef }) => (
  <div
    className={`${className} modal`}
    ref={modalRef}
    style={{
      height: height
    }}
  >
    {children}
  </div>
);

ChatModal.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
};

export default ChatModal;