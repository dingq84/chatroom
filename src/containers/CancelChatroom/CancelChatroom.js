import React from 'react';

import ChatroomTab from '../../components/ChatroomTab';

const CancelChatroom = ({ close, handleClose }) => {
  return (
    (!close) ?
      <ChatroomTab
        name='testtest'
        handleClick={handleClose}
      /> : ''
  );
};

export default CancelChatroom;