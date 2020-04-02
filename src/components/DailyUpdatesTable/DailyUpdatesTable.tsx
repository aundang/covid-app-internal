// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/styles';
import  React, {useState} from 'react';
import { useSelector} from 'react-redux';
import { useActions } from '../../actions';
import * as EmployeeActions from '../../actions/employee';
import { IEmployee } from '../../model';
import { RootState } from '../../reducers';
import { EmployeeDialog } from '../Employee/EmployeeDiaglog';



export const DailyUpdatesTable = () => {
    const classes = useStyles();
    const employeeList = useSelector((state: RootState) => state.employeeList);
    const employeeActions = useActions(EmployeeActions);
   // const [employeeData, setEmployeeData] = useState<>([]);

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = (emp: IEmployee) => {
        employeeActions.updateEmployee({
            empId: emp.empId,
            lastName: emp.lastName,
            firstName: emp.firstName,
            department: emp.department,
            acctName: emp.acctName
        });

        setOpen(true);
        console.log(emp);
    };

    return (
        <Paper className={classes.paper}>
            <EmployeeDialog open={open} onClose={handleClose} />
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell padding="default">Date</TableCell>
                        <TableCell padding="default">Personal Status</TableCell>
                        <TableCell padding="default">On Personal Leave</TableCell>
                        <TableCell padding="default">Work From Home</TableCell>
                        <TableCell padding="default">Work Location</TableCell>
                        <TableCell padding="default">Country</TableCell>
                        <TableCell padding="default">TravelStatus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employeeList.map((employee: IEmployee) => {
                        return (
                            <TableRow key={employee.empId} hover>
                                <TableCell padding="default">{employee.empId}</TableCell>
                                <TableCell padding="default">{employee.firstName}</TableCell>
                                <TableCell padding="default">{employee.lastName}</TableCell>
                                <TableCell padding="default">{employee.department}</TableCell>
                                <TableCell padding="default">{employee.acctName}</TableCell>
                                <TableCell padding="default">
                                    <IconButton
                                        aria-label="Delete"
                                        color="default"
                                        onClick={() =>
                                            employeeActions.deleteEmployee(employee.empId)
                                        }
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>

                                <TableCell padding="default">
                                    <IconButton
                                        aria-label="Delete"
                                        color="default"
                                        onClick={() => handleUpdate(employee)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

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

