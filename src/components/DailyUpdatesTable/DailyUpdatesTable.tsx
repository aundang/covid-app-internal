// prettier-ignore
import {Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';
import React, { useState, useEffect } from 'react';

export const DailyUpdatesTable = () => {

  const dailyUpdates = [{
    Date: "31/03/2020",
    personalStatus: "no status",
    onPersonalLeave: "no",
    workFromHome: "no",
    workLocation: "cbp_office",
    country: "singapore",
    travelStatus: "No Travel",

  },
    {
      Date: "30/03/2020",
      personalStatus: "no status",
      onPersonalLeave: "no",
      workFromHome: "no",
      workLocation: "cbp_office",
      country: "singapore",
      travelStatus: "No Travel",

    },
    {
      Date: "29/03/2020",
      personalStatus: "no status",
      onPersonalLeave: "no",
      workFromHome: "no",
      workLocation: "cbp_office",
      country: "singapore",
      travelStatus: "No Travel",

    },
    {
      Date: "28/03/2020",
      personalStatus: "no status",
      onPersonalLeave: "no",
      workFromHome: "no",
      workLocation: "cbp_office",
      country: "singapore",
      travelStatus: "No Travel",

    },
    {
      Date: "27/03/2020",
      personalStatus: "no status",
      onPersonalLeave: "no",
      workFromHome: "no",
      workLocation: "cbp_office",
      country: "singapore",
      travelStatus: "No Travel",

    },
    {
      Date: "26/03/2020",
      personalStatus: "no status",
      onPersonalLeave: "no",
      workFromHome: "no",
      workLocation: "cbp_office",
      country: "singapore",
      travelStatus: "No Travel",

    },
    {
      Date: "25/03/2020",
      personalStatus: "no status",
      onPersonalLeave: "no",
      workFromHome: "no",
      workLocation: "cbp_office",
      country: "singapore",
      travelStatus: "No Travel",

    }];

  const classes = useStyles();


  const [dailyUpdatesArray, setDailyUpdatesArray] = useState<any>(dailyUpdates);
  
  

  return (
    <Paper className={classes.paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell padding="default">
              Date
            </TableCell>
            <TableCell padding="default">Personal Status</TableCell>
            <TableCell padding="default">On Personal Leave</TableCell>
            <TableCell padding="default">Work From Home</TableCell>
            <TableCell padding="default">Work Location</TableCell>
            <TableCell padding="default">Country</TableCell>
            <TableCell padding="default">TravelStatus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dailyUpdatesArray.map((dailyUpdate: any, index: number) => {
            return (
              <TableRow key={index} hover>
                <TableCell padding="default">{dailyUpdate['Date']}</TableCell>
                <TableCell padding="default">{dailyUpdate['personalStatus']}</TableCell>
                <TableCell padding="default">{dailyUpdate['onPersonalLeave']}</TableCell>
                <TableCell padding="default">{dailyUpdate['workFromHome']}</TableCell>
                <TableCell padding="default">{dailyUpdate['workLocation']}</TableCell>
                <TableCell padding="default">{dailyUpdate['country']}</TableCell>
                <TableCell padding="default">{dailyUpdate['travelStatus']}</TableCell>
                <TableCell padding="default">
                </TableCell>

                <TableCell padding="default">
            
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};

const useStyles = makeStyles({
  paper: {
    width: '100%',
    minWidth: 260,
    display: 'inline-block'
  },
  table: {
    width: '100%'
  }
});
