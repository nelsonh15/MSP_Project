import React, { useState } from 'react'
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ClientDialog from './ClientDialog';
import ClientsTable from './ClientsTable';

function Clients() {
  const [search, setSearch] = useState('');
  const [showClientDialog, setShowClientDialog] = useState(false);
  const [rows, setRows] = useState([]);
  console.log(rows);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleAddRow = (name, clientID, location, poc_name, email, phone, active, type ) => {
    console.log(name, clientID, location, poc_name, email, phone, active, type );
    const newRow = { id: uuidv4(), name, active, type, client_id: clientID }; // Assuming these are the fields you want in the row
    setRows(prevRows => [...prevRows, newRow]);
  };

  const handleNewChatClick = async () => {
    setShowClientDialog(true);
  };

  return (
    <div>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#90caf9',
        mt: 2.5,
        height: '4rem',
        boxShadow: 5,
        px: 5,
      }}>

        <Button variant="contained" onClick={handleNewChatClick}>New Client</Button>
        <ClientDialog open={showClientDialog} onClose={() => setShowClientDialog(false)} onSubmit={handleAddRow} />
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'center',
        }}>
          <FormControl variant="filled" sx={{ minWidth: 120, mr: 1, height: '2.9rem' }}>
            <InputLabel id="demo-simple-select-filled-label">Search</InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={search}
              onChange={handleChange}
              sx={{ height: '2.95rem', fontSize: '1rem' }}
            >
              <MenuItem value={'name'}>Name</MenuItem>
              <MenuItem value={'active'}>Active</MenuItem>
              <MenuItem value={'type'}>Type</MenuItem>
              <MenuItem value={'client_id'}>Client ID</MenuItem>
              <MenuItem value={'comments'}>Comments</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="filled-basic"
            label="Search"
            variant="filled"
            sx={{
              width: '40rem',
              fontSize: '0.9rem',
              '& .MuiInputBase-root': {
                height: '3rem',
              },
            }}
          />
        </Box>
      </Box>
      <Box sx={{ padding: '15px' }}>
        <ClientsTable rows={rows} setRows={setRows} />
      </Box>
    </div>
  )
}

export default Clients