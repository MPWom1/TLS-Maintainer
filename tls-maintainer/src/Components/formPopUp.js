import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formSubmit = () => {
    fetch("/database/postOne", {
        method: "POST",
        body: JSON.stringify({
            CN: "*Toyota.com",
            Issued: new Date("2023-1-22"),
            Expires: new Date("2024-1-22")
    }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
  };

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
          <TextField
            margin="dense"
            id="CommonName"
            label="Common Name (CN)"
            type="string"
            fullWidth
            variant="standard"
            required
          />
          <TextField
            margin="normal"
            id="IssuedDate"
            label="Issued Date"
            type="date"
            variant="standard"
            required
            InputLabelProps={{ shrink: true }}
          />
          <TextField
            margin="normal"
            id="ExpirationDate"
            label="Expiration Date"
            type="date"
            variant="standard"
            required
            InputLabelProps={{ shrink: true }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={formSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}








{/* <Button onClick= {() =>         //Posts data to collection, needs inputs from form
                    fetch("/database/postOne", {
                        method: "POST",
                        body: JSON.stringify({
                            CN: "*Toyota.com",
                            Issued: new Date("2023-1-22"),
                            Expires: new Date("2024-1-22")
                    }),
                        headers: {
                            "Content-type": "application/json; charset=UTF-8"
                        }
                    })
                    }> New Entry </Button> */}