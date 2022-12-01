import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

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
    }

    return (
        <div className="form">
            <h2 className="form-header">
                Formulaire de contribution de points d'intérêt géolocalisé (POI)
            </h2>
            <p className="form-header-paragraph">
                Ajouter un point d'intérêt géolocalisé (distribution, douche, Wi-Fi)
            </p>
            <Box
                component="form"
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
                    <TextField
                        label="N°"
                        id="street_number"
                        size="small"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <TextField
                        label="Route"
                        id="route"
                        size="small"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                    />
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
                    <FormControl fullWidth>
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                            labelId="select-type"
                            id="simple-select"
                            label="Type"
                            defaultValue={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <MenuItem value=""><em>Non défini</em></MenuItem>
                            <MenuItem value="distribution">Distribution</MenuItem>
                            <MenuItem value="douche">Douche</MenuItem>
                            <MenuItem value="wifi">Wi-Fi</MenuItem>
                        </Select>
                    </FormControl>

                <Button
                    type="submit"
                    variant="contained"
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