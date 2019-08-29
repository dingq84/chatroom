import React from 'react';

import './NicknameSelect.scss';

const NicknameSelect = () => {

  return (
    <div className='nickname__selectbox'>
      <h3 className='nickname__selectbox--title'>暱稱聊天</h3>
      <label className='nickname__selectbox--enter'>
        <input
          type="text"
          placeholder='輸入暱稱'
        />
      </label>
      <button className='nickname__selectbox--button'>[確定]</button>
    </div>
  );
};

export default NicknameSelect;