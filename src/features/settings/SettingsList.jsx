import React from 'react';
import {
  Container,
  Typography,
  Divider,
  Grid,
  Switch,
  ButtonBase,
  Paper,
  makeStyles
} from '@material-ui/core';
import { HeadsetMic } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(1, 2),
    background: '#000000',
    margin: theme.spacing(1)
  }
}));

const SettingsList = () => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Container maxWidth='xs'>
      <br />
      <Typography variant='h5' style={{ paddingTop: '10px' }}>
        Blue Lane Coffee Kino Tower
      </Typography>
      <Typography variant='body1' style={{ fontSize: '17px' }}>
        Kino Tower GF, Jl. Jalur Sutera Boulevard No. 1
      </Typography>
      <Typography variant='body1' style={{ fontSize: '17px' }}>
        +628127437843
      </Typography>
      <Typography variant='body1' style={{ fontSize: '17px' }}>
        Jam Buka: 8:00 - 20:00
      </Typography>
      <br />
      <Divider />
      <Grid container style={{ padding: '5px' }}>
        <Grid container xs justify='flex-start'>
          <Typography variant='h6'>Buka</Typography>
        </Grid>
        <Grid container xs justify='flex-end' alignItems='center'>
          <Switch
            checked={state.checkedA}
            onChange={handleChange('checkedA')}
            value='checkedA'
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        </Grid>
      </Grid>
      <Divider />

      <Grid container style={{ padding: '7px' }}>
        <ButtonBase style={{ width: '100%' }}>
          <Grid container xs={2} justify='flex-start' alignItems='center'>
            <HeadsetMic />
          </Grid>
          <Grid container xs alignItems='center'>
            <Typography variant='h6'>Call Center</Typography>
          </Grid>
        </ButtonBase>
      </Grid>
      <Divider />

      <br />
      <br />
      <br />
      <br />
      <br />

      <Grid>
        <Paper className={classes.root}>
          <Grid container justify='center'>
            <Typography
              variant='body2'
              style={{ fontWeight: 'bold', color: 'white' }}
            >
              Keluar
            </Typography>
          </Grid>
        </Paper>
      </Grid>

    </Container>
  );
};

export default SettingsList;
