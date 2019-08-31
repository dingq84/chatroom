import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SettingUp from '../pages/SettingUp/index';
import NickNameSetting from '../pages/NickNameSetting';
import ChatType from '../pages/ChatType';
import ChatroomInterface from '../pages/ChatroomInterface';

import './router.scss';

const Router = () => {

  return (
    <BrowserRouter>
      <div className="chatroom">
        <Route
          exact
          path='/'
          component={SettingUp}
        />
        <Route
          path='/nickNameSettings'
          component={NickNameSetting}
        />
        <Route
          path='/chooseChatType'
          component={ChatType}
        />
        <Route
          path='/chatroomInterface'
          component={ChatroomInterface}
        />
      </div>
    </BrowserRouter>
  )
};

export default Router;