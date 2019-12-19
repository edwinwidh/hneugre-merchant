import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Divider,
  ButtonBase
} from '@material-ui/core';
import { NavigateNext } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const MenusList = () => {
  return (
    <Container maxWidth='xs'>
      <Typography variant='h5' style={{ paddingTop: '10px' }}>
        Kategori
      </Typography>
      <br />
      <Divider />
      <Grid container style={{ padding: '5px' }}>
        <ButtonBase component={Link} to='/menu/check' style={{ width: '100%' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Recommended</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <NavigateNext style={{ color: 'red' }} />
          </Grid>
        </ButtonBase>
      </Grid>
      <Divider />

      <Divider />
      <Grid container style={{ padding: '5px' }}>
        <ButtonBase style={{ width: '100%' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Frappe Coffee</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <NavigateNext style={{ color: 'red' }} />
          </Grid>
        </ButtonBase>
      </Grid>
      <Divider />

      <Divider />
      <Grid container style={{ padding: '5px' }}>
        <ButtonBase style={{ width: '100%' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Cake</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <NavigateNext style={{ color: 'red' }} />
          </Grid>
        </ButtonBase>
      </Grid>
      <Divider />

      <Divider />

      <Grid container style={{ padding: '5px' }}>
        <ButtonBase style={{ width: '100%' }}>
          <Grid container xs justify='flex-start'>
            <Typography variant='h6'>Pastries</Typography>
          </Grid>
          <Grid container xs justify='flex-end' alignItems='center'>
            <NavigateNext style={{ color: 'red' }} />
          </Grid>
        </ButtonBase>
      </Grid>
      <Divider />
    </Container>
  );
};

export default MenusList;
