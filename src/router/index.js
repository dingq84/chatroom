import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SettingUp from '../pages/SettingUp/index';

const Routes = () => {

  return (
    <Router>
      <Route
        exact
        path='/'
        component={SettingUp}
      />
    </Router>
  )
};

export default Routes;