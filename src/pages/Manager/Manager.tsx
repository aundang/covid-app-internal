import * as React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/styles';
import { SearchBar } from '../../components/SearchBar';
import { TeamTableWrapper } from '../../components/TeamTable';
import { ChartWrapper } from '../../components/Charts/ChartWrapper';

export function Manager() {
  const classes = useStyles();
  
  return (
    <Grid 
      container 
      justify="center"
      alignItems="center" 
      direction="column" 
      className={classes.root}
    >
      <Typography>Manager's Screen</Typography>
      <Grid
        container
        justify='center'
        alignItems='center'
        direction='row'
        className={classes.root}
      >
      <ChartWrapper />
      </Grid>
      <SearchBar />
      <TeamTableWrapper />
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15
    },
  }
}));


