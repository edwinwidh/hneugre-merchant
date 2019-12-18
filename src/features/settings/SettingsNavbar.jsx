import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class SettingsNavbar extends Component {
  render() {
    return (
      <AppBar position='sticky' color='inherit'>
        <Toolbar>
          <Typography variant='h6' color='error'>
            Settings
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default SettingsNavbar;
