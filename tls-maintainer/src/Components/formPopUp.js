import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  var [cn, setCN] = useState()
  var [issued, setIssued] = useState()
  var [expires, setExpires] = useState()


  const cnUpdate=(event)=>{                         // Dealing with name field changes to update our state
    setCN(event.target.value)
  }

  const issuedUpdate=(event)=>{                         
    setIssued(event.target.value)
  }

  const expiresUpdate=(event)=>{                         
    setExpires(event.target.value)
  }


  const handleSubmit = () => {
    const postURL = "/api/staff"
    fetch(postURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cn: cn,
        issued: issued,
        expires: expires
      })
    })
    handleClose()                                 //Closes form after submitting
  }  
  

  return (
    <div className='navbarButton'>
      <Button variant="outlined" onClick={handleClickOpen}>
        New Entry
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Entry</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please insert a Common Name, its Date of Issue, and Date of Expiration.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
                type="text"
                name="CN"
                onChange={cnUpdate}
                label="Common Name (CN)"
                margin="dense"
                fullWidth
                variant="standard"
                required
            />
            <TextField
                type="date"
                name="Issued"
                onChange={issuedUpdate}
                label="Issued Date"
                margin="normal"
                variant="standard"
                required
                InputLabelProps={{ shrink: true }}              //Prevents label and date entered from overlapping
            />
            <TextField
                type="date"
                name="Expires"
                onChange={expiresUpdate}
                label="Expiration Date"
                margin="normal"
                variant="standard"
                required
                InputLabelProps={{ shrink: true }}              //Prevents label and date entered from overlapping
            />
        </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}