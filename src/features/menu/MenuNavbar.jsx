import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class MenuNavbar extends Component {
  render() {
    return (
      <AppBar position='sticky' color='inherit'>
        <Toolbar>
          <Typography variant='h6' color='error'>
            Ketersediaan Menu
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default MenuNavbar;
