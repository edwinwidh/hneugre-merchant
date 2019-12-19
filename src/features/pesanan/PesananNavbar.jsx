import React, { Component } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid
} from '@material-ui/core';
import { History } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class PesananNavbar extends Component {
  render() {
    return (
      <AppBar position='sticky' color='inherit'>
        <Toolbar>
          <Grid container>
            <Grid container xs={9} alignItems='center'>
              <Typography variant='h6' color='error'>
                Pesanan
              </Typography>
            </Grid>
            <Grid container xs justify='flex-end'>
              <IconButton
                edge='end'
                style={{color: 'red'}}
                component={Link}
                to='/pesanan/sejarah'
              >
                <History />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default PesananNavbar;
