import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './Form.css';
import { Button } from '@mui/material';

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

                <Button
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