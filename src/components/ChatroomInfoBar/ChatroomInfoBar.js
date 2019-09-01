import React from 'react';

import Wheel from '../../assets/images/Cog wheel silhouette free icon.svg';
import User from '../../assets/images/User shape free icon.svg';
import Padlock from '../../assets/images/Padlock free icon.svg';

import './ChatroomInfoBar.scss';

const ChatroomInfoBar = () => (
  <div className="chatroomInfoBar">
    <div>
      <span>
        <img src={User} alt="User" />
        <h6>2</h6>
      </span>
      <span>
        <img src={Padlock} alt="Padlock" />
        <h6>保密</h6>
      </span>
      <img src={Wheel} alt="wheel" />
    </div>
  </div>
);

export default ChatroomInfoBar;