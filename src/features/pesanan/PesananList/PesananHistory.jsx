import React, { Fragment, Component } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { withRouter } from 'react-router';
import PesananHistList from './PesananHistList';

class PesananHistory extends Component {
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
              Sejarah Pesanan
            </Typography>
          </Toolbar>
        </AppBar>

        <PesananHistList />
      </Fragment>
    );
  }
}

export default withRouter(PesananHistory);
