import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

export interface DropDownListProps {
    onChange: any;
    styles: any;
    label: string;
    values: string [];
}

const DropDownList: React.SFC<DropDownListProps> = ({values, onChange, styles, label}) => {
    const [value, setvalue] = useState<string>("");



    const handleChange = (value: any) => {
        onChange(value);
        setvalue(value);
    }

    console.log(values);
    return (
        <FormControl variant="outlined" className = {styles}>
            <InputLabel id="valueLabel">{label}</InputLabel>
            <Select
                value={value}
                onChange= {(eve) => handleChange(eve.target.value)}
                label= {label}
            >    
            
                {values ?   values.map((value: string, index: number) => {
                    return (
                        <MenuItem key = {index} value={value}>{value}</MenuItem>
                    );
                }) : null}
              
            </Select>
        </FormControl>
    );
}

export default DropDownList;
