import React, {useState, useEffect} from 'react';
import Box from '@material-ui/core/Box';
import { FormControl, InputLabel } from '@material-ui/core';
import TextBox from '../../components/Form/TextBox';
import SubmitButton from '../../components/Form/SubmitButton';
import { makeStyles, StylesContext } from '@material-ui/styles';
import DropDown from '../../components/Form/DropDown';
import Button from '@material-ui/core/Button';
import { DailyUpdatesTable} from '../../components/DailyUpdatesTable/DailyUpdatesTable';

export interface DailyUpdatesProps {
    
}
 
export const DailyUpdates: React.SFC<DailyUpdatesProps> = () => {

    const classes = useStyles();

    // initial states for the text fields 
    const [EmployeeId, setEmployeeId] = useState<string>("");
    const [AssociateName, setAssociateName] = useState<string>("");
    const [MISDepartment, setMISDepartment] = useState<string>("");
    const [AccountName, setAccountName] = useState<string>("");
    const [ManagerName, setManagerName] = useState<string>("");
    const [Role, setRole] = useState<string>("");
    const [currentTravelStatus, setCurrentTravelStatus] = useState<string>("");
    const [Country, setCountry] = useState<string>("Singapore");
    const [PersonalStatus, setPersonalStatus] = useState<string>("");
    const [OfficeLocation, setOfficeLocation] = useState<string>("");
    const [WorkFromHome, setWorkFromHome] = useState<string>("");
    const [PersonalLeave, setPersonalLeave] = useState<string>("");

    useEffect(
        () => {
           setEmployeeId("emp id");
           setAssociateName("associate name");
           setMISDepartment("mis department");
           setAccountName("account name");
           setManagerName("manager name");
           setRole("role");
           setOfficeLocation("location");
        },
        [EmployeeId, AssociateName, MISDepartment, AccountName, ManagerName, Role]
    ); 





    // switch cases 
    const [buttonColorTravel1, setButtonColorTravel1 ] = useState<any>("Transparent");
    const [buttonColorTravel2, setButtonColorTravel2] = useState<any>("Transparent");
    const [CountryVisibilityTravel, setCountryVisibilityTravel] = useState<string>("hidden");
    const [CountryVisibilityNoTravel, setCountryVisibilityNoTravel] = useState<string>("hidden");
    const [buttonColorWorkFromHome1, setButtonColorWorkFromHome1] = useState<any>("Transparent");
    const [buttonColorWorkFromHome2, setButtonColorWorkFromHome2] = useState<any>("Transparent");
    const [buttonColorPersonalLeave1, setbuttonColorPersonalLeave1] = useState<any>("Transparent");
    const [buttonColorPersonalLeave2, setButtonColorPersonalLeave2] = useState<any>("Transparent");
    const [disableSubmitButton, setDisableSubmitButton] = useState<boolean>(false);


    // when form submitted, capture the payload
    const handleSubmit = (e: any) => {
        const payload = {
            date: new Date().toString().substr(0,15),
            employeeId: EmployeeId,
            associateName: AssociateName,
            MISDepartment: MISDepartment,
            accountName: AccountName,
            managerName: ManagerName,
            role: Role,
            currentTravelStatus: currentTravelStatus,
            country: Country,
            personalStatus: PersonalStatus,
            officeLocation: OfficeLocation,
            workFromHome: WorkFromHome,
            onPersonalLeave: PersonalLeave
        }

        console.log(payload);
    }

    // Events 
    const handleTravelButton1 = () => {
        if (buttonColorTravel1 === "Transparent") {
            setButtonColorTravel1("secondary");
            setButtonColorTravel2("Transparent");
        }
        setCountryVisibilityTravel("");
        setCountryVisibilityNoTravel("hidden");
        setCurrentTravelStatus("Travel");

    }

    const handleTravelButton2 = () => {
        if (buttonColorTravel2 === "Transparent") {
            setButtonColorTravel2("secondary");
            setButtonColorTravel1("Transparent");
        }
        setCountryVisibilityTravel("hidden");
        setCountryVisibilityNoTravel("");
        setCurrentTravelStatus("No Travel");
        setCountry("Singapore");
    }

    const handleCountry = (value: string) => {
        setCountry(value);
    }

    const handlePersonalStatus = (value: string) => {
        setPersonalStatus(value);
    }

    const handleOfficeLocation = (value: string) => {
        setOfficeLocation(value);
    }

    const handleWorkFromHomeButton1 = () => {
        if (buttonColorWorkFromHome1 === "Transparent") {
            setButtonColorWorkFromHome1("secondary");
            setButtonColorWorkFromHome2("Transparent");
        }

        setWorkFromHome("Yes");
    }

    const handleWorkFromHomeButton2 = () => {
        if (buttonColorWorkFromHome2 === "Transparent") {
            setButtonColorWorkFromHome2("secondary");
            setButtonColorWorkFromHome1("Transparent");
        }
        setWorkFromHome("No");
    }
    
    const handlePersonalLeaveButton1 = () => {
        if (buttonColorPersonalLeave1 === "Transparent") {
            setbuttonColorPersonalLeave1("secondary");
            setButtonColorPersonalLeave2("Transparent");
        }

        setPersonalLeave("Yes");
    }

    const handlePersonalLeaveButton2 = () => {
        if (buttonColorPersonalLeave2=== "Transparent") {
            setButtonColorPersonalLeave2("secondary");
            setbuttonColorPersonalLeave1("Transparent");
        }

        setPersonalLeave("No");
    }


    return ( 
        <div>

            <form onSubmit={handleSubmit}>
                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.EmpIdLabel}>Employee Id: </InputLabel>
                        <TextBox
                            label="Employee Id"
                            readOnly={true}
                            styles={classes.EmpIdTextBox}
                            onChange={""}
                            textValue = {EmployeeId} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.AssociateNameLabel}>Associate Name: </InputLabel>
                        <TextBox
                            label="Associate Name"
                            readOnly={true}
                            styles={classes.AssociateNameTextBox}
                            onChange={""}
                            textValue= {AssociateName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.MISDepartmentLabel}>MIS Department: </InputLabel>
                        <TextBox
                            label="Associate Name"
                            readOnly={true}
                            styles={classes.MISDepartmentTextBox}
                            onChange={""}
                            textValue= {MISDepartment} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.AccountNameLabel}>Account Name: </InputLabel>
                        <TextBox
                            label="Account Name"
                            readOnly={true}
                            styles={classes.AccountNameTextBox}
                            onChange={""}
                            textValue= {AccountName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.ManagerNameLabel}>Manager Name: </InputLabel>
                        <TextBox
                            label="Manager Name"
                            readOnly={true}
                            styles={classes.ManagerNameTextBox}
                            onChange={""}
                            textValue= {ManagerName} />
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.RoleLabel}>Role: </InputLabel>
                        <TextBox
                            label="Role"
                            readOnly={true}
                            styles={classes.RoleTextBox}
                            onChange={""}
                            textValue= {Role}/>
                    </FormControl>
                </Box>

                <Box display="flex" justifyContent="flex-start">
                    <FormControl>
                        <InputLabel className={classes.TravelStatusLabel}>Current Travel Status: </InputLabel>
                        <div className = "col1">
                        <Button variant="contained" color = {buttonColorTravel1} className = {classes.TravelStatusbutton1}
                        onClick = {handleTravelButton1}>
                            Travel
                        </Button>
                        </div>
                        <div className = "col2">
                        <Button variant="contained" color={buttonColorTravel2} className={classes.TravelStatusbutton2}
                            onClick={handleTravelButton2}>
                            No Travel
                        </Button>
                        </div>
                    </FormControl>
                    </Box>

                    <Box id = "travel" visibility = {CountryVisibilityTravel}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.CountryLabel}>Country:</InputLabel>
                            <DropDown label = "Country" onChange={handleCountry} styles={classes.CountryDropDown} />
                        </FormControl>
                    </Box>

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.PersonalStatusCountryLabel}>Personal Status:</InputLabel>
                            <DropDown label = "Personal Status" onChange={handlePersonalStatus} styles={classes.PersonalStatusCountryDropDown} />
                        </FormControl>
                    </Box>

                        <Box display="flex" justifyContent="flex-start">
                            <FormControl>
                                <InputLabel className={classes.OfficeLocationCountryLabel}>Office Location:</InputLabel>
                                <TextBox
                                    label="Office Location"
                                    readOnly={false}
                                    styles={classes.OfficeLocationCountryTextBox}
                                    onChange={handleOfficeLocation}
                                    textValue= {OfficeLocation} />
                            </FormControl>
                        </Box>
                        

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.WorkFromHomeCountryLabel}>Work From Home: </InputLabel>
                            <div className="col1">
                                <Button variant="contained" color={buttonColorWorkFromHome1} className={classes.WorkFromHomebutton1}
                                    onClick={handleWorkFromHomeButton1}>
                                    Yes
                        </Button>
                            </div>
                            <div className="col2">
                                <Button variant="contained" color={buttonColorWorkFromHome2} className={classes.WorkFromHomebutton2}
                                    onClick={handleWorkFromHomeButton2}>
                                    No
                        </Button>
                            </div>
                        </FormControl>
                    </Box>

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.OnPersonalLeaveCountryLabel}>On Personal Leave: </InputLabel>
                            <div className="col1">
                                <Button variant="contained" color={buttonColorPersonalLeave1} className={classes.OnPersonalLeavebutton1}
                                    onClick={handlePersonalLeaveButton1}>
                                    Yes
                        </Button>
                            </div>
                            <div className="col2">
                                <Button variant="contained" color={buttonColorPersonalLeave2} className={classes.OnPersonalLeavebutton2}
                                    onClick={handlePersonalLeaveButton2}>
                                    No
                        </Button>
                            </div>
                        </FormControl>
                    </Box>
                </Box>

                <Box id="noTravel" visibility={CountryVisibilityNoTravel}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.PersonalStatusLabel}>PersonalStatus:</InputLabel>
                            <DropDown label="Personal Status" onChange={handlePersonalStatus} styles={classes.PersonalStatusDropDown} />
                        </FormControl>
                    </Box>

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.OfficeLocationLabel}>Office Location:</InputLabel>
                            <TextBox
                                label="Office Location"
                                readOnly={false}
                                styles={classes.OfficeLocationTextBox}
                                onChange={handleOfficeLocation}
                                textValue= {OfficeLocation} />
                        </FormControl>
                    </Box>


                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.WorkFromHomeLabel}>Work From Home: </InputLabel>
                            <div className="col1">
                                <Button variant="contained" color={buttonColorWorkFromHome1} className={classes.WorkFromHomebuttonNoTravel1}
                                    onClick={handleWorkFromHomeButton1}>
                                    Yes
                        </Button>
                            </div>
                            <div className="col2">
                                <Button variant="contained" color={buttonColorWorkFromHome2} className={classes.WorkFromHomebuttonNoTravel2}
                                    onClick={handleWorkFromHomeButton2}>
                                    No
                        </Button>
                            </div>
                        </FormControl>
                    </Box>

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.OnPersonalLeaveLabel}>On Personal Leave: </InputLabel>
                            <div className="col1">
                                <Button variant="contained" color={buttonColorPersonalLeave1} className={classes.OnPersonalLeavebuttonNoTravel1}
                                    onClick={handlePersonalLeaveButton1}>
                                    Yes
                        </Button>
                            </div>
                            <div className="col2">
                                <Button variant="contained" color={buttonColorPersonalLeave2} className={classes.OnPersonalLeavebuttonNoTravel2}
                                    onClick={handlePersonalLeaveButton2}>
                                    No
                        </Button>
                            </div>
                        </FormControl>
                    </Box>
                </Box>
                <div className={classes.Button}>
                    <SubmitButton disable = {disableSubmitButton} onClick={handleSubmit} />
                </div>
            </form>
            <div className = {classes.table}>
            <DailyUpdatesTable/>
            </div>
        </div>
     );
}


const useStyles = makeStyles({
    EmpIdLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '310px',
        right: '1008px',
        top: '20px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F'
    },
    EmpIdTextBox: {
        left: '450px',
        top: '20px',
    },
    AssociateNameLabel: {
        position: 'absolute',
        width: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '60px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F'
    },

    AssociateNameTextBox: {
        //position: 'relative',
        left: '450px',
        top: '60px',
    },
    MISDepartmentLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '100px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    MISDepartmentTextBox: {
        left: '450px',
        top: '100px',
    },

    AccountNameLabel: {
        position: 'absolute',
        width: '200px',
        display: 'flex',
        flexWrap: 'wrap',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '140px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    AccountNameTextBox: {
        left: '450px',
        top: '140px',
    },

    ManagerNameLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '180px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    ManagerNameTextBox: {
        left: '450px',
        top: '180px',
    },

    RoleLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '370px',
        right: '1008px',
        top: '210px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    RoleTextBox: {
        left: '450px',
        top: '210px',
    },

    TravelStatusLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '240px',
        right: '1008px',
        top: '250px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    TravelStatusbutton1: {
        height: '50px',
        left: '450px',
        width: '100px',
        top: '260px',
    },
    TravelStatusbutton2: {
        height: '50px',
        left: '600px',
        width: '110px',
        top: '211px',
    },

    CountryLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '350px',
        right: '1008px',
        top: '260px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    CountryDropDown: {
        width: '200px',
        left: '450px',
        top: '260px',
    },

    PersonalStatusCountryLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '300px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    PersonalStatusCountryDropDown: {
        width: '200px',
        left: '450px',
        top: '300px',
    },

    OfficeLocationCountryLabel: {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        width: '200px',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '340px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    OfficeLocationCountryTextBox: {
        left: '450px',
        top: '340px',
        minWidth: 200,
    },

    WorkFromHomeCountryLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '280px',
        right: '1008px',
        top: '360px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    WorkFromHomebutton1: {
        height: '50px',
        left: '450px',
        width: '100px',
        top: '360px',
    },
    WorkFromHomebutton2: {
        height: '50px',
        left: '600px',
        width: '100px',
        top: '310px',
    },

    OnPersonalLeaveCountryLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '280px',
        right: '1008px',
        top: '350px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    OnPersonalLeavebutton1: {
        height: '50px',
        left: '450px',
        width: '100px',
        top: '350px',
    },
   OnPersonalLeavebutton2: {
        height: '50px',
        left: '600px',
        width: '100px',
        top: '300px',
    },


    PersonalStatusLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '-120px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    PersonalStatusDropDown: {
        width: '200px',
        left: '450px',
        top: '-110px',
    },

    OfficeLocationLabel: {
        position: 'absolute',
        display: 'flex',
        flexWrap: 'wrap',
        width: '200px',
        height: '20px',
        left: '300px',
        right: '1008px',
        top: '-80px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    OfficeLocationTextBox: {
        left: '450px',
        top: '-80px',
        minWidth: 200,
    },

    WorkFromHomeLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '280px',
        right: '1008px',
        top: '-40px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    WorkFromHomebuttonNoTravel1: {
        height: '50px',
        left: '450px',
        width: '100px',
        top: '-40px',
    },
    WorkFromHomebuttonNoTravel2: {
        height: '50px',
        left: '600px',
        width: '100px',
        top: '-89px',
    },

    OnPersonalLeaveLabel: {
        position: 'absolute',
        display: 'flex',
        width: '200px',
        flexWrap: 'wrap',
        height: '20px',
        left: '280px',
        right: '1008px',
        top: '-60px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '20px',
        textAlign: 'center',
        color: '#8F8F8F',
    },

    OnPersonalLeavebuttonNoTravel1: {
        height: '50px',
        left: '450px',
        width: '100px',
        top: '-60px',
    },
    OnPersonalLeavebuttonNoTravel2: {
        height: '50px',
        left: '600px',
        width: '100px',
        top: '-110px',
    },
    Button: {
        position: 'absolute',
        left: '700px',
        top: '1350px',
    },

    table: {
        position: 'absolute',
        left: '400px',
        top: '1450px',
        width: '50%',
    },
});






