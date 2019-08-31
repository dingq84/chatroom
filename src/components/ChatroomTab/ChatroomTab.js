import React from 'react';
import PropTypes from 'prop-types';

import clearSvg from '../../assets/images/clear.svg';

import './ChatroomTab.scss';

const ChatroomTab = ({ name, handleClick }) => (
  <div className='chatroomTab'>
    <span>{name}</span>
    <img
      src={clearSvg}
      alt="clear"
      onClick={handleClick}
    />
  </div>
);

ChatroomTab.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func
};

export default ChatroomTab;
