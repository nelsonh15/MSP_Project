import React, { useState } from "react";
import {
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  FormControl,
  Autocomplete,
  FormGroup,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const TicketsDialog = ({ open, onClose, onSubmit }) => {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [clientName, setClientName] = useState('');
  const [priority, setPriority] = useState(null);
  const [assignedTo, setAssignedTo] = useState(null);
  const [dueDate, setDueDate] = useState('')

  const handleSubmit = () => {
    onSubmit(clientName, subject, description, priority, assignedTo, dueDate);
    setSubject('')
    setDescription('')
    setClientName('')
    setPriority(null)
    setAssignedTo(null)
    setDueDate('')
    onClose();
  };

  const handlePriorityChange = (event, newValue) => {
    setPriority(newValue);
  };
  const handleAssignedToChange = (event, newValue) => {
    setAssignedTo(newValue);
  };

  const isFormFilled = subject && description && clientName && priority && assignedTo;
  const priorities = ['Low', 'Medium', 'High']
  const users = ['John', 'Bill', 'Jeff']

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle align='center'>New Ticket</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
            <FormControl required sx={{ m: 1, minWidth: 200 }}>
              <FormGroup aria-label="position" row>
                <Autocomplete
                  value={priority}
                  onChange={handlePriorityChange}
                  options={priorities}
                  sx={{ width: 250, }} // Control the width and height of the dropdown
                  renderInput={(params) => (
                    <TextField {...params} label={'Priority'} />
                  )} />
                <Autocomplete
                  value={assignedTo}
                  onChange={handleAssignedToChange}
                  options={users}
                  sx={{ width: 250, }} // Control the width and height of the dropdown
                  renderInput={(params) => (
                    <TextField {...params} label={'Assigned To'} />
                  )} />
              </FormGroup>
            </FormControl>
          </Box>

          <TextField required autoFocus margin="dense" id="clientname" label="Client Name" fullWidth variant="standard" value={clientName} onChange={(e) => setClientName(e.target.value)} />
          <TextField required autoFocus margin="dense" id="subject" label="Subject" fullWidth variant="standard" value={subject} onChange={(e) => setSubject(e.target.value)} />
          <TextField required autoFocus margin="dense" id="description" label="Description" fullWidth variant="standard" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker label="Due Date" onChange={(newValue) => setDueDate(newValue ? new Date(newValue.toISOString()) : null)} />
              </DemoContainer>
            </LocalizationProvider>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!isFormFilled}>Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default TicketsDialog