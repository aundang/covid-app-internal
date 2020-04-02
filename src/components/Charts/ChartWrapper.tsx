import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/styles';
import { ChartStatus } from '../../components/Charts/ChartStatus';
import { ChartLocation } from '../../components/Charts/ChartLocation';


export function ChartWrapper() {
    const classes = useStyles();

    return (
        <Grid container justify='center' direction='row'>
            <div className={classes.chartStatus}><ChartStatus /></div>
            <div className={classes.chartLocation}><ChartLocation /></div>
      </Grid>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    chartStatus: {
        margin: '3vh 3vw'
      },
      chartLocation: {
        margin: '3vh 3vw'
      }
  }));