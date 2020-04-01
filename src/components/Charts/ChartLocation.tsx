import * as React from 'react';
// import { Grid, Button, Box,  } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import DonutChart from 'react-minimal-pie-chart';


export function ChartLocation() {
    const classes = useStyles();
    return(
        <div>
            <DonutChart
            animate={false}
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            totalValue = {20}
            data={[
                {
                    color: '#FFD700',
                    title: 'Work from home',
                    value: 10
                },
                {
                    color: '#FF0000',
                    title: 'Clientside',
                    value: 10
                }
            ]}
            label={false}
            labelPosition={50}
            lengthAngle={360}
            lineWidth={15}
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
                <div className='chartLegend'>
                    <div className='legendHeaders' style={{ display: 'flex', justifyContent:'space-between'}}>
                        <div className='dummy' style={{ height: '3vh', width: '6vw', margin:'2vh 1vw' }}></div>
                        <div className='noOfEmployees' style={{ fontSize: '12px', margin: '2vh 1vw'}}>No. of employees</div>
                    </div>
                    <div className='legendCubesList' style={{ display: 'flex', flexDirection: 'column', margin: '1vh 1vw'}}>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '1.93vh', width: '0.938vw', marginRight: '1vw', background: '#FFD700'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Work from home</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '1.93vh', width: '0.938vw', marginRight: '1vw', background: '#FF0000'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Clientside</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                    </div>
                </div>
        </div>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
      padding: 20,
      [theme.breakpoints.down('md')]: {
        paddingTop: 50,
        paddingLeft: 15,
        paddingRight: 15
      }
    }
  }));  
