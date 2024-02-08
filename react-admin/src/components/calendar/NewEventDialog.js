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
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const NewEventDialog = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [repeat, setRepeat] = useState(null);
  const [clientName, setClientName] = useState(null);

  const handleSubmit = () => {
    onSubmit(title, description, startDate, endDate, repeat, clientName);
    setTitle('')
    setDescription('')
    setStartDate('')
    setEndDate('')
    setRepeat(null)
    setClientName(null)
    onClose();
  };

  const handleRepeat = (event, newValue) => {
    setRepeat(newValue);
  };
  const handleClient = (event, newValue) => {
    setClientName(newValue);
  };

  const isFormFilled = title && description && startDate && endDate && repeat && clientName;
  const repeat_options = ['Never', 'Day', 'Week', 'Month', 'Year']
  const clients = ['John', 'Bill', 'Jeff']

  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle align='center'>New Event</DialogTitle>
        <DialogContent>
          <TextField required autoFocus margin="dense" id="title" label="Title" fullWidth variant="standard" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField required autoFocus margin="dense" id="description" label="Description" fullWidth variant="standard" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DemoItem>
                  <DateTimePicker label="Start Date" onChange={(newValue) => setStartDate(newValue)} views={['year', 'day', 'hours', 'minutes']} />
                </DemoItem>
                <DemoItem>
                  <DateTimePicker label="End Date" onChange={(newValue) => setEndDate(newValue)} views={['year', 'day', 'hours', 'minutes']} />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>
          </Box>

          <Box component="form" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', mt: 1 }}>
            <FormControl required sx={{ m: 1, minWidth: '100%' }}>
              <FormGroup aria-label="position" column="true">
                <Autocomplete
                  sx={{ paddingTop: 1 }}
                  value={repeat}
                  onChange={handleRepeat}
                  options={repeat_options}
                  renderInput={(params) => (
                    <TextField {...params} label={'Repeat'} />
                  )} />
                <Autocomplete
                  sx={{ paddingTop: 3 }}
                  value={clientName}
                  onChange={handleClient}
                  options={clients}
                  renderInput={(params) => (
                    <TextField {...params} label={'Client'} />
                  )} />
              </FormGroup>
            </FormControl>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={handleSubmit} disabled={!isFormFilled}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default NewEventDialog