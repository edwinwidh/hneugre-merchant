import React from 'react';
import { makeStyles, Container, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    background: 'red',
    margin: theme.spacing(2, 0)
  },
  rot: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 0)
  }
}));

const PesananList = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Typography variant='h5' color='error' style={{paddingTop: '10px'}}>
       Menunggu Konfirmasi
      </Typography>
      <Link to='/pesanan/1' style={{ textDecoration: 'none' }}>
        <Paper className={classes.root}>
          <Typography variant='h5' style={{ color: 'white' }}>
            Order #: ABCD1234
          </Typography>
          <Typography variant='p' style={{ color: 'white' }}>
            Putri Ayu | 3 Items | Bungkus
          </Typography>
        </Paper>
      </Link>
      <Typography variant='h5'>Sedang Diproses</Typography>
      <Link to='/pesanan/1/confirm' style={{ textDecoration: 'none' }}>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Order #: ABCD1234</Typography>
        <Typography variant='p'>Putri Ayu | 3 Items | Bungkus</Typography>
      </Paper>
      </Link>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Order #: ABCD1234</Typography>
        <Typography variant='p'>Putri Ayu | 3 Items | Bungkus</Typography>
      </Paper>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Order #: ABCD1234</Typography>
        <Typography variant='p'>Putri Ayu | 3 Items | Bungkus</Typography>
      </Paper>
      <Paper className={classes.rot}>
        <Typography variant='h5'>Order #: ABCD1234</Typography>
        <Typography variant='p'>Putri Ayu | 3 Items | Bungkus</Typography>
      </Paper>
    </Container>
  );
};

export default PesananList;
