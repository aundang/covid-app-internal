import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Button, Dialog, DialogActions, DialogTitle, Grid  } from "@material-ui/core";
import { TeamList, CloseContactPersonal } from '../../model';
import { CCDetailsCard } from './CCDetailsCard';

interface Props {
  open: boolean;
  onClose: () => void;
  selectedCC: TeamList;
}

export function CloseContactModal(props: Props) {
  const { open, onClose, selectedCC } = props
  const classes = useStyles()

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle className={classes.title}>{'People who came into close contact with ' + selectedCC.fullName}</DialogTitle>
      
        {mockCC.map((employee: CloseContactPersonal) => {
          return (
            <Grid item xs={12} className={classes.cards} justify="center">
              <CCDetailsCard employee={employee}/>
            </Grid>
          )
        })}
    </Dialog>
  )
}

const useStyles = makeStyles({
  root: {
  },
  title: {
    textAlign: 'center'
  },
  cards: {
    margin: 20,
  }
})

const mockCC = [
  {
    employeeId: '1234563',
    fullName: 'John Tan',
    phoneNumber: '+65 9874 6572',
    email: 'abc@jod.com'
  }, {
    employeeId: '4928373',
    fullName: 'kasdjfk aieurieurie',
    phoneNumber: '+65 8474 3565',
    email: 'abasdfasdfc@jeeee.com'
  }, {
    employeeId: '7846573',
    fullName: 'Jadf def',
    phoneNumber: '+65 9873 5555',
    email: 'ab3333c@j55tt.com'
  }, {
    employeeId: '2094375',
    fullName: 'anc tttt',
    phoneNumber: '+65 9834 2323',
    email: 'abc64565gfgee@juhy.com'
  },
]