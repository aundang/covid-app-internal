import { makeStyles, Paper, Theme, Typography, FormHelperText } from '@material-ui/core';
import * as React from 'react';
import { Grid, Button, Box } from '@material-ui/core';
import DonutChart  from 'react-minimal-pie-chart';


const useStyles = makeStyles({
    root: {
        
    }
});

export function ChartStatus() {
    const classes = useStyles();
    let dataMock = [
        {
            color: '#FFD700',
            title: 'No Status',
            value: 7
        },
        {
            color: '#FF0000',
            title: 'Confirmed Case',
            value: 1
        },
        {
            color: '#FFA500',
            title: 'Suspected Case',
            value: 2
        },
        {
            color: '#008000',
            title: 'Stay-Home Notice (SHN)',
            value: 3
        },
        {
            color: '#0000FF',
            title: 'Leave of Absence (LOA)',
            value: 3
        },
        {
            color: '#800080',
            title: 'Extra Precautionary Measure',
            value: 2
        }
    ];
    
    return(
        <div>
            <DonutChart
            animate={false}
            animationDuration={500}
            animationEasing="ease-out"
            cx={50}
            cy={50}
            data={dataMock}
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

            {/* <Grid className='chartlegend'
                  direction='row'>

            </Grid> */}

                <div className='chartLegend'>
                    <div className='legendHeaders' style={{ display: 'flex', justifyContent:'space-between'}}>
                        <div className='dummy' style={{ height: '3vh', width: '6vw', margin:'2vh 1vw' }}></div>
                        <div className='noOfEmployees' style={{ fontSize: '12px', margin: '2vh 1vw'}}>No. of employees</div>
                    </div>
                    <div className='legendCubesList' style={{ display: 'flex', flexDirection: 'column', margin: '1vh 1vw'}}>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#FFD700'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>No Status</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>

                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#FF0000'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Confirmed Case</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#FFA500'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Suspected Case</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#008000'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Stay-Home Notice (SHN)</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#0000FF'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Leave of Absence (LOA)</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                        <div className='container1' style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div className='container2' style={{ display: 'flex', flexDirection: 'row'}}>
                                 <div className='cube' style={{ height: '12px', width: '12px', marginRight: '1vw', background: '#800080'}}></div>
                                <div className='cubeName' style={{ fontSize: '12px'}}>Extra Precautionary Measure</div>
                            </div>
                            <div style={{ fontSize: '12px', marginRight: '3vw'}}>3</div>
                        </div>
                    </div>
                </div>
        </div>
    );

   
}

