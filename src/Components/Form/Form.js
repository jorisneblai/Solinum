import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';

import './Form.css';

// This function setup a form with a State to send new datas submitted in the Dashboard main function.
const Form = (props) => {
    const [name, setName] = useState(props.contribution && props.contribution.name);
    const [email, setEmail] = useState(props.contribution && props.contribution.email);
    const [number, setNumber] = useState(props.contribution && props.contribution.number);
    const [street, setStreet] = useState(props.contribution && props.contribution.street);
    const [zip, setZip] = useState(props.contribution && props.contribution.zip);
    const [city, setCity] = useState(props.contribution && props.contribution.city);
    const [type, setType] = useState((props.contribution && props.contribution.type) || "");

    // This function helps to clear all the inputs when the form is submitted.
    const clearInputs = () => {
        setName("");
        setEmail("");
        setNumber("");
        setStreet("");
        setZip("");
        setCity("");
        setType("");
    }

    // When the form is submitted adding a new object in the array with all the new key/values entered in the different inputs.
    const onSubmit = (e) => {
        e.preventDefault();
        const dataContrib = {
            "name": name,
            "email": email,
            "number": number,
            "street": street,
            "zip": zip,
            "city": city,
            "type": type,
            "status": "Brouillon"
        }

        props.handleSubmit(dataContrib);
        clearInputs();
    }

    return (
        <div className="form">
            <Divider 
                textAlign="left"
            >
                Formulaire de contribution de points d'int??r??ts g??olocalis??s (POI)
            </Divider>
            <Box
                component="form"
                textAlign="left"
                sx={{
                    '& .MuiTextField-root': {
                        m: 1,
                        display: 'flex',
                    },
                }}
                onSubmit={onSubmit}
            >
                <div className="form-box">
                    <TextField
                        label="Nom"
                        id="name"
                        size="small"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="E-Mail"
                        id="email"
                        type="email"
                        size="small"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Box
                        sx={{ display: "flex" }}
                    >
                        <TextField
                            label="N??"
                            id="street_number"
                            size="small"
                            sx={{
                                ".MuiInputBase-input": {
                                    width: '5ch',
                                }
                            }}
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                        />
                        <TextField
                            label="Route"
                            id="route"
                            size="small"
                            sx={{
                                ".MuiInputBase-input": {
                                    width: '75ch',
                                }
                            }}
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
                        />
                    </Box>
                    <TextField
                        label="Code Postal"
                        id="zip_code"
                        size="small"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                    <TextField
                        label="Ville"
                        id="city"
                        size="small"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <Divider variant="middle" />
                    <FormControl sx={{ m: 1, width: 272 }} size="small">
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                            labelId="select-type"
                            id="simple-select"
                            label="Type"
                            defaultValue={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value=""><em>Non d??fini</em></MenuItem>
                            <MenuItem value="distribution">Distribution</MenuItem>
                            <MenuItem value="douche">Douche</MenuItem>
                            <MenuItem value="wifi">Wi-Fi</MenuItem>
                        </Select>
                    </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                    className="form-btn"
                    onClick={(e) => onSubmit(e)}
                >
                    Ajouter
                </Button>
                </div>

            </Box>
        </div>
    )
}



export default Form;