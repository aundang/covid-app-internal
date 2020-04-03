import React, { useState, useEffect } from 'react';
import { FormControl, Grid, FormGroup, Paper, Typography} from '@material-ui/core';
import TextBox from '../../components/Form/TextBox';
import SubmitButton from '../../components/Form/SubmitButton';
import { makeStyles, StylesContext } from '@material-ui/styles';
import DropDown from '../../components/Form/DropDown';
import Button from '@material-ui/core/Button';
import { DailyUpdatesTable } from '../../components/DailyUpdatesTable/DailyUpdatesTable';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers';
import { useActions } from '../../actions/';
import * as DailyUpdatesActions from '../../actions/DailyUpdates';

export interface DailyUpdatesProps { }

export const DailyUpdates: React.SFC<DailyUpdatesProps> = () => {
  const classes = useStyles();
  // const registrationActions = useActions(RegistrationActions);
  const registrationData = useSelector(
    (state: RootState) => state.registrationData
  );

  const dailyUpdatesActions = useActions(DailyUpdatesActions);

  // initial states for the text fields
  const [currentTravelStatus, setCurrentTravelStatus] = useState<string>('');
  const [Country, setCountry] = useState<string>('Singapore');
  const [PersonalStatus, setPersonalStatus] = useState<string>('');
  const [OfficeLocation, setOfficeLocation] = useState<string>(registrationData.workLocation ? registrationData.workLocation : '');
  const [WorkFromHome, setWorkFromHome] = useState<string>('');
  const [PersonalLeave, setPersonalLeave] = useState<string>('');
  const [showCountry, setShowCountry] = useState<boolean>(false);
  const[personalStatusArray, setPersonalStatusArray] = useState<string[]>([
    'No Status', 'Confirmed Case', 'Suspected Case', 'SHN', 'LOA', 'Extra Precautionary Measure'
  ]);
  const [countryArray, setCountryArray] = useState<string[]>([
    'Singapore', 'Malaysia', 'Thailand', 'Indonesia'
  ]);


  // switch cases
  const [buttonColorTravel1, setButtonColorTravel1] = useState<any>(
    'Transparent'
  );
  const [buttonColorTravel2, setButtonColorTravel2] = useState<any>(
    'secondary'
  );
  const [CountryVisibilityTravel, setCountryVisibilityTravel] = useState<
    string
  >('hidden');
  const [CountryVisibilityNoTravel, setCountryVisibilityNoTravel] = useState<
    string
  >('hidden');
  const [buttonColorWorkFromHome1, setButtonColorWorkFromHome1] = useState<any>(
    'Transparent'
  );
  const [buttonColorWorkFromHome2, setButtonColorWorkFromHome2] = useState<any>(
    'Transparent'
  );
  const [buttonColorPersonalLeave1, setbuttonColorPersonalLeave1] = useState<
    any
  >('Transparent');
  const [buttonColorPersonalLeave2, setButtonColorPersonalLeave2] = useState<
    any
  >('Transparent');
  const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(
    false
  );

  // when form submitted, capture the payload
  const handleSubmit = (e: any) => {
    const payload = {
      date: new Date().toString().substr(0, 15),
      employeeId: registrationData.employeeId,
      associateName: registrationData.firstName + " " + registrationData.lastName,
      MISDepartment: registrationData.MISDepartment,
      accountName: registrationData.accountName,
      managerName: registrationData.managerFirstName + " " + registrationData.managerLastName,
      role: registrationData.role,
      currentTravelStatus: currentTravelStatus,
      country: Country,
      personalStatus: PersonalStatus,
      officeLocation: OfficeLocation,
      workFromHome: WorkFromHome,
      onPersonalLeave: PersonalLeave
    };

    dailyUpdatesActions.submitDailyUpdatesData(payload);
    
  };

  // Events
  const handleTravelButton1 = () => {
    if (buttonColorTravel1 === 'Transparent') {
      setButtonColorTravel1('secondary');
      setButtonColorTravel2('Transparent');
      setShowCountry(true);
    }

    setShowCountry(true);
    setCurrentTravelStatus('Travel');
  };

  const handleTravelButton2 = () => {
    if (buttonColorTravel2 === 'Transparent') {
      setButtonColorTravel2('secondary');
      setButtonColorTravel1('Transparent');
    }

    setShowCountry(false);
    setCurrentTravelStatus('No Travel');
    setCountry('Singapore');
  };

  const handleCountry = (value: string) => {
    setCountry(value);
  };

  const handlePersonalStatus = (value: string) => {
    setPersonalStatus(value);
  };

  const handleOfficeLocation = (value: string) => {
    setOfficeLocation(value);
  };

  const handleWorkFromHomeButton1 = () => {
    if (buttonColorWorkFromHome1 === 'Transparent') {
      setButtonColorWorkFromHome1('secondary');
      setButtonColorWorkFromHome2('Transparent');
    }

    setWorkFromHome('Yes');
  };

  const handleWorkFromHomeButton2 = () => {
    if (buttonColorWorkFromHome2 === 'Transparent') {
      setButtonColorWorkFromHome2('secondary');
      setButtonColorWorkFromHome1('Transparent');
    }
    setWorkFromHome('No');
  };

  const handlePersonalLeaveButton1 = () => {
    if (buttonColorPersonalLeave1 === 'Transparent') {
      setbuttonColorPersonalLeave1('secondary');
      setButtonColorPersonalLeave2('Transparent');
    }

    setPersonalLeave('Yes');
  };

  const handlePersonalLeaveButton2 = () => {
    if (buttonColorPersonalLeave2 === 'Transparent') {
      setButtonColorPersonalLeave2('secondary');
      setbuttonColorPersonalLeave1('Transparent');
    }

    setPersonalLeave('No');
  };

  return (
    <>
    <Paper elevation={3} className={classes.paper}>
        <Typography align = 'center'>DailyUpdate's Screen</Typography>
   

      <Grid container direction="column" alignContent='center'>
        <FormGroup >

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Employee Id
            </Typography>
            <TextBox
              placeholder={"Employee Id"}
              readOnly={true}
              styles={''}
              onChange={''}
              textValue={registrationData.employeeId}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Associate Name
            </Typography>
            <TextBox
              placeholder={"Associate Name"}
              readOnly={true}
              styles={''}
              onChange={''}
              textValue={registrationData.firstName + " " + registrationData.lastName}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              MIS Department
            </Typography>
            <TextBox
              placeholder={"MIS Department"}
              readOnly={true}
              styles={''}
              onChange={''}
              textValue={registrationData.MISDepartment}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Account Name
            </Typography>
            <TextBox
              placeholder={"Account Name"}
              readOnly={true}
              styles={''}
              onChange={''}
              textValue={registrationData.accountName}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Manager Name
            </Typography>
            <TextBox
              placeholder={"Manager Name"}
              readOnly={true}
              styles={''}
              onChange={''}
              textValue={registrationData.managerFirstName + " " + registrationData.managerLastName}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Role
            </Typography>
            <TextBox
              placeholder={"Role"}
              readOnly={true}
              styles={''}
              onChange={''}
              textValue={registrationData.role}
            />
          </FormControl>

          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Current Travel Status
            </Typography>
            <Grid
              justify="space-between" // Add it here :)
              container
             
            >
               <Button
                variant="contained"
                color={buttonColorTravel1}
                className={classes.button}
                onClick={handleTravelButton1}
              >
                Travel
              </Button>
              <Button
                variant="contained"
                color={buttonColorTravel2}
                className={classes.button}
                onClick={handleTravelButton2}
              >
                No Travel
              </Button>
              </Grid>
          </FormControl>

        {showCountry ? (
          <FormGroup>
            <FormControl className={classes.inputFields}>
              <Typography variant="h6">
                Country
            </Typography>
                  <DropDown
                    values={countryArray}
                    label="Country"
                    onChange={handleCountry}
                    styles={''}
                  />
            </FormControl>

            <FormControl className={classes.inputFields}>
              <Typography variant="h6">
                Personal Status
            </Typography>
              <DropDown
                values = {personalStatusArray}
                label="Personal Status"
                onChange={handlePersonalStatus}
                styles={''}
              />
            </FormControl>

              <FormControl className={classes.inputFields}>
                <Typography variant="h6">
                  Office Location
            </Typography>
              <TextBox
                placeholder={"Office Location"}
                readOnly={false}
                styles={''}
                onChange={handleOfficeLocation}
                textValue={registrationData.workLocation}
              />
              </FormControl>

              <FormControl className={classes.inputFields}>
                <Typography variant="h6">
                  Current Travel Status
            </Typography>
                <Grid
                  justify="space-between" // Add it here :)
                  container
                >
    
                <Button
                  variant="contained"
                  color={buttonColorWorkFromHome1}
                  className={classes.button}
                  onClick={handleWorkFromHomeButton1}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color={buttonColorWorkFromHome2}
                  className={classes.button}
                  onClick={handleWorkFromHomeButton2}
                >
                  No
                </Button>
    
                </Grid>
              </FormControl>

              <FormControl className={classes.inputFields}>
                <Typography variant="h6">
                  On Personal Leave
            </Typography>
                <Grid
                  justify="space-between" // Add it here :)
                  container
                >

              <Button
                  variant="contained"
                  color={buttonColorPersonalLeave1}
                  className={classes.button}
                  onClick={handlePersonalLeaveButton1}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color={buttonColorPersonalLeave2}
                  className={classes.button}
                  onClick={handlePersonalLeaveButton2}
                >
                  No
                </Button>

                </Grid>
              </FormControl>
            </FormGroup>
          ) : (<FormGroup>
          <FormControl className={classes.inputFields}>
            <Typography variant="h6">
              Personal Status
            </Typography>
            <DropDown
              values = {personalStatusArray}
              label="Personal Status"
              onChange={handlePersonalStatus}
              styles={''}
            />
          </FormControl>

            <FormControl className={classes.inputFields}>
              <Typography variant="h6">
                Office Location
            </Typography>
              <TextBox
                placeholder={"Office Location"}
                readOnly={false}
                styles={''}
                onChange={handleOfficeLocation}
                textValue={registrationData.workLocation}
              />
            </FormControl>

            <FormControl className={classes.inputFields}>
              <Typography variant="h6">
                Current Travel Status
            </Typography>
              <Grid
                justify="space-between" // Add it here :)
                container
              >

                <Button
                  variant="contained"
                  color={buttonColorWorkFromHome1}
                  className={classes.button}
                  onClick={handleWorkFromHomeButton1}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color={buttonColorWorkFromHome2}
                  className={classes.button}
                  onClick={handleWorkFromHomeButton2}
                >
                  No
                </Button>

              </Grid>
            </FormControl>

            <FormControl className={classes.inputFields}>
              <Typography variant="h6">
                On Personal Leave
            </Typography>
              <Grid
                justify="space-between" // Add it here :)
                container
              >

                <Button
                  variant="contained"
                  color={buttonColorPersonalLeave1}
                  className={classes.button}
                  onClick={handlePersonalLeaveButton1}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  color={buttonColorPersonalLeave2}
                  className={classes.button}
                  onClick={handlePersonalLeaveButton2}
                >
                  No
                </Button>
              </Grid>
            </FormControl>
            </FormGroup>)}

          <SubmitButton disable={disableSubmitButton} onClick={handleSubmit} />
          </FormGroup>
          </Grid>
          </Paper>
    <Paper elevation={3} className={classes.paper}>
    <DailyUpdatesTable />
    </Paper>
</>
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

  button: {
    width: 200
  },
  table: {
    position: 'absolute',
    left: '400px',
    top: '1450px',
    width: '50%'
  }
});
