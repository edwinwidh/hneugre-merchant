import React, { Fragment } from 'react';
import AvailNav from './AvailNav';
import {
  Typography,
  Container,
  Divider,
  Grid,
  Switch
} from '@material-ui/core';

export const MenuAvail = () => {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <Fragment>
      <AvailNav />
      <Container maxWidth='xs'>
        <Typography variant='h5' style={{ paddingTop: '10px', paddingBottom:'10px' }}>
          Recommended
        </Typography>
        <Divider />
        <Grid container style={{ padding: '5px' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Bluespresso</Typography>
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

        <Grid container style={{ padding: '5px' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Irish Coffe Latte</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <Switch
              checked={state.checkedB}
              onChange={handleChange('checkedB')}
              value='checkedB'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
        <Divider />

        <Grid container style={{ padding: '5px' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Cookies and Cream</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <Switch
              checked={state.checkedC}
              onChange={handleChange('checkedC')}
              value='checkedC'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
        <Divider />

        <Grid container style={{ padding: '5px' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Java Chip</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <Switch
              checked={state.checkedD}
              onChange={handleChange('checkedD')}
              value='checkedD'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
        <Divider />

        <Grid container style={{ padding: '5px' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Green Tea</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <Switch
              checked={state.checkedE}
              onChange={handleChange('checkedE')}
              value='checkedE'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
        <Divider />

        <Grid container style={{ padding: '5px' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Irish Mocha Latte</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <Switch
              checked={state.checkedF}
              onChange={handleChange('checkedF')}
              value='checkedF'
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Grid>
        </Grid>
        <Divider />
      </Container>
    </Fragment>
  );
};

export default MenuAvail;
