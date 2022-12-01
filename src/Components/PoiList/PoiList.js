import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { DataGrid } from '@mui/x-data-grid';

import './PoiList.css';

const categories = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'Nom',
    width: 300,
    editable: true,
  },
  {
    field: 'number',
    headerName: 'N°',
    width: 10,
    sortable: false,
    editable: true,
  },
  {
    field: 'street',
    headerName: 'Rue',
    width: 250,
    sortable: false,
    editable: true,
  },
  {
    field: 'zip',
    headerName: 'Code Postal',
    width: 100,
    sortable: false,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'Ville',
    width: 90,
    sortable: false,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type de POI',
    width: 100,
    sortable: false,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Statut',
    width: 150,
    sortable: true
  },
  {
    field: 'state',
    headerName: 'État',
    width: 100,
    sortable: true
  },
];

// Integration of a data grid to display the datas in a more readable way.
const PoiList = (props) => {
  return (
    <div className="grid-data">
      <Divider
        textAlign="left"
      >
        Liste des points d'intérêts géolocalisés (POI)
      </Divider>
      <Container width='75%'>
        <Box sx={{ bgcolor: '#cfe8fc', height: '30px', borderRadius: 5, margin: '10px' }}>
          <p className="info-txt">Pour faire une modification de donnée, double-cliquez sur celle-ci.</p>
        </Box>
      </Container>
      <Box sx={{ height: 500, margin: 10}}>
        <DataGrid
          rows={props.contributions}
          columns={categories}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          // Creation of a unique ID for the new datas submitted by the form.
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRowData = props.contributions.filter((contribution) =>
              selectedIDs.has(contribution.id)
            );
            props.onSelect(selectedRowData);
          }}
          initialState={{
            sorting: {
              sortModel: [{ field: 'status', sort: 'desc' }],
            },
          }} 
        />
      </Box>
      {/* Displaying these two buttons when isModerationOn is called */}
      { props.isModerationOn &&
        <div className="onClick-btn"> 
          <Button
            variant="outlined" 
            sx={{
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 5,
              marginRight: 5,
            }}
            onClick={props.onToggleStatus}
          >
            Changer le statut
          </Button>
          <Button 
            variant="outlined" 
            onClick={props.onInformationNeeded}
          >
            Besoin d'informations
          </Button>
        </div>
      }
    </div>
  );
};

export default PoiList;