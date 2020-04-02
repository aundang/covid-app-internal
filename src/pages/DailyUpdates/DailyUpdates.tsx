import React, {useState} from 'react';
import Box from '@material-ui/core/Box';
import { FormControl, InputLabel } from '@material-ui/core';
import TextBox from '../../components/Form/TextBox';
import SubmitButton from '../../components/Form/SubmitButton';
import { makeStyles, StylesContext } from '@material-ui/styles';
import DropDown from '../../components/Form/DropDown';
import Button from '@material-ui/core/Button';

export interface DailyUpdatesProps {
    
}
 
export const DailyUpdates: React.SFC<DailyUpdatesProps> = () => {

    const classes = useStyles();
    // initial states for the text fields 
    const [EmployeeId, setEmployeeId] = useState<string>("");
    const [buttonColorTravel1, setButtonColorTravel1 ] = useState<any>("Transparent");
    const [buttonColorTravel2, setButtonColorTravel2] = useState<any>("Transparent");
    const [CountryVisibility, setCountryVisibility] = useState<any>("hidden");


    // when form submitted, capture the payload
    const handleSubmit = (e: any) => {

    }

    const handleEmployeeId = () => {

    }

    const handlePersonalStatus = () => {

    }

    const handleTravelButton1 = () => {
        if(buttonColorTravel1 === "Transparent") {
        setButtonColorTravel1("secondary");
        setButtonColorTravel2("Transparent");
        setCountryVisibility("");
        } 
    }

    const handleTravelButton2 = () => {
        if (buttonColorTravel2 === "Transparent") {
            setButtonColorTravel2("secondary");
            setButtonColorTravel1("Transparent");
            setCountryVisibility("hidden");
        } 
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
                            textValue = "" />
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
                            textValue="" />
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
                            textValue="" />
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
                            textValue="" />
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
                            textValue="" />
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
                            textValue="" />
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

                    <Box id = "travel" visibility = {CountryVisibility}>
                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.CountryLabel}>Country:</InputLabel>
                            <DropDown label = "Country" onChange={handlePersonalStatus} styles={classes.CountryDropDown} />
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
                                    onChange={""}
                                    textValue="" />
                            </FormControl>
                        </Box>
                        

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.WorkFromHomeCountryLabel}>Work From Home: </InputLabel>
                            <div className="col1">
                                <Button variant="contained" color={buttonColorTravel1} className={classes.WorkFromHomebutton1}
                                    onClick={handleTravelButton1}>
                                    Yes
                        </Button>
                            </div>
                            <div className="col2">
                                <Button variant="contained" color={buttonColorTravel2} className={classes.WorkFromHomebutton2}
                                    onClick={handleTravelButton2}>
                                    No
                        </Button>
                            </div>
                        </FormControl>
                    </Box>

                    <Box display="flex" justifyContent="flex-start">
                        <FormControl>
                            <InputLabel className={classes.OnPersonalLeaveCountryLabel}>On Personal Leave: </InputLabel>
                            <div className="col1">
                                <Button variant="contained" color={buttonColorTravel1} className={classes.OnPersonalLeavebutton1}
                                    onClick={handleTravelButton1}>
                                    Yes
                        </Button>
                            </div>
                            <div className="col2">
                                <Button variant="contained" color={buttonColorTravel2} className={classes.OnPersonalLeavebutton2}
                                    onClick={handleTravelButton2}>
                                    No
                        </Button>
                            </div>
                        </FormControl>
                    </Box>


                    </Box>

            </form>
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

    Button: {
        position: 'absolute',
        left: '700px',
        top: '1100px',
    },

});




