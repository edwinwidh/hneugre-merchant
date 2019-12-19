import React, { Component, Fragment } from 'react';
import {
  Container,
  Typography,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField
} from '@material-ui/core';
import { ArrowBack, CancelPresentation } from '@material-ui/icons';
import { Link, withRouter } from 'react-router-dom';

class PesananCancel extends Component {
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
            <Typography variant='h6'>ABCD1234</Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth='xs'>
          <Grid container xs justify='center'>
            <Typography
              variant='h5'
              style={{ paddingTop: '10px' }}
            >
              Yakin Dibatalkan?
            </Typography>
          </Grid>

          <Typography variant='subtitle1'>
              Alasan dibatalkan:
          </Typography>

          <form noValidate autoComplete='off'>
            <div>
              <TextField
                id='notes'
                multiline
                rows='4'
                margin='normal'
                variant='outlined'
                style={{ width: '100%' }}
              />
            </div>
          </form>

          <Grid container xs justify='center'>
            <Grid container xs justify='center'>
            <Button
                variant='contained'
                size='large'
                color='secondary'
                style={{
                    backgroundColor: 'black'
                }}
                onClick={() => {
                    this.props.history.go(-1);
                  }}
              >
                Tidak
              </Button>
            </Grid>

            <Grid container xs justify='center'>
              <Button
                component={Link}
                to='/pesanan'
                variant='contained'
                color='secondary'
                size='large'
                style={{
                    backgroundColor: 'red'
                }}
              >
                Ya
              </Button>
            </Grid>
          </Grid>
          

          <Grid container xs justify='center'>
            <Grid container xs justify='center'>
              <CancelPresentation
                style={{
                  bottom: '60px',
                  top: 'auto',
                  position: 'fixed',
                  height: '60px',
                  width: '60px',
                  color: 'grey'
                }}
              />
            </Grid>

            <Grid container xs={8} justify='center'>
              <Button
                component={Link}
                to='/pesanan/1/confirm'
                variant='contained'
                color='secondary'
                size='large'
                disabled
                style={{
                  bottom: '70px',
                  top: 'auto',
                  position: 'fixed'
                }}
              >
                Terima Pesanan
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Fragment>
    );
  }
}

export default withRouter(PesananCancel);
