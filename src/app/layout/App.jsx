import React, { Component, Fragment } from 'react';
import BottomNav from '../../features/nav/BottomNav';
import { Route } from 'react-router';
import PesananDashboard from '../../features/pesanan/PesananDashboard/PesananDashboard';
import MenuDashboard from '../../features/menu/MenuDashboard';
import SettingsDashboard from '../../features/settings/SettingsDashboard';
import MenuAvail from '../../features/menu/MenuAvail';
import PesananHistory from '../../features/pesanan/PesananList/PesananHistory';
import PesananDetails from '../../features/pesanan/PesananDetails/PesananDetails';
import PesananReady from '../../features/pesanan/PesananDetails/PesananReady';
import PesananDone from '../../features/pesanan/PesananDetails/PesananDone';
import PesananTake from '../../features/pesanan/PesananDetails/PesananTake';
import PesananCancel from '../../features/pesanan/PesananDetails/PesananCancel';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className='app'>
          <Route exact path='/' component={PesananDashboard} />
          <Route exact path='/pesanan' component={PesananDashboard} />
          <Route path='/pesanan/sejarah' component={PesananHistory} />
          <Route exact path='/pesanan/1' component={PesananDetails} />
          <Route exact path='/pesanan/1/confirm' component={PesananReady} />
          <Route exact path='/pesanan/1/done' component={PesananDone} />
          <Route exact path='/pesanan/1/taken' component={PesananTake} />
          <Route exact path='/pesanan/1/cancel' component={PesananCancel} />
          <Route exact path='/menu' component={MenuDashboard} />
          <Route path='/menu/check' component={MenuAvail} />
          <Route exact path='/settings' component={SettingsDashboard} />

          <BottomNav />
        </div>
      </Fragment>
    )
  }
}

export default App;
