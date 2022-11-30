import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import './Form.css';

const Form = (props) => {
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
            >
                <div className="form-box">
                    <TextField
                        label="Nom"
                        id="name"
                        size="small"
                    />
                    <TextField
                        label="E-Mail"
                        id="email"
                        type="email"
                        size="small"
                    />
                    <TextField
                        label="N°"
                        id="street_number"
                        size="small"
                    />
                    <TextField
                        label="Route"
                        id="route"
                        size="small"
                    />
                    <TextField
                        label="Code Postal"
                        id="zip_code"
                        size="small"
                    />
                    <TextField
                        label="Ville"
                        id="city"
                        size="small"
                    />
                    <FormControl fullWidth>
                        <InputLabel id="select-type">Type</InputLabel>
                        <Select
                            labelId="select-type"
                            id="simple-select"

                            label="Type"

                        >
                            <MenuItem value="distribution">Distribution</MenuItem>
                            <MenuItem value="douche">Douche</MenuItem>
                            <MenuItem value="wifi">Wi-Fi</MenuItem>
                        </Select>
                    </FormControl>

                <Button
                    type="submit"
                    variant="contained"
                >
                    Ajouter
                </Button>
                </div>

            </Box>
        </div>
    )
}

export default Form;