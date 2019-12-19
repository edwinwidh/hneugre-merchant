import React, { Component, Fragment } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Divider,
  Grid,
  Button
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { Link } from 'react-router-dom';

class PesananTake extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position='sticky' color='inherit'>
          <Toolbar>
            <IconButton
              component={Link}
              to='/pesanan'
              edge='start'
              color='secondary'
              aria-label='back'
            >
              <ArrowBack />
            </IconButton>
            <Typography variant='h6'>ABCD1234</Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth='xs'>
          <Typography variant='h5' style={{ paddingTop: '10px' }}>
            Putri Ayu
          </Typography>
          <Typography variant='body1' style={{ paddingBottom: '10px' }}>
            1 January 2019, 16:35:12 | Bungkus
          </Typography>
          <Divider />

          <Grid container xs>
            <Grid item xs={8}>
              <Typography
                variant='body2'
                style={{ padding: '10px', fontSize: '20px' }}
              >
                {`1 Bluespresso`}
              </Typography>
            </Grid>

            <Grid container xs={4} justify='flex-end'>
              <Typography
                variant='body2'
                style={{ padding: '10px', fontSize: '20px' }}
              >
                {`Rp. 35.000`}
              </Typography>
            </Grid>
          </Grid>

          <Grid container xs>
            <Grid item xs={8}>
              <Typography
                variant='body2'
                style={{ padding: '10px', fontSize: '20px' }}
              >
                {`2 Cookies and Cream`}
              </Typography>
            </Grid>

            <Grid container xs={4} justify='flex-end'>
              <Typography
                variant='body2'
                style={{ padding: '10px', fontSize: '20px' }}
              >
                {`Rp. 60.000`}
              </Typography>
            </Grid>
          </Grid>

          <Divider />
          <Grid container xs>
            <Grid item xs={7}>
              <Typography
                variant='subtitle1'
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                Total:
              </Typography>
            </Grid>

            <Grid container xs={5} justify='flex-end'>
              <Typography
                variant='body1'
                style={{
                  padding: '10px',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}
              >
                Rp. 95.000
              </Typography>
            </Grid>
          </Grid>

          <Grid container xs justify='center'>
            <Typography
              variant='h5'
              style={{
                paddingTop: '10px',
                bottom: '70px',
                top: 'auto',
                position: 'fixed'
              }}
            >
              Finished
            </Typography>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default PesananTake;
