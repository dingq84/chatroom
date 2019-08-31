import React, { useState } from 'react';

import ChatroomTab from '../../components/ChatroomTab';

const CancelChatroom = () => {
  const handleClick = e => {
    console.log(e.target)
  }

  return (
    <ChatroomTab
      name='testtest'
      handleClick={handleClick}
    />
  );
};

export default CancelChatroom;