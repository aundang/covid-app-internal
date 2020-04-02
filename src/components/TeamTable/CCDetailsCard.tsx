import * as React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Button, Dialog, DialogActions, DialogTitle, Grid, Paper } from "@material-ui/core";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { CloseContactPersonal } from '../../model'

interface Props {
  employee: CloseContactPersonal
}

export function CCDetailsCard (props: Props) {
  const { employee } = props
  const classes = useStyles()

  return (
      <Paper elevation={3} className={classes.paper}>
        <Grid container item className={classes.item}>
          <AccountCircleIcon className={classes.icon}/>
          <Grid className={classes.fullName}>{employee.fullName}  </Grid>   
        </Grid>
        <Grid>
          <Grid className={classes.phoneNumber}>{employee.phoneNumber}</Grid>
          <Grid className={classes.email}>{employee.email}</Grid>
        </Grid>
      </Paper>
    
  )
}

const useStyles = makeStyles({
  icon: {
    fontSize: 100,
    margin: 20,
  },
  paper: {
    // maxWidth: 500
  },
  item: {    
    display: 'flex',
  },
  fullName: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 30
  },
  phoneNumber: {
    fontSize: 20,
    marginLeft: 100
  },
  email: {
    fontSize: 20,
    marginLeft: 100,
    paddingBottom: 30
  }
})
