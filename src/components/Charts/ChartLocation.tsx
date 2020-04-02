import * as React from 'react';
import { Grid } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import DonutChart from 'react-minimal-pie-chart';


export function ChartLocation() {
    const classes = useStyles();
    let dataMock = [
        {
            color: '#FECD56',
            title: 'Work from home',
            value: 12
        },
        {
            color: '#FF6283',
            title: 'Clientside',
            value: 6
        }
    ]
    return(
        <div>
            <Grid container className={classes.header} justify='center' alignItems='center'>Work Location</Grid>
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
                        <div className={classes.cubeWFH}></div>
                        <div className={classes.cubeReference}>{dataMock[0].title}</div>
                    </div>
                        <div className={classes.countReference}>{dataMock[0].value}</div>
                </Grid>
                <Grid container className='container1' direction='row' justify='space-between'>
                    <div className={classes.container2}>
                        <div className={classes.cubeClient}></div>
                        <div className={classes.cubeReference}>{dataMock[1].title}</div>
                    </div>
                    <div className={classes.countReference}>{dataMock[1].value}</div>
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
    cubeWFH: {
        backgroundColor: '#FECD56',
        height: 12,
        width: 12,
        marginRight: '1vw'
      },
    cubeClient: {
        backgroundColor: '#FF6283',
        height: 12,
        width: 12,
        marginRight: '1vw'
    },
    cubeReference: {
        fontSize: 12
        
    },
    countReference: {
        fontSize: 12,
        fontWeight: 'bold',
        marginRight: '3vw'
    }  
    
    
    }));  
