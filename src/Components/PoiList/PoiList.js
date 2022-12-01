import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';

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
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'street',
    headerName: 'Rue',
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'zip',
    headerName: 'Code Postal',
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'Ville',
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'lat',
    headerName: 'Latitude',
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'lng',
    headerName: 'Longitude',
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type de POI',
    width: 300,
    sortable: false,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Statut',
    width: 300,
    sortable: true
  },
  {
    field: 'state',
    headerName: 'État',
    width: 300,
    sortable: true
  },
];


const PoiList = (props) => {
  return (
    <>
      <Box sx={{ height: 500, margin: 0}}>
        <DataGrid
          rows={props.contributions}
          columns={categories}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
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
      { props.isModerationOn &&
        <>
          <Button onClick={props.onToggleStatus}>TOGGLE STATUS</Button>
          <Button onClick={props.onInformationNeeded}>NEED INFORMATION</Button>
        </>
      }
    </>
  );
};

export default PoiList;