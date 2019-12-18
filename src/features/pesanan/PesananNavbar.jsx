import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class PesananNavbar extends Component {
  render() {
    return (
      <AppBar position='sticky' color='inherit'>
        <Toolbar>
          <Typography variant='h6' color='error'>
            Pesanan
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default PesananNavbar;
