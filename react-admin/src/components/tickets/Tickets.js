import React, { useState } from 'react'
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import TicketsDialog from './TicketsDialog';
import TicketsTable from './TicketsTable';

function Tickets() {
  const [search, setSearch] = useState('');
  const [showTicketsDialog, setShowTicketsDialog] = useState(false);
  const [rows, setRows] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleAddRow = (clientName, subject, description, priority, assignedTo, dueDate) => {
    console.log(clientName, subject, description, priority, assignedTo, dueDate);
    const newRow = { id: uuidv4(), clientName, subject, priority, dueDate: dueDate, assignedTo };

    setRows(prevRows => [...prevRows, newRow]);
  };

  const handleNewChatClick = async () => {
    setShowTicketsDialog(true);
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

        <Button variant="contained" onClick={handleNewChatClick}>New Ticket</Button>
        <TicketsDialog open={showTicketsDialog} onClose={() => setShowTicketsDialog(false)} onSubmit={handleAddRow} />
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
              <MenuItem value={'clientName'}>Client Name</MenuItem>
              <MenuItem value={'subject'}>Subject</MenuItem>
              <MenuItem value={'priority'}>Priority</MenuItem>
              <MenuItem value={'dueDate'}>Due Date</MenuItem>
              <MenuItem value={'assignedTo'}>Assigned To</MenuItem>
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
        <TicketsTable rows={rows} setRows={setRows}/>
      </Box>
    </div>
  )
}

export default Tickets