import React, { Component, Fragment } from 'react';
import BottomNav from '../../features/nav/BottomNav';
import { Route } from 'react-router';
import PesananDashboard from '../../features/pesanan/PesananDashboard/PesananDashboard';
import MenuDashboard from '../../features/menu/MenuDashboard';
import SettingsDashboard from '../../features/settings/SettingsDashboard';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='app'>
          <Route exact path='/' component={PesananDashboard} />
          <Route path='/pesanan' component={PesananDashboard} />
          <Route path='/menu' component={MenuDashboard} />
          <Route path='/settings' component={SettingsDashboard} />

          <BottomNav />
        </div>
      </Fragment>
    )
  }
}

export default App;
