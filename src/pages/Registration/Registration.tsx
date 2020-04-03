import React, { useState} from 'react';
import { FormControl, Grid, FormGroup, Paper, Typography  } from '@material-ui/core';
import TextBox from '../../components/Form/TextBox';
import SubmitButton from '../../components/Form/SubmitButton';
import { makeStyles} from '@material-ui/styles';
import DropDown from '../../components/Form/DropDown';
import { useActions } from '../../actions/';
import * as RegistrationActions from '../../actions/RegistrationForm';
import { history } from '../../configureStore';


export interface RegistrationProps {}

export const Registration: React.SFC<RegistrationProps> = () => {
  const classes = useStyles();
  // initial states for the text fields
  const [EmployeeId, setEmployeeId] = useState<string>('');
  const [FirstName, setFirstName] = useState<string>('');
  const [LastName, setLastName] = useState<string>('');
  const [ManagerFirstName, setManagerFirstName] = useState<string>('');
  const [ManagerLastName, setManagerLastName] = useState<string>('');
  const [ManagerEmpId, setManagerEmpId] = useState<string>('');
  const [Role, setRole] = useState<string>('');
  const [MISDepartment, setMISDepartment] = useState<string>('');
  const [Account, setAccount] = useState<string>('');
  const [Country, setCountry] = useState<string>('');
  const [WorkLocation, setWorkLocation] = useState<string>('');
  const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(false);

  const registrationActions = useActions(RegistrationActions);

  // gets the payload from the text fields
  const handleSubmit = (e: any) => {
    console.log('Submitting');
    registrationActions.submitData({
      employeeId: EmployeeId,
      firstName: FirstName,
      lastName: LastName,
      managerFirstName: ManagerFirstName,
      managerLastName: ManagerLastName,
      managerEmployeeId: ManagerEmpId,
      role: Role,
      MISDepartment: MISDepartment,
      accountName: Account,
      country: Country,
      workLocation: WorkLocation
    });
    history.push('/dailyupdates');
  };

  // sets the state values for the individual fields
  const handleEmployeeId = (value: string) => {
    setEmployeeId(value);
  };

  const handleFirstName = (value: string) => {
    setFirstName(value);
    console.log(value);
  };

  const handleLastName = (value: string) => {
    setLastName(value);
  };

  const handleManagerFirstName = (value: string) => {
    setManagerFirstName(value);
  };

  const handleManagerLastName = (value: string) => {
    setManagerLastName(value);
  };

  const handleManagerEmpId = (value: string) => {
    setManagerEmpId(value);
  };

  const handleRole = (value: string) => {
    setRole(value);
  };

  const handleMISDepartment = (value: string) => {
    setMISDepartment(value);
  };

  const handleAccountName = (value: string) => {
    setAccount(value);
  };

  const handleCountry = (value: string) => {
    setCountry(value);
  };

  const handleWorkLocation = (value: string) => {
    setWorkLocation(value);
  };

  return (
    <Paper elevation={3} className={classes.paper}>
    <Grid container direction = "column" alignContent = 'center'>
      <FormGroup >

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Employee Id
            </Typography>
            <TextBox
              placeholder={"Employee Id"}
              readOnly={false}
              styles={""}
              onChange={handleEmployeeId}
              textValue=""
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              First Name
            </Typography>
            <TextBox
              placeholder={"First Name"}
              readOnly={false}
              styles={""}
              onChange={handleFirstName}
              textValue=""
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Last Name
            </Typography>
            <TextBox
              placeholder={"Last Name"}
              readOnly={false}
              styles={""}
              onChange={handleLastName}
              textValue=""
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
             Manager's First Name
            </Typography>
            <TextBox
              placeholder={"Manager's First Name"}
              readOnly={false}
              styles={""}
              onChange={handleManagerFirstName}
              textValue=""
            />
          </FormControl>  

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Manager's Last Name
            </Typography>
            <TextBox
              placeholder={"Manager's Last Name"}
              readOnly={false}
              styles={""}
              onChange={handleManagerLastName}
              textValue=""
            />
          </FormControl>  

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Manager's Employee Id
            </Typography>
            <TextBox
              placeholder={"Manager's Employee Id"}
              readOnly={false}
              styles={""}
              onChange={handleManagerEmpId}
              textValue=""
            />
          </FormControl>  
          
          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Role
            </Typography>
            <TextBox
              placeholder={"Role"}
              readOnly={false}
              styles={""}
              onChange={handleRole}
              textValue=""
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              MIS Department
            </Typography>
            <TextBox
              placeholder={"MIS Department"}
              readOnly={false}
              styles={""}
              onChange={handleMISDepartment}
              textValue=""
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Account Name
            </Typography>
            <TextBox
              placeholder={"handleAccountName"}
              readOnly={false}
              styles={""}
              onChange={handleAccountName}
              textValue=""
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Country
            </Typography>
            <DropDown
              label="Country"
              onChange={handleCountry}
              styles={""}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Work Location
            </Typography>
            <TextBox
              placeholder={"Work Location"}
              readOnly={false}
              styles={""}
              onChange={handleWorkLocation}
              textValue=""
            />
          </FormControl>
            <SubmitButton disable={disableSubmitButton} onClick={handleSubmit} />
      </FormGroup >
    </Grid>
     </Paper >
  );
};

const useStyles = makeStyles({
  paper: {
    margin: '20px',
  },

  inputFields: {
    marginBottom: 15,
    marginTop: 15,
    width: '400px',
  },
});
