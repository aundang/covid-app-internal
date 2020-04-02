import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { TeamTable } from './TeamTable';
import { Filter } from './Filter';

export function TeamTableWrapper () {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Filter />
      <TeamTable />
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: '1px black solid',
    width: '100%'
  }
}));
