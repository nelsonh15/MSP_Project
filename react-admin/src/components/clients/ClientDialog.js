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
  FormControlLabel, 
  FormGroup,
  Switch
} from '@mui/material';

const ClientDialog = ({ open, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [clientID, setClientID] = useState('');
  const [location, setLocation] = useState('');
  const [poc_name, setPoc_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [active, setActive] = useState("No");
  const [type, setType] = useState(null);

  const handleSubmit = () => {
    onSubmit(name, clientID, location, poc_name, email, phone, active, type);
    setName('')
    setClientID('')
    setLocation('')
    setPoc_name('')
    setEmail('')
    setPhone('')
    setActive("No");
    setType(null)
    onClose();
  };
  
  const handleActiveChange = (event) => {
    setActive(event.target.checked ? "Yes" : "No");
  };  

  const handleTypeChange = (event, newValue) => {
    setType(newValue); 
  };

  const isFormFilled = name && clientID && location && poc_name && email && phone && type;
  const types = ['test1', 'test2', 'test3', 'test4']
  
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle align='center'>New Client</DialogTitle>
        
        <DialogContent>
          <TextField required autoFocus margin="dense" id="name" label="Name" fullWidth variant="standard" value={name} onChange={(e) => setName(e.target.value)}/>
          <TextField required autoFocus margin="dense" id="client_id" label="Client ID" fullWidth variant="standard" value={clientID} onChange={(e) => setClientID(e.target.value)}/>
          <TextField required autoFocus margin="dense" id="location" label="Location" fullWidth variant="standard" value={location} onChange={(e) => setLocation(e.target.value)}/>
          <TextField required autoFocus margin="dense" id="poc_name" label="POC Name" fullWidth variant="standard" value={poc_name} onChange={(e) => setPoc_name(e.target.value)}/>
          <TextField required autoFocus margin="dense" id="email" label="Email" fullWidth variant="standard" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <TextField required autoFocus margin="dense" id="phone" label="Phone" fullWidth variant="standard" value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <Box component="form" sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', mt: 3}}>
              <FormControl required sx={{ m: 1, minWidth: 120}}>
                <FormGroup aria-label="position" row>
                  <FormControlLabel 
                    value={active} 
                    onChange={handleActiveChange}
                    control={<Switch color="primary" />}
                    label="Active?"
                    labelPlacement="top"/>
                  <Autocomplete
                    value={type}
                    onChange={handleTypeChange}
                    options={types}
                    sx={{ width: 200}} // Control the width and height of the dropdown
                    renderInput={(params) => (
                    <TextField {...params} label={'Type'} />
                    )} />
                </FormGroup>
              </FormControl>
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
export default ClientDialog