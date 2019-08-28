import React from 'react';

import './ChatType.scss';

const ChatType = () => {
  return (
    <div className="chatroom__chattype">
      <p className="chatroom__chattype--anon">[匿名聊天]</p>
      <p className="chatroom__chattype--nick">[暱稱聊天]</p>
    </div>
  );
};

export default ChatType;