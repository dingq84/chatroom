import React, { useState } from 'react';

import ChatInput from '../../components/ChatInput';

const NickNameContainer = () => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }

  return (
    <ChatInput
      value={value}
      handleChange={handleChange}
      placeholder='輸入暱稱'
    />
  );
};

export default NickNameContainer;