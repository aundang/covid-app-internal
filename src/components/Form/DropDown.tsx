import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';

export interface DropDownListProps {
    onChange: any;
    styles: any;
    label: string;
}

const DropDownList: React.SFC<DropDownListProps> = ({onChange, styles, label}) => {
    const [country, setCountry] = useState<string>("");
   // const classes = useStyles();

    const handleChange = (value: any) => {
        onChange(value);
        setCountry(value);
    }
    return (
        <FormControl variant="outlined" className = {styles}>
            <InputLabel id="countryLabel">{label}</InputLabel>
            <Select
                labelId="countryLabel"
                id="countrySelect"
                value={country}
                onChange= {(eve) => handleChange(eve.target.value)}
                label= {label}
            >   
                <MenuItem value={"Singapore"}>Singapore</MenuItem>
                <MenuItem value={"Malaysia"}>Malaysia</MenuItem>
                <MenuItem value={"Thailand"}>Thailand</MenuItem>
            </Select>
        </FormControl>
    );
}

export default DropDownList;


// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         formControl: {
//             margin: theme.spacing(1),
//             minWidth: 120,
//         }
//     }),
// );
