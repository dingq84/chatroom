import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SettingUp from '../pages/SettingUp/index';
import NickNameSetting from '../pages/NicknameSetting';
import './router.scss';

const Router = () => {

  return (
    <BrowserRouter>
      <Route
        exact
        path='/'
        component={SettingUp}
      />
      <Route
        path='/nickNameSettings'
        component={NickNameSetting}
      />
    </BrowserRouter>
  )
};

export default Router;