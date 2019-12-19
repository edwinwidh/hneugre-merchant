import React from 'react';
import { Container, makeStyles, Typography, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2, 2),
    margin: theme.spacing(2, 0)
  }
}));

const PesananHistList = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='xs'>
      <Typography variant='h5' style={{ paddingTop: '10px' }}>
        1 January
      </Typography>
      <Link to='/pesanan/1/taken' style={{ textDecoration: 'none' }}>
        <Paper className={classes.root}>
          <Typography variant='h5' >
            Order #: ABCD1234
          </Typography>
          <Typography variant='p' >
            Putri Ayu | 3 Items | Bungkus
          </Typography>
        </Paper>
      </Link>
      <Paper className={classes.root}>
        <Typography variant='h5'>Order #: ABCD1234</Typography>
        <Typography variant='p'>Putri Ayu | 3 Items | Bungkus</Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant='h5'>Order #: ABCD1234</Typography>
        <Typography variant='p'>Putri Ayu | 3 Items | Bungkus</Typography>
      </Paper>
    </Container>
  );
};

export default PesananHistList;
