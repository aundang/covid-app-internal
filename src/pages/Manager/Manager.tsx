import * as React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles, withStyles } from '@material-ui/styles';
import { ChartStatus } from '../../components/Charts/ChartStatus';
import { ChartLocation } from '../../components/Charts/ChartLocation';
import { SearchBar } from '../../components/SearchBar';
import { TeamTableWrapper } from '../../components/TeamTable';

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
      {/* <Chart/> */}
      <Grid
        container
        justify='center'
        alignItems='center'
        direction='row'
        className={classes.root}
      >
      <div style={{ display: 'flex', flexDirection: 'row'}}>
        <div style={{margin: '10px'}}><ChartStatus /></div>
        <div style={{margin: '10px'}}><ChartLocation /></div>
      </div>
      </Grid>
      <SearchBar />
      <TeamTableWrapper />
    </Grid>
  )
  // const pageTitle = 'Your Team\'s Overview';
  //   const diagram1 = 'Team\'s Status';
  //   const diagram2 = 'Work Location';
  //       return (
  //           <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column', marginTop: '2vh', marginBottom: '3vh'}}>
  //               <p style={{ textAlign: 'center'}}>{pageTitle}</p>
  //               <div className='diagramContainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
  //                   <div className='teamStatus' style={{ margin: '2vh 2vw', height: '50vh', width: '25vw'}}>
  //                       <div style={{ textAlign: 'center', margin: '2vh 2vw'}}>{diagram1}</div>
  //                       <ChartStatus />
  //                   </div>
  //                   <div className='workLocation' style={{ margin: '2vh 2vw', height: '50vh', width: '25vw'}}>
  //                       <div style={{ textAlign: 'center', margin: '2vh 2vw'}}>{diagram2}</div>
  //                       <ChartLocation />
  //                   </div>
  //               </div>
  //           </div>
  //       );
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: 20,
    [theme.breakpoints.down('md')]: {
      paddingTop: 30,
      paddingLeft: 15,
      paddingRight: 15
    }
  }
}));


