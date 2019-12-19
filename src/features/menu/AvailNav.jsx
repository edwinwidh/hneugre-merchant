import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

class AvailNav extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position='sticky' color='inherit'>
          <Toolbar>
            <IconButton
              edge='start'
              color='secondary'
              aria-label='back'
              onClick={() => {
                this.props.history.go(-1);
              }}
            >
              <ArrowBack />
            </IconButton>
            <Typography variant='h6' color='error'>
              Ketersediaan Menu
            </Typography>
          </Toolbar>
        </AppBar>
      </Fragment>
    );
  }
}

export default withRouter(AvailNav);
