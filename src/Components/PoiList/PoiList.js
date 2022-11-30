import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'Nom',
    width: 150,
  },
  {
    field: 'address',
    headerName: 'Adresse',
    width: 150,
    sortable: false
  },
  {
    field: 'type',
    headerName: 'Type de POI',
    width: 110,
    editable: true,
    sortable: true
  },

];

const rows = [
  { id: 1, name: 'Emmaüs Beauté & Bien-être 10ème', address: '179 Quai de Valmy, 75010 Paris', type: 'douche' },
  { id: 2, name: 'Bains-douches Meaux', address: '18 Rue de Meaux, 75019 Paris', type: 'douche' },
  { id: 3, name: 'Entraide et partage avec les sans-logis (EPALSL)', address: '22 rue Sainte-Marthe, 75010 Paris', type: 'douche' },
  { id: 4, name: 'Paris WiFi 1605', address: 'Place du 11-Novembre-1918, 75010 Paris', type: 'Wi-Fi' },
  { id: 5, name: 'ESI La Halle Saint-Didier', address: '23 Rue Mesnil, 75116 Paris', type: 'Wi-Fi' },
  { id: 6, name: 'Itinérances', address: '61 Boulevard de Magenta', type: 'distribution' },
];

const PoiList = () => {
  return (
    <Box sx={{ height: 800, width: '50%', margin: 40}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default PoiList;