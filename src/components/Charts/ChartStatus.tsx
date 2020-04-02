import { makeStyles, Paper, Theme, Typography, FormHelperText } from '@material-ui/core';
import * as React from 'react';
import { Grid, Button, Box } from '@material-ui/core';
import DonutChart  from 'react-minimal-pie-chart';


export function ChartStatus() {
    const classes = useStyles();
    let dataMock = [
        {
            color: '#FECD56',
            title: 'No Status',
            value: 7
        },
        {
            color: '#FF6283',
            title: 'Confirmed Case',
            value: 1
        },
        {
            color: '#FF9F41',
            title: 'Suspected Case',
            value: 2
        },
        {
            color: '#4DBFC0',
            title: 'Stay-Home Notice (SHN)',
            value: 3
        },
        {
            color: '#37A3EB',
            title: 'Leave of Absence (LOA)',
            value: 3
        },
        {
            color: '#A54FFB',
            title: 'Extra Precautionary Measure',
            value: 2
        }
    ];
    
    return(
        <div>
            <Grid container className={classes.header} justify='center' alignItems='center'>Team Status</Grid>
            <DonutChart
            animate={false}
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            data={dataMock}
            label
                labelPosition={80}
                labelStyle={{
                fill: '#121212',
                fontFamily: 'sans-serif',
                fontSize: '5px'
                }}
            lengthAngle={360}
            lineWidth={40}
            onClick={undefined}
            onMouseOut={undefined}
            onMouseOver={undefined}
            paddingAngle={5}
            radius={50}
            rounded={false}
            startAngle={0}
            viewBoxSize={[
                100,
                100
            ]}
            />
                <Grid container className='chartLegend' justify='space-between' alignContent='center' direction='row'>
                    <Grid className={classes.dummy}></Grid>
                    <Grid className={classes.noOfEmployees}>No. of Employees</Grid>
                </Grid>
                <Grid container className={classes.legendCubesList} direction='column'>
                    <Grid container className='container1' direction='row' justify='space-between'>
                        <div className={classes.container2}>
                            <div className={classes.cubeNoStat}></div>
                            <div className={classes.cubeReference}>{dataMock[0].title}</div>
                        </div>
                        <div className={classes.countReference}>{dataMock[0].value}</div>
                    </Grid>
                    <Grid container className='container1' direction='row' justify='space-between'>
                        <div className={classes.container2}>
                            <div className={classes.cubeConfirmed}></div>
                            <div className={classes.cubeReference}>{dataMock[1].title}</div>
                        </div>
                        <div className={classes.countReference}>{dataMock[1].value}</div>
                    </Grid>
                    <Grid container className='container1' direction='row' justify='space-between'>
                        <div className={classes.container2}>
                            <div className={classes.cubeSuspected}></div>
                            <div className={classes.cubeReference}>{dataMock[2].title}</div>
                        </div>
                        <div className={classes.countReference}>{dataMock[2].value}</div>
                    </Grid>
                    <Grid container className='container1' direction='row' justify='space-between'>
                        <div className={classes.container2}>
                            <div className={classes.cubeSHN}></div>
                            <div className={classes.cubeReference}>{dataMock[3].title}</div>
                        </div>
                        <div className={classes.countReference}>{dataMock[3].value}</div>
                    </Grid>
                    <Grid container className='container1' direction='row' justify='space-between'>
                        <div className={classes.container2}>
                            <div className={classes.cubeLOA}></div>
                            <div className={classes.cubeReference}>{dataMock[4].title}</div>
                        </div>
                        <div className={classes.countReference}>{dataMock[4].value}</div>
                    </Grid>
                    <Grid container className='container1' direction='row' justify='space-between'>
                        <div className={classes.container2}>
                            <div className={classes.cubePrecautionary}></div>
                            <div className={classes.cubeReference}>{dataMock[5].title}</div>
                        </div>
                        <div className={classes.countReference}>{dataMock[5].value}</div>
                    </Grid>
                </Grid>
        </div>
    );

}

const useStyles = makeStyles((theme: Theme) => ({
    header: {
        font: 'Roboto',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: '2vh'
    },
    dummy: {
        height: '3vh', 
        width: '6vw', 
        margin:'2vh 1vw'
    },
    noOfEmployees: {
        fontSize: '12px', 
        margin: '2vh 1vw'
    },
    legendCubesList: {
        margin: '1vh 1vw'
    },
    container2: {
        display:'flex',
        flexDirection:'row'
    },
    cubeNoStat: {
        backgroundColor: '#FECD56',
        height: 12,
        width: 12,
        marginRight: '1vw'
      },
    cubeConfirmed: {
        backgroundColor: '#FF6283',
        height: 12,
        width: 12,
        marginRight: '1vw'
    },
    cubeSuspected: {
        backgroundColor: '#FF9F41',
        height: 12,
        width: 12,
        marginRight: '1vw'
    },
    cubeSHN: {
        backgroundColor: '#4DBFC0',
        height: 12,
        width: 12,
        marginRight: '1vw'
    },
    cubeLOA: {
        backgroundColor: '#37A3EB',
        height: 12,
        width: 12,
        marginRight: '1vw'
    },
    cubePrecautionary: {
        backgroundColor: '#A54FFB',
        height: 12,
        width: 12,
        marginRight: '1vw'
    },
    cubeReference: {
        fontSize: 12
    },
    countReference: {
        fontSize: 12,
        marginRight: '3vw'
    }  
  }));  
