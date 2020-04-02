import * as React from 'react';
import { Grid, Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';
import { useActions } from '../../actions';
import * as TeamActions from '../../actions/team';
import { TeamList } from '../../model';
import { RootState } from '../../reducers'; 
import { Link } from 'react-router-dom';
import { CloseContactModal } from './CloseContactModal';

export function TeamTable () {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [selectedCC, setSelectedCC] = React.useState<TeamList>({
    employeeId: '',
    fullName: '',
    latestDate: '',
    MISDepartment: '',
    workLocation: '',
    personalStatus: '',
    travelStatus: ''
  })
  const teamActions = useActions(TeamActions)
  
  const handleCloseCC = () => {
    setOpen(false)
  }

  const handleOpenCC = (teamMate: TeamList) => {
    setSelectedCC(teamMate)
    setOpen(true)
  }


  React.useEffect(() => { 
    teamActions.setTeamList(teamListData)
  }, [])
  
  const teamList = useSelector((state: RootState) => state.teamList)

  function highlight(personalStatus: string) {
    switch(personalStatus) {
      case 'Confirmed Case':
        return classes.red

      case 'Suspected Case':
        return classes.orange

      case 'Stay-Home Notice':
        return classes.green
      
      case 'Leave of Absence':
        return classes.blue

      case 'Extra Precautionary Measure':
        return classes.purple
      
      default:
        return ''
    }
  }

  return (
    <Grid item xs={12}>
      <CloseContactModal open={open} onClose={handleCloseCC} selectedCC={selectedCC} />
      <Paper>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Employee ID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Latest Date</TableCell>
              <TableCell>MIS Department</TableCell>
              <TableCell>Work Location</TableCell>
              <TableCell>Personal Status</TableCell>
              <TableCell>Past Travel Status</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {teamList.map((teamMate: TeamList, i: number) => {
              return (
                <TableRow key={i}
                  // component={Link}
                  // to={'/tracker/'+ teamMate.employeeId}
                  className={highlight(teamMate.personalStatus) + ' ' + classes.row}
                >
                  <TableCell>{teamMate.employeeId}</TableCell>
                  <TableCell>{teamMate.fullName}</TableCell>
                  <TableCell>{teamMate.latestDate}</TableCell>
                  <TableCell>{teamMate.MISDepartment}</TableCell>
                  <TableCell>{teamMate.workLocation}</TableCell>
                  <TableCell>{teamMate.personalStatus}</TableCell>
                  <TableCell>{teamMate.travelStatus}</TableCell>
                  <TableCell>
                    {highlight(teamMate.personalStatus) 
                    ?<Button size="small" variant="contained" color="primary" onClick={() => handleOpenCC(teamMate)}>Close Contact</Button>
                    : null}
                  </TableCell>
                </TableRow>
                
              )
            })}
          </TableBody>
        </Table>
      </Paper>
    </Grid>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    width: '100%',
    minWidth: 260,
    display: 'inline-block'
  },
  table: {
    wisth: '100%',
    minWidth: 900
  },
  row: {
    cursor: 'pointer'
  },
  red: {
    background: '#FF6283',
  },
  orange: {
    background: '#FF9F41'
  },
  green: {
    background: '#4DBFC0'
  },
  blue: {
    background: '#37A3EB'
  },
  purple: {
    background: '#A54FFB'
  },
  button: {
    background: '#'
  }
}));

const teamListData = [
  {
    employeeId: '1234563',
    fullName: 'John Tan',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Work from home',
    personalStatus: 'No Status',
    travelStatus: 'No Travel'
  }, {
    employeeId: '1465464',
    fullName: 'Elis Chua',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Client Side',
    personalStatus: 'Confirmed Case',
    travelStatus: 'No Travel'
  }, {
    employeeId: '1874834',
    fullName: 'dsd sdsdf',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Work from home',
    personalStatus: 'Suspected Case',
    travelStatus: 'No Travel'
  }, {
    employeeId: '1255443',
    fullName: 'ahdkeiu',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Work from home',
    personalStatus: 'Stay-Home Notice',
    travelStatus: 'No Travel'
  }, {
    employeeId: '1288665',
    fullName: 'sdfs sdsd',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Work from home',
    personalStatus: 'Leave of Absence',
    travelStatus: 'No Travel'
  }, {
    employeeId: '1657455',
    fullName: 'Jojojojoo',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Client Side',
    personalStatus: 'Extra Precautionary Measure',
    travelStatus: 'No Travel'
  }, {
    employeeId: '1887733',
    fullName: 'Darce',
    latestDate: '20 March 2020',
    MISDepartment: 'CDE',
    workLocation: 'Client Side',
    personalStatus: 'No Status',
    travelStatus: 'No Travel'
  },
]

